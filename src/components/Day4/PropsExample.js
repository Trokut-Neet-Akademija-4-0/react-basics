
function Greeting(props) {
  return (
    <div>
      <p>Greeting: {props.text}</p>
    </div>
  )
}

function FullName (props) {
  return(
    <h3>{props.name} {props?.lastName}</h3>
  )
}

export {Greeting, FullName};
