import { PaginationComponent } from "@/components/custom/ConponentesPagination";
import ContainerSound from "@/components/custom/ContainerSond";

import { useEffect, useState } from "react";
import api from "@/service/api";
import AOS from "aos";

interface MapAuthor {
    id: number;
    name: string;
}

interface MapItems {
    id: number;
    name: string;
    author: MapAuthor;
    directory: string;
}

const Sound = () => {

    const styleInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2";
    const styleTutleSound = "bg-white/20 backdrop-blur-xl border-1 border-white rounded-full px-5 py-2 font-bold";

    const [sounds, setSounds] = useState<MapItems[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredSounds = sounds.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSounds.length / itemsPerPage);
    const paginatedSounds = filteredSounds.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getAllItems();
    }, []);

    if (loading) {
        return <div className="text-center text-lg font-bold py-10">Loading...</div>;
    }

    const getAllItems = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/items");
            setSounds(data);
        } catch (error) {
            alert("Error when loading items");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="px-2.5 py-10 max-w-[1220px] m-auto flex flex-col gap-5">
            <div className="py-5 flex justify-center" data-aos="fade-up">
                <input
                    type="search"
                    placeholder="search..."
                    className={`${styleInput} max-w-[700px]`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex justify-start items-center pt-8 px-2.5" data-aos="fade-up">
                <span className={`${styleTutleSound}`}>
                    Sound
                </span>
            </div>

            <section className="flex flex-col gap-2.5">
                {!filteredSounds.length && <span className="text-center">Nenhum resultado encontrado</span>}
                {paginatedSounds.map((item, index) => (

                    <ContainerSound
                        src={`../../../public/audio/${item.directory}`}
                        key={index}
                        name={item.name}
                        author={item.author?.name}
                        className1="flex"
                        className2="hidden"
                    />

                ))}
            </section>
            <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </main>
    );
};

export default Sound;
