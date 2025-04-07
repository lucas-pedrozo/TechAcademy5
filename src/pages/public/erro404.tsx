import { Link } from "react-router-dom";

function Erro404() {

    const styleButton = 'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] || hover:scale-105 transition transform duration-300 bg-white rounded-full px-5 py-2.5 || text-black font-semibold '


    return (
        <div className="min-h-[51vh] flex flex-col gap-3 justify-center items-center">
            <h1 className="font-bold text-7xl">Erro 404</h1>
            <Link to={'/'} className={styleButton}>Voltar para Home</Link>
        </div>
    );
}
export default Erro404;