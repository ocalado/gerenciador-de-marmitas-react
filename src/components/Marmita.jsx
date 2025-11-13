import { ChevronRight, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Marmitas({marmitas, onMarmitaClick, onDeleteTaskClick}){
    const navigate = useNavigate(); // hook de navegação

    function onSeeDetailsClick(task){
        if(!task.isCompleted) {
            const query = new URLSearchParams(); // usado para boas práticas 
            query.set("title", task.title);
            query.set("description", task.description);
            query.set("address", task.address)
            navigate(`/marmita?${query.toString()}`)
        } else {
            return;
        }
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {marmitas.map((marmita) => (
                <li key={marmita.id} className="flex gap-1">
                    <button onClick={() => onMarmitaClick(marmita.id)} className={`bg-slate-400 w-full text-white p-2 rounded-md cursor-pointer ${marmita.isCompleted && "line-through"}`}>
                        {marmita.title}
                    </button>
                    <button onClick={() => onSeeDetailsClick(marmita)} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"><ChevronRight /></button>
                    <button onClick={() => marmita.isCompleted ? onDeleteTaskClick(marmita.id) : alert("Conclua o pedido para excluí-lo")} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer"> <Trash /></button>
                </li>
            ))}
        </ul>
    );
}

export default Marmitas;