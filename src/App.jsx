import "./App.css";
import { configure } from "axios-hooks";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "./history";
import { CardCreateTask } from "./pages/CardCreateTask";
import { CardEditTask } from "./pages/CardEditTask";
import { ContainerTasks } from "./layout/ContainerTasks";
import { Layout } from "./layout/Layout";

import { axios } from "./axios";
configure({ axios });

export default function App() {
  return (
    <HistoryRouter history={history}>
      <Layout>
        <Routes>
          <Route path="/" element={<ContainerTasks />} />
          <Route path="/criar-tarefa" element={<CardCreateTask />} />
          <Route path='/editar-tarefa/:id' element={<CardEditTask />} />
        </Routes>
      </Layout>
    </HistoryRouter>
  );
}
