import { Component } from 'react'
import { CardTask } from "../components/CardTask";
import toast from "react-simple-toasts";
import { axios } from "../axios";
const initialTasks = [];

export class ContainerTasks extends Component {
  state = {
    loadingPatch: false,
    loadingDelete: false,
    tasks: initialTasks,
  }

  fetchTasks = () => {
    axios.get('/tasks')
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.state.loadingPatch !== prevState.loadingPatch ||
      this.state.loadingDelete !== prevState.loadingDelete) {
      this.fetchTasks();
    }
  };

  moveForward = (id, step) => {
    let newStep;
    switch (step) {
      case "Para fazer":
        newStep = "Em andamento";
        break;
      case "Em andamento":
        newStep = "Pronto";
        break;
      default:
        break;
    }
    this.patchTask(id, newStep);
  };

  moveBackward = (id, step) => {
    let newStep;
    switch (step) {
      case "Pronto":
        newStep = "Em andamento";
        break;
      case "Em andamento":
        newStep = "Para fazer";
        break;
      default:
        break;
    }
    this.patchTask(id, newStep);
  };

  patchTask = async (taskId, updatedStep) => {
    this.setState({ loadingPatch: false })
    await axios
      .patch(`/tasks/${taskId}/update-step`, { step: updatedStep })
      .then(() => { 
        this.setState({ loadingPatch: true })
        toast(`Tarefa #${taskId} movida para "${updatedStep}"`);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        toast(
          "Erro ao atualizar a tarefa. Por favor, tente novamente mais tarde.",
        );
      });
  };

  deleteTask = async (taskId) => {
    this.setState({ loadingDelete: false })
    await axios
      .delete(`/tasks/${taskId}`)
      .then(() => {
        this.setState({ loadingDelete: true })
        toast(`A tarefa #${taskId} foi deletada com sucesso!`);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        toast(
          "Erro ao atualizar a tarefa. Por favor, tente novamente mais tarde.",
        );
      });
  };

  checkDirection = (id, step, currentAction) => {
    currentAction === "forward"
      ? this.moveForward(id, step)
      : this.moveBackward(id, step);
  };

  render () {
    const { tasks } = this.state;
    const todo = tasks.filter((task) => task.step === "Para fazer");
    const doing = tasks.filter((task) => task.step === "Em andamento");
    const done = tasks.filter((task) => task.step === "Pronto");
    
    return (
    <div className="max-w-screen-lg m-auto p-5 flex">
      <div className="flex-1 pr-4">
        <h2 className="font-bold text-lg mb-2">Para fazer</h2>
        <div className="flex flex-col gap-2">
          {todo.map((task) => (
            <CardTask
              key={task.id}
              {...task}
              actionStep={this.checkDirection}
              actionDelete={this.deleteTask}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 px-4 border-l-2 border-r-2 border-slate-500">
        <h2 className="font-bold text-lg mb-2">Em andamento</h2>
        <div className="flex flex-col gap-2">
          {doing.map((task) => (
            <CardTask
              key={task.id}
              {...task}
              actionStep={this.checkDirection}
              actionDelete={this.deleteTask}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 pl-4">
        <h2 className="font-bold text-lg mb-2">Pronto</h2>
        <div className="flex flex-col gap-2">
          {done.map((task) => (
            <CardTask
              key={task.id}
              {...task}
              actionStep={this.checkDirection}
              actionDelete={this.deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  )
  }
}
