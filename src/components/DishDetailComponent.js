import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDish({ dish, comments, postComment }) {
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">

                    <h4> Comments</h4>
                    <ul className="list-unstyled">
                        <RenderComments comments={comments} postComment={postComment} dishId={dish.id} />
                    </ul>
                    <CommentForm postComment={postComment} dishId={dish.id} />
                </div>
            </div>
        );
    } else {
        return (

            <div></div>
        )
    }
}

function RenderComments({ comments, postComment, dishId }) {
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

const DishDetail = (props) => {
    if(props.isLoading){
        return (
            <div className="container">
                <div className="row">
                <Loading />
                </div>
            </div>
        );
    }else if(props.errMess) {
        return (
            <div className="container">
                <div className="row">
                <h4> {this.props.errMess}</h4>
                </div>
            </div>
        ); 
    }else
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem> <Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3> {props.dish.name} </h3>
                    <hr />
                </div>
            </div>
            <RenderDish dish={props.dish} comments={props.comments} postComment={props.postComment} />
        </div>
    )
}

export default DishDetail;