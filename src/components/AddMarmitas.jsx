import { useState } from "react";


function AddMarmita({onAddMarmitaSubmit}){
    const [title , setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <label className="font-medium">Nome do cliente: </label>
            <input 
                type="text" 
                placeholder="Digite o nome do cliente"
                className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
            <label className="font-medium">Descrição da marmita: </label>
            <input 
                type="text"
                placeholder="Digite a descrição da marmita"
                className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            <label className="font-medium">Endereço de entrega: </label>
            <input 
                type="text"
                placeholder="Digite a descrição o endereço"
                className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                />
            <button 
                onClick={ () => {
                    onAddMarmitaSubmit(title, description, address);
                    setTitle("");
                    setDescription("");
                    setAddress("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">Adicionar</button>
        </div>
    )
}

export default AddMarmita;