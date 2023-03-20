import "./Cards2.css";

function Cards2(props) {
    const classes = "card "+ props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default Cards2;