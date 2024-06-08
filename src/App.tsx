import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';


type ObjectType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";


function App() {

    const [todo, setTodo] = useState<Array<ObjectType>>([
                                                            {
                                                                title: "What to learn",
                                                                filter: "all",
                                                                tasks: [
                                                                    {taskId: v1(), title: "HTML&CSS", isDone: true},
                                                                    {taskId: v1(), title: "JS", isDone: true}
                                                                ],
                                                                students: [
                                                                    'Rick Kane',
                                                                    'Finnlay Bentley',
                                                                    'Samia North',
                                                                    'Isaac Morton',
                                                                    'Lily-Ann Clifford',
                                                                    'Thalia Park',
                                                                    'Sapphire Cruz',
                                                                    'Cieran Vazquez',
                                                                    'Anya Estes',
                                                                    'Dominika Field',
                                                                    'Rosanna Chung',
                                                                    'Safiyah Davey',
                                                                    'Ryley Beasley',
                                                                    'Kalvin Trejo',
                                                                    'Evie-Mae Farrell',
                                                                    'Juliet Valencia',
                                                                    'Astrid Austin',
                                                                    'Lyle Montgomery',
                                                                    'Nisha Mora',
                                                                    'Kylie Callaghan',
                                                                    'Star Wilks',
                                                                    'Marissa Colley',
                                                                    'Asa Fuller',
                                                                    'Leigh Kemp',
                                                                    'Avleen Dawson',
                                                                    'Sammy Bonilla',
                                                                    'Acacia Becker',
                                                                    'Coral Shepherd',
                                                                    'Melina Molina',
                                                                    'Kiran Bailey',
                                                                    'Clara Escobar',
                                                                    'Alexandru Horn',
                                                                    'Brandon-Lee Mercado',
                                                                    'Elouise Weston',
                                                                    'King Long',
                                                                    'Kerri Searle',
                                                                    'Kanye Hamer',
                                                                    'Elwood Benitez',
                                                                    'Mikail Whitaker',
                                                                    'Bobby Hardy',
                                                                    'Talha Ferry',
                                                                    'Priscilla Landry',
                                                                    'Olivia-Grace Cain',
                                                                    'Kiaan Wallace',
                                                                    'Wesley Padilla90',
                                                                    'Ella-Grace Wooten91',
                                                                    'Kaif Molloy92',
                                                                    'Kamal Broadhurst93',
                                                                    'Bianca Ferrell94',
                                                                    'Micheal Talbot95',
                                                                ]
                                                            },
                                                            {
                                                                title: "What to do",
                                                                filter: "all",
                                                                tasks: [
                                                                    {taskId: v1(), title: "HTML&CSS2", isDone: true},
                                                                    {taskId: v1(), title: "JS2", isDone: true}
                                                                ],
                                                                students: [
                                                                    'Jago Wormald1',
                                                                    'Saul Milne2',
                                                                    'Aariz Hester3',
                                                                    'Dion Reeve4',
                                                                    'Anisa Ortega5',
                                                                    'Blade Cisneros6',
                                                                    'Malaikah Phelps7',
                                                                    'Zeeshan Gallagher8',
                                                                    'Isobella Vo9',
                                                                    'Rizwan Mathis10',
                                                                    'Menaal Leach11',
                                                                    'Kian Walton12',
                                                                    'Orion Lamb13',
                                                                    'Faizah Huynh14',
                                                                    'Crystal Vaughan15',
                                                                    'Vivien Hickman16',
                                                                    'Stuart Lu17',
                                                                    'Karol Davison18',
                                                                    'Dario Burns19',
                                                                    'Chloe Rich20',
                                                                    'Martyna Felix',
                                                                    'Nida Glass',
                                                                    'Maeve Miles',
                                                                    'Hasnain Puckett',
                                                                    'Ayman Cano',
                                                                    'Safwan Perry',
                                                                    'Fox Kelly',
                                                                    'Louise Barlow',
                                                                    'Malaki Mcgill',
                                                                    'Leanna Cline',
                                                                    'Willard Hodge',
                                                                    'Amelia Dorsey',
                                                                    'Kiah Porter',
                                                                    'Jeanne Daly',
                                                                    'Mohsin Armstrong',
                                                                    'Laurie Rangel',
                                                                    'Princess Tierney',
                                                                    'Kasim Kendall',
                                                                    'Darryl Cope',
                                                                    'Elysha Ray',
                                                                    'Liyana Harris',
                                                                    'Kashif Blackburn',
                                                                    'Atif Zimmerman',
                                                                    'Sila Hartley',
                                                                    'Ralphie Hebert',
                                                                ]
                                                            }
                                                        ])

    function removeTask(taskId: string, todolistId: number) {
        setTodo(todo.map((el, index) => index === todolistId ? {
            ...el,
            tasks: [...el.tasks.filter(fl => fl.taskId !== taskId)]
        } : el))
    }

    function addTask(title: string, todolistId: number) {
        let newTask: TasksType = {taskId: v1(), title: title, isDone: false};
        setTodo(todo.map((el, index) => index === todolistId ? {...el, tasks: [newTask, ...el.tasks]} : el))
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: number) {
        setTodo(todo.map((el, index) => index === todolistId ? {
            ...el,
            tasks: el.tasks.map(m => m.taskId === taskId ? {...m, isDone: isDone} : m)
        } : el))
    }

    function changeFilter(value: FilterValuesType, todolistId: number) {
        setTodo(todo.map((el, index) => index === todolistId ? {...el, filter: value} : el))
    }

    function removeTodolist(todolistId: number) {
        setTodo(todo.filter((el, index) => index !== todolistId))
    }

    const removeAllTodolists = () => {
        setTodo([])
    }

    const removeAllTasksInOneTodo = (todolistId: number) => {
        setTodo(prevState => prevState.map((t, index) => index === todolistId
            ? {...t, tasks: []}
            : t
        ))
    }

    return (
        <div className="App">
            <div>
                <button>X</button>
            </div>

            {
                todo.map((tl, index) => {
                    let allTodolistTasks = tl.tasks;
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={index}
                        id={index}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        students={tl.students}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                        // removeAllTodolist={removeAllTodolist}
                    />



                })
            }

        </div>
    );
}

