import { Link } from 'react-router-dom'

export function CardTask({
    id,
    title,
    description,
    step,
    actionStep,
    actionDelete,
  }) {
  
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <span className="text-slate-700 text-sm leading-tight">#{id}</span>
        <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
        <p className="text-gray-600 text-base">{description}</p>
        <div className="mt-2">
          <button
            onClick={() => {
              actionStep(id, step, "backward");
            }}
            className="font-bold rounded-md py-1 px-3 text-sm bg-gray-300 text-slate-700 mr-2"
            disabled={step == "Para fazer"}
          >
            &lt;
          </button>
          <button
            onClick={() => {
              actionStep(id, step, "forward");
            }}
            className="font-bold rounded-md py-1 px-3 text-sm bg-gray-300 text-slate-700 mr-2"
            disabled={step == "Pronto"}
          >
            &gt;
          </button>
          <Link
            className="bg-purple-600 text-white font-bold rounded-md inline-block py-1 px-3 text-sm mr-2"
            to={`/editar-tarefa/${id}`}
          >
            Editar
          </Link>
          <button
            onClick={() => {
              actionDelete(id);
            }}
            className="text-white font-bold rounded-md py-1 px-3 text-sm bg-red-600"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
