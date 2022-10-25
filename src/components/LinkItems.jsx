import classes from "./LinkItems.module.css";

const LinkItems = (props) => {
  return (
    <div className={classes["link-item"]}>
     <a href={props.link}>{props.name}</a>
    </div>
  )
}

export default LinkItems;