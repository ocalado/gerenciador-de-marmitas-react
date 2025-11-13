import { ChevronLeft } from 'lucide-react';
import { useNavigate, useSearchParams } from "react-router-dom";

useSearchParams
function DescriptionMarmita() {
    const [searchParams] = useSearchParams(); //hook para receber params de navegação
    const navigate = useNavigate();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const address = searchParams.get("address");

    return (
        <div className="w-screen min-h-screen bg-slate-500 p-6 flex justify-center items-start">
            <div className="w-[500px] space-y-4 flex flex-col justify-start">
                <div className="flex justify-center gap-2 items-center">
                    <button
                        onClick={() => navigate(-1)} // o -1 retorna pra página anterior
                        className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
                    >
                        <ChevronLeft />
                    </button>

                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                        Detalhes do Pedido
                    </h1>
                </div>

                <div className="bg-slate-200 space-y-4 p-4 rounded-md">
                    <h2 className="text-xl font-bold text-slate-700">Marmita para {title.toLocaleUpperCase()}</h2>
                    <p>Descrição: <b>{description.toLocaleUpperCase()}</b></p>
                    <p>Entregar em: <b>{address.toLocaleUpperCase()}</b></p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionMarmita;