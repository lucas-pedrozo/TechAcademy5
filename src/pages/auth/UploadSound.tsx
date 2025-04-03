import { ButtonUpdate } from "@/components/ui/Button";

function UploadSound() {
    const styleInput = "w-full bg-white/20 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const styleForm = "w-full bg-white/20 backdrop-blur-xl rounded-3xl border-1 border-white text-white p-2.5 || flex flex-col gap-2.5";
    
    const styleDivLabel = "flex flex-col gap-1.5";
    const styleLabel = "pl-2.5";



    return (
        <section className="max-w-[700px] mx-auto px-2.5 py-10">
            <form action="" className={`${styleForm}`} >
                <div className={styleDivLabel}>
                    <label htmlFor="UploadSound" className={styleLabel}>Title Sound</label>
                    <input type="text" name="UploadSound" placeholder="Title Sound" className={styleInput} />
                </div>
                <div className={styleDivLabel}>
                    <label htmlFor="UploadSound" className={styleLabel}>Author</label>
                    <input type="number" name="UploadSound" placeholder=" Id Author" className={styleInput} />
                </div>
                <div className={styleDivLabel}>
                    <label htmlFor="UploadSound" className={styleLabel}>Category</label>
                    <input type="number" name="UploadSound" placeholder="id Category" className={styleInput} />
                </div>
                <div className={styleDivLabel}>
                    <label htmlFor="UploadSound" className={styleLabel}>Upload Sound</label>
                    <input type="file" name="UploadSound" className={styleInput} />
                </div>
                <div className={styleDivLabel}>
                    <label htmlFor="UploadSound" className={styleLabel}>Upload Sound</label>
                    <input type="file" name="UploadSound" className={styleInput} />
                </div>
                <div className="flex justify-end">
                    <ButtonUpdate />
                </div>
            </form>
        </section>
    )
}

export default UploadSound;