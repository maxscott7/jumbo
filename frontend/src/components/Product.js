import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import Rating from "./Rating";

function Product(props) {
    const {product} = props;
    return (<Card>
        <Link to={`/product/${product.slug}`}>
            <img src={product.image} className="card-img-top" alt={product.name}/>
        </Link>
        <Card.body>
            <Link to={`/product/${product.slug}`}>
                <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating = {product.rating} numReviews={product.numReviews} />
            <Card.Text>${product.price}</Card.Text>
            <Button>Add to cart</Button>
        </Card.body>
    </Card>);
}

export default Product;