import "./Button.css"
const Button = ({classArray, text, onClick}) =>{
  return(
    <button className={classArray} onClick={onClick}>{text}</button>
  )
}


export default Button