import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonUpdate } from "@/components/ui/Button";
import Input from "@/components/custom/Input";
import api from "@/service/api";
import { useEffect } from "react";
import Aos from "aos";


interface SoundFormData {
    name: string;
    author: number;
    category: number;
    directory: File[];
}


function UploadSound() {
    const { register, handleSubmit, formState: { errors } } = useForm<SoundFormData>();
    const errorStyle = "text-red-500 text-sm font-medium";

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

            await api.post("/items", requestBody);
            console.log("Request Body:", requestBody);

            alert("Registration completed successfully!");
            location.reload();
        } catch (error) {
            alert("Error registering sound.");
            console.log(error);
        }
    };

    useEffect(() => {
        Aos.init({ duration: 500, delay: 0 });
    }, [])


    return (
        <form className="flex flex-col gap-4 max-w-[600px] py-24 mx-auto" onSubmit={handleSubmit(handleSound)} data-aos="fade-up">

            <section>
                <Input
                    id="name"
                    type="text"
                    placeholder="Nome"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
            </section>

            <section>
                <Input
                    id="author"
                    type="number"
                    placeholder="ID do autor"
                    {...register("author", { required: "Author ID is required", valueAsNumber: true })}
                />
                {errors.author && <span className={errorStyle}>{errors.author.message}</span>}
            </section>

            <section>
                <Input
                    id="category"
                    type="number"
                    placeholder="ID da categoria"
                    {...register("category", { required: "Category ID is required", valueAsNumber: true })}
                />
                {errors.category && <span className={errorStyle}>{errors.category.message}</span>}
            </section>

            <section>
                <Input
                    id="directory"
                    type="file"
                    placeholder="Arquivo"
                    {...register("directory", { required: "file is required" })}
                />
                {errors.directory && <span className={errorStyle}>{errors.directory.message}</span>}
            </section>

            <ButtonUpdate />
        </form>
    );
}
export default UploadSound;