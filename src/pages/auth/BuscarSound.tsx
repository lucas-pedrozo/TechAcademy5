import { useEffect, useState } from "react";
import api from "@/service/api";
import axios from "axios";
import AOS from "aos";
import ContainerSound from "@/components/custom/ContainerSond";
import { PaginationComponent } from "@/components/custom/ConponentesPagination";
import { ButtonDelete, ButtonUpdate } from "@/components/ui/Button";

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

const BuscarSound = () => {
    const SyInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2";
    const styleInput = "bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const styleForm = "flex flex-col gap-2.5 ";
    const styleHr = "h-[3px] rounded-full";

    const [loading, setLoading] = useState(false);
    const [sounds, setSounds] = useState<MapItems[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Estados dos inputs
    const [updateId, setUpdateId] = useState<number | string>("");
    const [updateAuthor, setUpdateAuthor] = useState<string>("");
    const [updateCategory, setUpdateCategory] = useState<string>("");
    const [updateTitle, setUpdateTitle] = useState<string>("");
    const [deleteId, setDeleteId] = useState<number | string>("");

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const filteredSounds = sounds.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSounds.length / itemsPerPage);
    const paginatedSounds = filteredSounds.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        AOS.init({ duration: 500 });
        getAllItems();
    }, []);

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

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.put(`/items/${updateId}`, {
                id: updateId,
                name: updateTitle,
                author: updateAuthor,
                category: updateCategory
            });
            alert("Atualização realizada com sucesso!");
            location.reload();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error?.response?.data?.error
                    ? error.response.data.error.map((e: { message: string }) => e.message).join(', ')
                    : "Erro ao atualizar";
                alert(errorMessage);
            }
        }
    };

    const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.delete(`/items/${deleteId}`);
            alert("Item excluído com sucesso!");
            location.reload();
        } catch (error) {
            alert(axios.isAxiosError(error) ? error?.response?.data || "Erro ao excluir o item." : "Erro desconhecido.");
        }
    };

    if (loading) {
        return <div className="text-center text-lg font-bold py-10">Carregando...</div>;
    }

    return (
        <main className="px-2.5 py-10 max-w-[1220px] m-auto flex flex-col gap-5">
            <section className="flex gap-2.5 flex-col min-[600px]:flex-row" data-aos="fade-up">
                <div className="w-full">
                    <form onSubmit={handleUpdate} className={styleForm}>
                        <input
                            type="number"
                            className={styleInput}
                            placeholder="Id Sound"
                            value={updateId}
                            onChange={(e) => setUpdateId(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className={styleInput}
                            placeholder="Id Author"
                            value={updateAuthor}
                            onChange={(e) => setUpdateAuthor(e.target.value)}
                        />
                        <input
                            type="text"
                            className={styleInput}
                            placeholder="Id Category"
                            value={updateCategory}
                            onChange={(e) => setUpdateCategory(e.target.value)}
                        />
                        <input
                            type="text"
                            className={styleInput}
                            placeholder="Title Sound"
                            value={updateTitle}
                            onChange={(e) => setUpdateTitle(e.target.value)}
                        />
                        <ButtonUpdate />
                    </form>
                </div>

                <div className="w-full" data-aos="fade-up">
                    <form onSubmit={handleDelete} className={styleForm}>
                        <input
                            type="number"
                            className={styleInput}
                            placeholder="Id Sound"
                            value={deleteId}
                            onChange={(e) => setDeleteId(e.target.value)}
                            required
                        />
                        <ButtonDelete />
                    </form>
                </div>
            </section>

            <div className="py-7">
                <hr className={styleHr} data-aos="fade-up" />
            </div>

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
                    <ContainerSound
                        key={index}
                        src={`../../../public/${item.directory}`}
                        IdSound={item.id}
                        name={item.name}
                        author={item.author?.name}
                        className1="hidden"
                        className2="flex"
                    />
                ))}
            </section>

            <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </main>
    );
};

export default BuscarSound;
