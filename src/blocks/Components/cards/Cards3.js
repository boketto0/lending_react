import "./Cards3.css";

function Cards3(props) {
    const classes = "card3 "+ props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default Cards3;