// define then export the interface for props

export interface HeadingProps {
  title: string
}

// can create components via a function construct or a const =  construct
export function HeadingViaFunction({ title }: HeadingProps) {
  return (
    <h1>{title}</h1>
  )
}

export const HeadingViaConst = ({ title }: HeadingProps) =>{
  return (
    <h1>{title}</h1>
  )
}

function TestComponent() {
  return (
    <>
    <HeadingViaFunction title="my heading via a function" />
    <HeadingViaConst title="my heading via a const" />
    </>
  )
}

export default TestComponent;
