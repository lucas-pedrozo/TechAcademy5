type Props = {
    Id: number;
    Name: string;
}

const BlocoAuthorCatg = ({ Id, Name }: Props) => {

    const styleAuthor = "flex flex-col gap-1.5 bg-white/20 backdrop-blur-xl rounded-2xl border-1 border-white font-bold text-white py-2 px-5 || max-w-[300px]";
    return (
        <div className={`${styleAuthor}`} data-aos="fade-up">
            <span>ID: {Id}</span>
            <span>NAME: {Name}</span>
        </div>
    );
};

export default BlocoAuthorCatg;