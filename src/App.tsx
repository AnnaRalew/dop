import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";


type PropsType=
    {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

function App() {
    const [todos, setTodos] = useState<Array<PropsType>>([])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => setTodos(res.data))
    }

    useEffect(()=>{
        getData()
    },[])

    const onClickCleanHandler = () => {
        setTodos([])
    }
    const onClickShowHandler = () => {
        getData()
    }

    const mapTodos = todos.map(el => {
            return (
                <li>
                    <span>{el.id} - </span>
                    <span>{el.title}</span>
                    <span>{el.completed}</span>
                </li>
            )
        })

    return (
        <div className="App">
            <div>
                <button onClick={onClickCleanHandler}>CLEAN POSTS</button>
                <button onClick={onClickShowHandler}>SHOW POSTS</button>
            </div>

            <ul>
                {/*{todos.map(el => {*/}
                {/*    return (*/}
                {/*        <li>*/}
                {/*            <span>{el.id} - </span>*/}
                {/*            <span>{el.title}</span>*/}
                {/*            <span>{el.completed}</span>*/}
                {/*        </li>*/}
                {/*    )*/}
                {/*})}*/}
                {mapTodos}
            </ul>


        </div>
    );
}

export default App;
























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
