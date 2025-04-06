import BlocoAuthorCatg from "@/components/custom/BlocoAuthorCatg";
import { ButtonCreate, ButtonDelete, ButtonUpdate } from "@/components/ui/Button";
import api from "@/service/api";
import AOS from "aos";
import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
    id: number;
    name: string;
}

function AdminCategory() {

    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const styleForm = "flex flex-col gap-2.5 w-full";
    const styleHr = "h-[3px] rounded-full";

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Item[]>([]);

    // Inputs controlados
    const [createName, setCreateName] = useState("");
    const [updateId, setUpdateId] = useState<number | string>("");
    const [updateName, setUpdateName] = useState("");
    const [deleteId, setDeleteId] = useState<number | string>("");

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getCategories();
    }, []);

    const getCategories = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/categories");
            setItems(data);
        } catch (error) {
            alert(axios.isAxiosError(error) ? error?.response?.data || "Erro ao carregar os dados." : "Erro desconhecido.");
        } finally {
            setLoading(false);
        }
    };

    const handleSound = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post("/categories", { name: createName });
            alert("Registro realizado com sucesso!");
            location.reload();
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar o registro.");
        }
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.put(`/categories/${updateId}`, {
                id: Number(updateId),
                name: updateName,
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
            await api.delete(`/categories/${deleteId}`);
            alert("Categoria deletada com sucesso!");
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

    if (loading) {
        return <div className="text-center text-lg font-bold py-10">Carregando...</div>;
    }

    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px]">
            <section className="flex gap-2.5 flex-col min-[700px]:flex-row" data-aos="fade-up">
                <div className="w-full">
                    <p>Criar Categoria</p>
                    <form onSubmit={handleSound} className={styleForm}>
                        <input
                            type="text"
                            className={styleInput}
                            placeholder="Name Category"
                            value={createName}
                            onChange={(e) => setCreateName(e.target.value)}
                        />
                        <ButtonCreate />
                    </form>
                </div>

                <div className="w-full" data-aos="fade-up">
                    <p>Atualizar Categoria</p>
                    <form onSubmit={handleUpdate} className={styleForm}>
                        <input
                            type="number"
                            className={styleInput}
                            placeholder="ID Category"
                            value={updateId}
                            onChange={(e) => setUpdateId(e.target.value)}
                        />
                        <input
                            type="text"
                            className={styleInput}
                            placeholder="Name Category"
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                        />
                        <ButtonUpdate />
                    </form>
                </div>

                <div className="w-full" data-aos="fade-up">
                    <p>Deletar Categoria</p>
                    <form onSubmit={handleDelete} className={styleForm}>
                        <input
                            type="number"
                            className={styleInput}
                            placeholder="ID Category"
                            value={deleteId}
                            onChange={(e) => setDeleteId(e.target.value)}
                        />
                        <ButtonDelete />
                    </form>
                </div>
            </section>

            <div className="py-7">
                <hr className={styleHr} data-aos="fade-up" />
            </div>

            <section className="flex flex-wrap gap-3 justify-center items-center">
                {items.map(item => (
                    <BlocoAuthorCatg key={item.id} Id={item.id} Name={item.name} />
                ))}
            </section>
        </main>
    );
}

export default AdminCategory;
