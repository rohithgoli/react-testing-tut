// react import is not needed in react version 17 & above

type GreetProps = {
  name?: string
}

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>
}
