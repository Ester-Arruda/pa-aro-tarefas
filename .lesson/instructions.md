# AT - Desenvolvimento Web com React

**PRESTE ATENÇÃO NOS ITENS DE RUBRICA AO FINAL DO ENUNCIADO!**
**LEIA ATÉ O FINAL ANTES DE COMEÇAR, POIS VOCÊ PODE FECHAR MAIS DE UM AT POR VEZ!**

Ué! O AT é uma questão só?

Pois é! Mas te prepara porque é A QUESTÃO!

No entanto, você só precisa fazer uma coisa: implementar esse app:

https://pacaro-tarefas.netlify.app/

**É ISSO MESMO! A PAÇARO ENTERPRISE INC. ESTÁ EXPANDINDO SEU MERCADO PARA O SETOR DE GESTÃO, COM A FERRAMENTA PAÇARO TAREFAS REGISTERED TRADEMARK, QUE DEIXARÁ NO CHINELO TODOS OS SEUS CONCORRENTES. ELON MUSK... SEUS DIAS ESTÃO CONTADOS!!!**

Piadinhas à parte... sim, tudo que está aí nesse app você precisa implementar, inclusive a comunicação com a API! Vamos aos detalhes:

## O que NÃO PRECISA ser igual

- Você pode utilizar as imagens e textos que desejar;
- Você pode utilizar quaisquer cores que achar mais interessante;
- Os espaçamentos (`padding`, `margin`, `width`, `height`, etc.) e o layout ficam ao seu critério;
- Você pode criar o seu app com o layout que desejar! Ou seja, se você não gostou dos quadros de "Para Fazer', "Em Andamento" e "Pronto" lado a lado, você pode colocar um acima do outro. **MAS ELES DEVEM EXISTIR COM ESSES NOMES DE ALGUMA FORMA**;
- Você pode utilizar quaisquer bibliotecas e frameworks de CSS, incluindo mas não se limitando a `styled-components`, `TailwindCSS` e `tailwind-styled-components`.

## O que PRECISA ser igual

As funcionalidades! Ou seja, seu app precisa fazer tudo que o exemplo faz, inclusive a comunicação com a API. Também é necessário implementar as mesmas rotas, validações dos formulários e as opções de deletar e mover tarefas.

## Quais tecnologias eu PRECISO utilizar?

- `Formik`;
- `Yup`;
- `React Router DOM`;
- `react-simple-toasts`

## Como faço para realizar as requisições à API?

- Você pode utilizar `Axios`, `Axios Hooks` ou simplesmente `fetch`, qualquer uma dessas será aceita. Recomendo utilizar Axios e Axios Hooks, pois já está pré-configurado!
- **IMPORTANTE!** O endereço base da API é: `https://pacaro-tarefas.netlify.app/api/<seu-nome>/`.
- Você deve alterar `<seu-nome>` pelo seu nome e sobrenome **EM MINÚSCULAS E SEPARADOS POR HÍFEN**. Exemplo: `https://pacaro-tarefas.netlify.app/api/eduardo-velho/`.
- Para que isso serve? Cada nome e sobrenome possui seu próprio banco de dados, assim você não vai ver as tarefas que seu colega está criando.
- **NÃO TENTE FAZER TROLLAGEM COM OS COLEGUINHAS, OU AS CONSEQUÊNCIAS SERÃO TERRÍVEIS! MUWAHAHAHAHA!!!**

## Quais são os endpoints e qual é o formato dos dados que preciso enviar?

### Listar tarefas

Retorna a lista de tarefas.

`GET /tasks`

### Criar tarefa

Cria uma nova tarefa. Retorna a tarefa recém criada, ou um erro caso os dados enviados sejam inválidos.

`POST /tasks`
```javascript
{
  "title": "Título da tarefa aqui",
  "description": "Mensagem da tarefa aqui",
  "step": "Para fazer" // Define o estado inicial da tarefa. O back-end só aceita as strings "Para Fazer", "Em andamento" e "Pronto"
}
```

### Editar tarefa

Edita uma tarefa pelo ID. Retorna a tarefa recém editada, ou um erro caso os dados enviados sejam inválidos.

`PUT /tasks/<id-da-tarefa>`
```javascript
{
  "title": "Novo título da tarefa aqui",
  "description": "Nova mensagem da tarefa aqui",
  "step": "Para fazer" // Define o novo estado da tarefa. O back-end só aceita as strings "Para Fazer", "Em andamento" e "Pronto"
}
```

### Deletar tarefa

Deleta uma tarefa pelo ID. Retorna a tarefa recém deletada, ou um erro caso os dados enviados sejam inválidos.

`DELETE /tasks/<id-da-tarefa>`

### Mover tarefa

Altera o estado de uma tarefa pelo ID. Retorna a tarefa recém editada, ou um erro caso os dados enviados sejam inválidos.

`PATCH /tasks/<id-da-tarefa>/update-step`
```javascript
{
  "step": "Para fazer" // Define o novo estado da tarefa. O back-end só aceita as strings "Para Fazer", "Em andamento" e "Pronto"
}
```

