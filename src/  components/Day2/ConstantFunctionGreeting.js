// Constant Functions ConstantFunctionGreeting
import './ConstantFunctionGreeting.css'
const ConstantFunctionGreeting = () => {
  const validation = false;

  // Dynamic Class
  let customClass = "heading";
  if(validation === true){
    customClass = "heading-orange";
  }

  return (
    <h3 className={customClass}> Greeting from Constant Function Component</h3>
  );
}

export default ConstantFunctionGreeting;
