import "./Cards1.css";

function Cards1(props) {
    const classes = "card "+ props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default Cards1;