**IMPORTANTE! Esses endpoints devem sempre começar com a URL base. Exemplo: `GET https://pacaro-tarefas.netlify.app/api/eduardo-velho/tasks` lista as tarefas.**

**JÁ ESTÁ TUDO CONFIGURADO! É SÓ CODAR!**

## Itens de rubrica

Como você sabe, a avaliação ocorre através do cumprimento de competências, e a aprovação na disciplina ocorre quando metade dos itens de rubrica de cada competência são atingidos.

No caso desta disciplina, são quatro competências com quatro itens de rubrica em cada uma. Assim, nesse AT você será avaliado em dezesseis critérios, cada critério é respectivo à um item de rubrica, e são os seguintes:

## Desenvolver aplicações que respondam à eventos com a atualização da interface

#### AT 1: Criar e utilizar ao menos um componente de classe;
#### AT 2: Utilizar ao menos um `setState` em um componente de classe;
#### AT 3: Utilizar ao menos uma vez o método de ciclo de vida `componentDidMount` em um componente de classe;
#### AT 4: Utilizar ao menos uma vez o método de ciclo de vida `componentDidUpdate` em um componente de classe.

## Desenvolver componentes usando React Hooks

#### AT 5: Utilizar o hook `useState` ao menos uma vez;
#### AT 6: Utilizar o hook `useEffect` ao menos uma vez;
#### AT 7: Criar ao menos cinco componentes na aplicação. **ISSO NÃO INCLUI AS ROTAS**. Exemplos de possíveis componentes são `Button`, `TaskCard`, `ButtonLink`, `TextField`, `Select`, `ErrorText`, etc;
#### AT 8: Estilizar a aplicação com qualquer tecnologia.

## Criar formulários web usando componentes ReactJS

### AT 9: Implementar o formulário de criação de tarefa utilizando Formik.
Você deve exibir os erros e enviar os dados pela API ao pressionar o botão de enviar caso esteja tudo certo.
### AT 10: Implementar o formulário de edição de tarefa utilizando Formik.
Você deve exibir os erros e enviar os dados pela API ao pressionar o botão de enviar caso esteja tudo certo.

**UTILIZAR O SEGUINTE SCHEMA NOS ATS 9 e 10. NÃO ESQUEÇA DE IMPORTAR O `yup`!**

```javascript
const stepSchema = yup
.string()
.matches(
  /Para fazer|Em andamento|Pronto/,
  'Os passos devem ser "Para fazer", "Em andamento" ou "Pronto"'
);

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
  step: stepSchema,
});
```

#### Dicas

```jsx
<Formik
  enableReinitialize
  validationSchema={todoSchema}
  initialValues={{
    title: "",
    description: "",
    step: "Para fazer",
  }}
  onSubmit={async (values) => {
    await axios.post("/tasks", values);
    toast("Tarefa criada com sucesso!");
    navigate("/");
  }}
>
```

```jsx
<fieldset>
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
```

### AT 11: Implementar o botão de deletar tarefa.

Esse botão deve se comunicar com a API e atualizar a tela com as alterações.

#### Dicas

```jsx
await axios.delete(`/tasks/${task.id}`);
toast(`A tarefa #${task.id} foi deletada com sucesso!`);
fetchTasks()
```

### AT 12: Implementar a ação de mover tarefa.

Esse botão deve se comunicar com a API e atualizar a tela com as alterações.

#### Dicas

```jsx
await axios.patch(`/tasks/${task.id}/update-step`, { step });
toast(`Tarefa #${task.id} movida para "${step}"`);
fetchTasks();
```

## Criar aplicações React com múltiplas páginas usando React Router

### AT 13: Criar a rota `/`.

Essa rota deve listas as tarefas separadas pelo seu estado ("Para fazer", "Em andamento", "Pronto")

#### Dicas

```jsx
const [{ data: tasks = initialTasks }, fetchTasks] = useAxios("/tasks", {
  manual: true,
});

useEffect(() => {
  fetchTasks();
}, []);

const todo = tasks.filter((task) => task.step === "Para fazer");
const doing = tasks.filter((task) => task.step === "Em andamento");
const done = tasks.filter((task) => task.step === "Pronto");
```

### AT 14: Criar a rota `/criar-tarefa`.

Essa rota deve renderizar o formulário de criação de tarefas.

### AT 15: Criar a rota `/editar-tarefa/:id`

Essa rota deve editar uma tarefa pelo ID. Na rota `/`, ao clicar no botão de editar tarefa, o ID deve ser enviado pela URL. Utilize o hook `useParams` para realizar a requisição da tarefa na API e assim preencher o formulário com os valores do back-end.

#### Dicas

```jsx
const params = useParams();
const [{ data: task = initialTask }, fetchTask] = useAxios(
  `/tasks/${params.id}`,
  {
    manual: true,
  }
);

useEffect(() => {
  fetchTask();
}, [params.id]);
```

### AT 16: Experiência de navegação

Implementar corretamente a navegação, redirecionamentos, atualizações de tela e mensagens informando o sucesso das requisições à API.

**BOA SORTE!**