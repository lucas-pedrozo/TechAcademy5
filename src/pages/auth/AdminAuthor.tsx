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


    const [updateId, setUpdateId] = useState<number | string>("");
    const [deleteId, setDeleteId] = useState<number | string>("");
    const [createName, setCreateName] = useState("");
    const [updateName, setUpdateName] = useState("");

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getCategories();
    }, []);

    if (loading) {
        return <div className="text-center text-lg font-bold py-10">Carregando...</div>;
    }

    // ============================================================================================== //

    const getCategories = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/authors");
            setItems(data);
        } catch (error) {
            console.log(error);
            alert("Unknown error!");
        } finally {
            setLoading(false);
        }
    };

    // ============================================================================================== //

    const handleSound = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post("/authors", { name: createName });
            alert("Registro realizado com sucesso!");
            location.reload();
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar o registro.");
        }
    };

    // ============================================================================================== //


    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.put(`/authors/${updateId}`, {
                id: Number(updateId),
                name: updateName,
            });

            alert("Update completed successfully!");
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

    // ============================================================================================== //

    const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.delete(`/authors/${deleteId}`);

            alert("Category deleted successfully!");
            location.reload();
        } catch (error) {
            alert("Unknown error!");
            console.log(error);
        }
    };

    // ============================================================================================== //

    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px] min-h-[51vh]">
            <section className="flex gap-2.5 flex-col min-[700px]:flex-row" data-aos="fade-up">

                <div className="w-full">
                    <label>Create Author</label>
                    <form onSubmit={handleSound} className={styleForm}>
                        <input
                            type="text"
                            placeholder="Name authors"
                            className={styleInput}
                            value={createName}
                            onChange={(e) => setCreateName(e.target.value)}
                        />
                        <ButtonCreate />
                    </form>
                </div>

                <div className="w-full">
                    <label>Update Author</label>
                    <form onSubmit={handleUpdate} className={styleForm}>
                        <input
                            type="number"
                            placeholder="ID authors"
                            className={styleInput}
                            value={updateId}
                            onChange={(e) => setUpdateId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Name authors"
                            className={styleInput}
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                        />
                        <ButtonUpdate />
                    </form>
                </div>

                <div className="w-full">
                    <label>Delet Author</label>
                    <form onSubmit={handleDelete} className={styleForm}>
                        <input
                            type="number"
                            placeholder="ID authors"
                            className={styleInput}
                            value={deleteId}
                            onChange={(e) => setDeleteId(e.target.value)}
                        />
                        <ButtonDelete />
                    </form>
                </div>

            </section>

            <div className="py-7"><hr className={styleHr} /></div>

            <section className="flex flex-wrap justify-center items-center gap-3">
                {items.map(item => (
                    <BlocoAuthorCatg key={item.id} Id={item.id} Name={item.name} />
                ))}
            </section>

        </main>
    );
}

export default AdminCategory;
