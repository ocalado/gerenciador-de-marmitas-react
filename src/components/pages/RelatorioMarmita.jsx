import { ChevronLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
useLocation


export default function RelatorioMarmita() {
    const location = useLocation();
  const { marmitas } = location.state || { marmitas: [] };
  console.log("marmitas ==> ", marmitas);
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
            <div className="flex justify-center gap-2 items-center">
                    <button
                        onClick={() => navigate(-1)} // o -1 retorna pra página anterior
                        className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"
                    >
                        <ChevronLeft />
                    </button>

                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                        Relatório de vendas
                    </h1>
                </div>
            </div>
        </div>
    )
}