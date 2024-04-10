import { GiBirdTwitter } from 'react-icons/gi';
import { Link } from 'react-router-dom'

export function AppBar() {
  return(
    <header className='flex border-b p-4 item-center justify-between'>
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <GiBirdTwitter className="text-purple-900" size="36px"/>
          <span className="text-purple-900 text-2xl font-bold">Paçaro Tarefas</span>
        </Link>
      </div>
      <div>
        <Link to="/criar-tarefa" className="font-bold text-white py-2 px-4 bg-purple-600 rounded-md">
          Criar Tarefa
        </Link>
      </div>
    </header>
  )
}

