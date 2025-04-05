import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/custom/Input";
import { ButtonUpdate } from "@/components/ui/Button";
import api from "@/service/api";


interface SoundFormData {
    name: string;
    author: number;
    category: number;
    directory: File[];
}


function UploadSound() {
    const errorStyle = "text-red-500 text-sm font-medium";
    const { register, handleSubmit, formState: { errors } } = useForm<SoundFormData>();

    const handleSound: SubmitHandler<SoundFormData> = async (data) => {
        try {
            const file = data.directory[0];
            console.log("Nome do arquivo:", file.name);

            const requestBody = {
                name: data.name,
                author_id: data.author,
                category_id: data.category,
                directory: file.name
            }

            console.log("Request Body:", requestBody);

            await api.post("/items", requestBody);

            alert("Registro realizado com sucesso!");
            location.reload();
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar o registro.");
        }
    };


    return (
        <form className="flex flex-col gap-4 max-w-[600px] py-10 mx-auto" onSubmit={handleSubmit(handleSound)}>
            <section>
                <Input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                />
                {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
            </section>

            <section>
                <Input
                    type="number"
                    id="author"
                    placeholder="ID do autor"
                    {...register("author", { required: "ID do autor é obrigatório", valueAsNumber: true })}
                />
                {errors.author && <span className={errorStyle}>{errors.author.message}</span>}
            </section>

            <section>
                <Input
                    type="number"
                    id="category"
                    placeholder="ID da categoria"
                    {...register("category", { required: "ID da categoria é obrigatório", valueAsNumber: true })}
                />
                {errors.category && <span className={errorStyle}>{errors.category.message}</span>}
            </section>

            <section>
                <Input
                    type="file"
                    id="directory"
                    placeholder="Arquivo"
                    {...register("directory", { required: "Arquivo é obrigatório" })}
                />
                {errors.directory && <span className={errorStyle}>{errors.directory.message}</span>}
            </section>

            <ButtonUpdate />
        </form>
    );
}
export default UploadSound;