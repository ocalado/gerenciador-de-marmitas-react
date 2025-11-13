import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import AddMarmita from "./components/AddMarmitas";
import Marmitas from "./components/Marmita";

function App() {
  const [marmitas, setMarmita] = useState(() => JSON.parse(localStorage.getItem("marmitas")) || []);
  // const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("marmitas", JSON.stringify(marmitas))
  }, [marmitas])

  function onMarmitaClick(marmitaId) {
    const newMarmitas = marmitas.map((marmita) => {
      return marmita.id === marmitaId ? { ...marmita, isCompleted: !marmita.isCompleted } : marmita;
    });

    setMarmita(newMarmitas);
  }

  function onDeleteTaskClick(marmitaId) {
    const newTaskList = marmitas.filter((marmita) => marmita.id !== marmitaId);
    setMarmita(newTaskList);
  }

  function onAddMarmitaSubmit(title, description, address){
    if(title.trim(), description.trim()) {
      const newMarmita = {
        id: uuidv4(),
        title, 
        description,
        address,
        isCompleted: false
      }
      setMarmita([...marmitas, newMarmita])
    } else {
      return alert("Preencha os dados corretamente.");
    }
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Marmitas</h1>
        {/* {marmitas?.length > 0 && <button onClick={() => navigate("/relatorio-marmitas", { state: marmitas}, )}className="bg-slate-100 text-slate-700 w-full px-4 py-2 rounded-md font-medium cursor-pointer">Relatório de vendas </button>} */}
        <AddMarmita marmitas={marmitas} onAddMarmitaSubmit={onAddMarmitaSubmit} />
        {marmitas?.length > 0 && <Marmitas marmitas={marmitas} onMarmitaClick={onMarmitaClick} onDeleteTaskClick={onDeleteTaskClick} />}
      </div>
    </div>
  )
}

export default App;