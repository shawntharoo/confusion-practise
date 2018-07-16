import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle> {dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">

                                <h4> Comments</h4>
                                <ul className="list-unstyled">
                                    {this.renderComments(dish.comments)}
                                </ul>
                    </div>
                </div>
            );
        } else {
            return (

                <div></div>
            )
        }
    }

    renderComments(comments) {
        var rates = <div></div>;
        if (comments.length != 0) {
            rates = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>--{comment.author}</li>
                    </div>
                )
            })
        }
        return rates;
    }

    render() {
        return (
            <div>
                {this.renderDish(this.props.dishDetail)}
            </div>
        )
    }
}

export default DishDetail;