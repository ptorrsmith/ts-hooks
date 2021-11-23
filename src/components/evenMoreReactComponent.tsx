// define then export the interface for props
import { ReactNode } from "react"

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

export function List<ListItem>({
  items,
  render
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode  
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

type AnotherListItemComponent = <ListItem> ({
  items,
  render
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode
}) => ReactNode

export const AnotherList: AnotherListItemComponent  = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
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

export function ListComponent() {
  return (
    <>
      <List items={["x", "y", "z"]} render={item => <span>{item}</span>} />
    </>
  )
}

// export function ListComponentWithConstComponent() {
//   return (
//     <>
//       <AnotherList items={["x", "y", "z"]} render={item => <span>{item}</span>} />
//     </>
//   )
// }

export default TestComponent;
