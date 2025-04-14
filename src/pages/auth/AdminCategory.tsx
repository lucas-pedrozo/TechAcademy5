import BlocoAuthorCatg from "@/components/custom/BlocoAuthorCatg";
import { useEffect, useState } from "react";
import api from "@/service/api";
import AOS from "aos";
import GlobalButton from "@/components/custom/buttons/GlobalButton";

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

    // ===========================================================================================

    const getCategories = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/categories");
            setItems(data);
        } catch (error) {
            alert("Error loading categories.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // ===========================================================================================

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

    // ===========================================================================================

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.put(`/categories/${updateId}`, {
                id: Number(updateId),
                name: updateName,
            });

            alert("Update completed successfully!");
            location.reload();
        } catch (error) {
            alert("Error updating category.");
            console.error(error);
        }
    };

    // ===========================================================================================

    const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.delete(`/categories/${deleteId}`);

            alert("Categoria deletada com sucesso!");
            location.reload();
        } catch (error) {
            alert("Error deleting category.");
            console.error(error);
        }
    };

    // ===========================================================================================

    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px]">
            <section className="flex gap-2.5 flex-col min-[700px]:flex-row" data-aos="fade-up">

                <div className="w-full" data-aos="fade-up">
                    <label>Create Category</label>
                    <form onSubmit={handleSound} className={styleForm}>
                        <input
                            type="text"
                            placeholder="Name Category"
                            className={styleInput}
                            value={createName}
                            onChange={(e) => setCreateName(e.target.value)}
                        />
                        <GlobalButton children={"Login"} buttonPosition="justify-center" />
                    </form>
                </div>

                <div className="w-full" data-aos="fade-up">
                    <label>Update Category</label>
                    <form onSubmit={handleUpdate} className={styleForm}>
                        <input
                            type="number"
                            placeholder="ID Category"
                            className={styleInput}
                            value={updateId}
                            onChange={(e) => setUpdateId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Name Category"
                            className={styleInput}
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                        />
                        <GlobalButton children={"Login"} buttonPosition="justify-center" />
                    </form>
                </div>

                <div className="w-full" data-aos="fade-up">
                    <label>Delete Category</label>
                    <form onSubmit={handleDelete} className={styleForm}>
                        <input
                            type="number"
                            placeholder="ID Category"
                            className={styleInput}
                            value={deleteId}
                            onChange={(e) => setDeleteId(e.target.value)}
                        />
                        <GlobalButton children={"Login"} buttonPosition="justify-center" />
                    </form>
                </div>
            </section>

            <div className="py-7"><hr className={styleHr} data-aos="fade-up" /></div>

            <section className="flex flex-wrap gap-3 justify-center items-center">
                {items.map(item => (
                    <BlocoAuthorCatg key={item.id} Id={item.id} Name={item.name} />
                ))}
            </section>
        </main>
    );
}

export default AdminCategory;
