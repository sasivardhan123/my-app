import classes from './Item.module.css';
const Item = (props) => {
  return (
    <div className={classes.item}>
        <img src={props.Image} alt={props.Name}/>
        <h3>{props.Name}</h3>
        <h5> {props.Disc} </h5>
        <h4>{props.Price}</h4>
        <p>{props.Gender}</p>
        <br/>
        <button>Add to cart</button>
    </div>
  );
};

export default Item;