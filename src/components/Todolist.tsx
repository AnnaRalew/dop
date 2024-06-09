import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from '../App';
import {UniversalButton} from "./UniversalButton";
import "./Button.module.css"

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    removeAllTodolist?: ()=>void
    filter: FilterValuesType
    removeAllTasksInOneTodo: (todolistId: number) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }

    const onClickRemoveTodoHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title,props.id)
        setTitle("")
    }

    const changeFilterHandler = (filter: FilterValuesType) => {
        props.changeFilter(filter, props.id )
    }
    return <div>
        <h3> {props.title}
            {/*<button onClick={() => {*/}
            {/*    props.removeTodolist(props.id)*/}
            {/*}}>x*/}
            {/*</button>*/}
            <UniversalButton onClick={onClickRemoveTodoHandler}/>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTaskHandler}>+</button>
            {error && <div className="error-message">{error}</div>}

        </div>

        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }
                    const removeTaskHandler = () => {
                        props.removeTask(t.taskId, props.id)
                    }


                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={removeTaskHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <UniversalButton name={"X"} onClick={()=>props.removeAllTasksInOneTodo(props.id)}/>
        <div>
            <UniversalButton name={"All"} onClick={()=>changeFilterHandler("all")} className={props.filter ==="all"? "active-filter": ""}/>
            <UniversalButton name={"Completed"} onClick={()=>changeFilterHandler("active")} className={props.filter === 'active' ? "active-filter" : ""}/>
            <UniversalButton name={"Active"} onClick={()=>changeFilterHandler("completed")}  className={ props.filter ==="completed"? "active-filter": ""}/>
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


