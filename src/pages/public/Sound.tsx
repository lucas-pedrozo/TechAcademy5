import { useEffect, useState } from "react";
import api from "@/service/api";
import axios from "axios";
import AOS from "aos";
import ContainerSound from "@/components/custom/ContainerSond";
import { PaginationComponent } from "@/components/custom/ConponentesPagination";

interface MapAuthor {
    id: number;
    name: string;
}

interface MapItems {
    name: string;
    author: MapAuthor;
    directory: string;
}

const Sound = () => {
    const SyInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2";

    const [loading, setLoading] = useState(false);
    const [sounds, setSounds] = useState<MapItems[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const filteredSounds = sounds.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSounds.length / itemsPerPage);
    const paginatedSounds = filteredSounds.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const getAllItems = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/items");
            setSounds(data);
        } catch (error) {
            alert(axios.isAxiosError(error) ? error?.response?.data || "Erro ao carregar os dados." : "Erro desconhecido.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 500 });
        getAllItems();
    }, []);

    if (loading) {
        return <div className="text-center text-lg font-bold py-10">Carregando...</div>;
    }

    return (
        <main className="px-2.5 py-10 max-w-[1220px] m-auto flex flex-col gap-5">
            <div className="py-5 flex justify-center">
                <input
                    type="search"
                    placeholder="search..."
                    className={`${SyInput} max-w-[700px]`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex justify-start items-center pt-8 px-2.5" data-aos="fade-up">
                <p className="bg-white/20 backdrop-blur-xl border-1 border-white rounded-full px-5 py-2 font-bold">
                    Sound
                </p>
            </div>

            <section className="flex flex-col gap-2.5">
                {!filteredSounds.length && <span className="text-center">Nenhum resultado encontrado</span>}
                {paginatedSounds.map((item, index) => (
                    <ContainerSound key={index} src={`../../../public/${item.directory}`} name={item.name} author={item.author?.name} className1="flex" className2="hidden" />
                ))}
            </section>
            <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </main>
    );
};

export default Sound;
