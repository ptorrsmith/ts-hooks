import { useState, useEffect } from "react"


function useEffectComponent() {
  const [val, valSet] = useState<number>(1)

  useEffect(() => {
    const timer = window.setInterval(() => {  // function inside setInterval is a 'closure' so beware of hard coding values thinking they are variables at execution time!
      valSet(v => v + 1)  // was val + 1 but that hardcodes val of 1 into v + 1 = 2 always!
    }, 1000)
    // useEffect can optionally return a function to be called when the effect is removed
    return () => window.clearInterval(timer)  // return function to clear interval
  }, [])

  return (
    <div>{val}</div>
  )

}

export default useEffectComponent;