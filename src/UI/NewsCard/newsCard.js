import classes from './newsCard.module.css'
const Card = (props)=>(
    <div className = {`${classes.card} ${props.className}`} onClick={props.onClick}>{props.children}</div>
)

export default Card