import { useState } from "react"
export interface Prop{
    onAdd:(value:string)=>void,
}

function InputValue({onAdd}:Prop){
    const[value,setValue]=useState<string>("")
    const handelSubmit=()=>{
        onAdd(value)
        setValue("")
    }
    return(
        <>
            <div>
                <input type="text" 
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <button onClick={handelSubmit}>Submit</button>
            </div>
        </>
    )
}
export default InputValue