export default App;

// ----------------------------------------------------------------------
// function App() {
//
//     return (
//         <div >
//
//                 <Modal>
//                     <h3>Confidential Information</h3>
//                     <input type="text" placeholder={"email"}/>
//                     <input type="text" placeholder={"pass"}/>
//                     <button>send</button>
//
//                 </Modal>
//         </div>
//     )
// }
// export default App;
//----------------------------------------------------------------------
// function App() {
//     return (
//         <div className={"App"}>
//             <Button name={"blue"} onClick={()=>{}} color={"red"}> red button </Button>
//             <Button name={"red"} onClick={()=>{}} color={"secondary"}> blue button </Button>
//             <Button name={"disabled"} onClick={()=>{}} disabled> disabled button </Button>
//         </div>
//
//     )
// }
//
// export default App;

//----------------------------------------------------------------------
// type PropsType=
//     {
//         userId: number,
//         id: number,
//         title: string,
//         completed: boolean
//     }
//
// function App() {
//     const [todos, setTodos] = useState<Array<PropsType>>([])
//
//     const getData = () => {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((res) => setTodos(res.data))
//     }
//
//     useEffect(()=>{
//         getData()
//     },[])
//
//     const onClickCleanHandler = () => {
//         setTodos([])
//     }
//     const onClickShowHandler = () => {
//         getData()
//     }
//
//     const mapTodos = todos.map(el => {
//             return (
//                 <li>
//                     <span>{el.id} - </span>
//                     <span>{el.title}</span>
//                     <span>{el.completed}</span>
//                 </li>
//             )
//         })
//
//     return (
//         <div className="App">
//             <div>
//                 <button onClick={onClickCleanHandler}>CLEAN POSTS</button>
//                 <button onClick={onClickShowHandler}>SHOW POSTS</button>
//             </div>
//
//             <ul>
//                 {/*{todos.map(el => {*/}
//                 {/*    return (*/}
//                 {/*        <li>*/}
//                 {/*            <span>{el.id} - </span>*/}
//                 {/*            <span>{el.title}</span>*/}
//                 {/*            <span>{el.completed}</span>*/}
//                 {/*        </li>*/}
//                 {/*    )*/}
//                 {/*})}*/}
//                 {mapTodos}
//             </ul>
//
//
//         </div>
//     );
// }
//
// export default App;
























//----------------------------------------------------------------------------------------

// import React, {useEffect, useState} from 'react';
// import './App.css';
// import axios from "axios";
//
//
// type PropsType =
//     {
//         userId: number,
//         id: number,
//         title: string,
//         completed: boolean
//     }
//
// function App() {
//     const [todos, setTodos] = useState<Array<PropsType>>([])
//
//     const axiosRequest=()=>{
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((res) => {
//                 setTodos(res.data)
//             })
//     }
//
//     useEffect(() => {
//         // fetch('https://jsonplaceholder.typicode.com/todos')
//         //     .then(response => response.json())
//         //     .then(json => setTodos(json))
//
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }, [])
//
//     const mapTodos=todos.map(el=>{
//         return (
//             <li>
//                 <span>{el.id} - </span>
//                 <span>{el.title}</span>
//                 <span>{el.completed}</span>
//             </li>
//         )
//     })
//
//     const onClickHandler = () => {
//         setTodos([])
//     }
//
//     const onClickHandlerForRedisplay=()=>{
//         // axios.get('https://jsonplaceholder.typicode.com/todos')
//         //     .then((res) => {
//         //         setTodos(res.data)
//         //     })
//
//         axiosRequest()
//     }
//
//     return (
//         <div className="App">
//             <button onClick={onClickHandler}>CLEAN POSTS</button>
//             <button onClick={onClickHandlerForRedisplay}>REDISPLAY</button>
//             <ul>
//                 {/*{todos.map(el => {*/}
//                 {/*    return (*/}
//                 {/*        <li>*/}
//                 {/*            <span>{el.id} - </span>*/}
//                 {/*            <span>{el.title}</span>*/}
//                 {/*            <span>{el.completed}</span>*/}
//                 {/*        </li>*/}
//                 {/*    )*/}
//                 {/*})}*/}
//
//                 {mapTodos}
//             </ul>
//         </div>
//     );
// }
//
// export default App;
