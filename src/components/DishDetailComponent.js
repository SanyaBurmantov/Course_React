import {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{


    renderDish(dish) {
        if (dish != null)
            return(
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(comments){
        if (comments == null)
            return (<div></div>);
        else
            return comments.map((comment) => {
                return (
                    <div className={"list-unstyled"}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {comment.date}</p>
                    </div>
                );
            })
    }
    render() {
        const dish = this.props.dish;
        if (dish == null){
            return <div></div>
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DishDetail;