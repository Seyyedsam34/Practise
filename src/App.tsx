import  { useState } from "react"
import InputValue from "./Components/InputValue"
import ListShow from "./Components/ListShow"
export interface Task{
    id:number,
    title:string
}

function App(){
    const[tasks,setTask]=useState<Task[]>([])
    const onAdd=(value:string)=>{
        const newTask:Task={
            id:Math.floor(Math.random()*10000), 
            title:value
        }
        setTask([...tasks,newTask])
    }
    return(
        <>
        <InputValue onAdd={onAdd} />
        <ListShow tasks={tasks}/>
        </>
    )
}

export default App