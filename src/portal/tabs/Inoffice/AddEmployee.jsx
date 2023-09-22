import { useState } from "react"

export function AddEmployee(){
    const [pos, setPos] = useState(0);

    return(
        <div>
            <h1>Add Employee + {pos}</h1>
        </div>
    )
}
