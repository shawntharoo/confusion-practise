import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log("Dishdetail componentDidMount")
    }

    componentDidUpdate(){
        console.log("Dishdetail componentDidUpdate")
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
        if (comments.length !== 0) {
            rates = comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>--{comment.author}</li>
                        {/* <li>{new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li> */}
                    </div>
                )
            })
        }
        return rates;
    }

    render() {
        console.log("Dishdetail render")
        return (
            <div class="container">
                {this.renderDish(this.props.dish)}
            </div>
        )
    }
}

export default DishDetail;