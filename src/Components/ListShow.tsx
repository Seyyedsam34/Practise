import { Task } from "../App"
export interface Prop{
    tasks:Task[],
}

function ListShow({tasks}:Prop){

    return(
    <>
    <ul>
        {tasks.map((task)=>(
            <li key={task.id}>
                <div>{task.title}</div>
                <button >Edite</button>
            </li>
        ))}
    </ul>
    </>
    )
}
export default ListShow