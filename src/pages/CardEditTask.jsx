import { Button } from "../components/Button";
import { TextField } from "../components/TextField";
import { ErrorText } from "../components/ErrorText";
import { Select } from "../components/Select";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

import toast from "react-simple-toasts";
import { Formik } from "formik";
import * as yup from "yup";
import { axios } from "../axios";

import { useNavigate, useParams } from "react-router-dom";

export function CardEditTask() {
  const navigate = useNavigate();
  let { id } = useParams();
  let titleTask = `Editar Tarefa #${id}`;
  let emptyValues = {
    title: "",
    description: "",
    step: "Para fazer",
  };
  const [initialValues, setInitialValues] = useState(emptyValues);
  const [formikKey, setFormikKey] = useState(0);

  useEffect(() => {
    const getTask = async (id) => {
      await axios.get(`/tasks/${id}`).then((res) => {
        const json = res.data;
        setInitialValues({
          title: json?.title,
          description: json?.description,
          step: json?.step,
        });
        setFormikKey((prevKey) => prevKey + 1);
      });
    };
    getTask(id);
  }, [id]);

  const taskSchema = yup.object({
    title: yup
      .string()
      .required("É necessário informar o título")
      .min(4, "O título precisa ter pelo menos 4 caracteres")
      .max(64, "O título pode ter no máximo 64 caracteres"),
    description: yup
      .string()
      .required("É necessário informar a descrição")
      .min(8, "A descrição precisa ter pelo menos 8 caracteres")
      .max(128, "A descrição pode ter no máximo 128 caracteres"),
    step: yup
      .string()
      .matches(
        /Para fazer|Em andamento|Pronto/,
        'Os passos devem ser "Para fazer", "Em andamento" ou "Pronto"',
      )
      .required("É necessário escolher um passo"),
  });

  const editTask = async (values) => {
    await axios
      .put(`/tasks/${id}`, values)
      .then(() => {
        toast(`A tarefa #${id} foi editada com sucesso!`);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error editing task:", error);
        toast(
          "Erro ao editar a tarefa. Por favor, tente novamente mais tarde.",
        );
      });
  };

  return (
    <div>
      <Card>
        <Formik
          key={formikKey}
          initialValues={initialValues}
          onSubmit={(values) => editTask(values)}
          validationSchema={taskSchema}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            values,
            touched,
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex items-center justify-center p-3">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  {titleTask}
                </h1>
              </div>
              <fieldset className="my-3">
                <TextField
                  name="title"
                  type="text"
                  placeholder="Digite o título"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  className={`w-full ${
                    touched.title && errors.title ? "border-red-500" : ""
                  }`}
                />
                <ErrorText>{touched.title && errors.title}</ErrorText>
              </fieldset>
              <fieldset className="my-3">
                <TextField
                  name="description"
                  type="text"
                  placeholder="Digite a descrição"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className={`w-full ${
                    touched.description && errors.description
                      ? "border-red-500"
                      : ""
                  }`}
                />
                <ErrorText>
                  {touched.description && errors.description}
                </ErrorText>
              </fieldset>
              <fieldset className="my-3">
                <Select
                  className={`w-full ${
                    touched.step && errors.step ? "border-red-500" : ""
                  }`}
                  name="step"
                  value={values.step}
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  <option value="Para fazer">Para fazer</option>
                  <option value="Em andamento">Em andamento</option>
                  <option value="Pronto">Pronto</option>
                </Select>
                <ErrorText>{touched.step && errors.step}</ErrorText>
              </fieldset>
              <Button type="submit">Enviar</Button>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
