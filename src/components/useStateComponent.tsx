import { useState } from "react"

function UseStateComponent() {
  const [arr, arrSet] = useState<number[]>([]) // tell that the array is of type number[]
  const [name, nameSet] = useState<string>("") // tell that the name is of type string
  return (
    <div>
      <div>
        <button onClick={() => arrSet([
          ...arr, arr.length + 1
          ])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={ () => nameSet(name + 'y') } >Set to Bob</button>
        {JSON.stringify(name)}
      </div>
    </div>
  )
}

export default UseStateComponent