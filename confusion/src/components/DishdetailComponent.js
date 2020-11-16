import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input  } from 'reactstrap';
import { Link, NavLinkProps } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

    const DishDetail = (props) => {
        if (props.dish != null) {
          return (
              <div className="container">
                  <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>  
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments}/>
                    </div>
                                    
                </div>
              </div>        
        );  
        } else {
            return(
                <div>

                </div>
            );
        }
        
    }

    function RenderDish({dish}){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        )
    }

    function RenderComments({comments}){
        
            const actualComments = comments.map((element)=>{
                return(
                    <div key={element.id}>
                        <ul  className="list-unstyled">
                            <li>{element.comment}</li>
                            <li>-- {element.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(element.date)))}</li>
                        </ul>
                    </div>
                ); 
            }
    
            )

            return(
                <div>
                    {actualComments}
                    <CommentForm></CommentForm>
                </div>
                
            );
        
    }

    class CommentForm extends Component{

        constructor(props){
        super(props)
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(values){
            console.log("Current State is: "+JSON.stringify(values))
            alert("Current State is: "+JSON.stringify(values))
        }

        toggleModal(){
            this.setState({isModalOpen: !this.state.isModalOpen})
        }

        render(){

            const CommentModal = () =>{
                return(
                    <div className="col-12 col-md-9">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader>
                                Submit Comment
                                <Button type="button" className="close" onClick={this.toggleModal}>
                                    &times;
                                </Button>
                            </ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor=".rating" md={2}>Rating</Label>
                                        <Col md={{size: 12}}>
                                            <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group" >
                                        <Label htmlFor=".firstname" md={4}>Your Name</Label>
                                        <Col md={{size: 12}}>
                                            <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                            <Errors
                                                    className="text-danger"
                                                    model=".firstname"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group" >
                                        <Label htmlFor="message" md={2}>Comment</Label>
                                        <Col md={{size: 12}}>
                                            <Control.textarea model=".message" id="message" name="message" rows="6"
                                            className="form-control"/>
                                        </Col>
                                    </Row>
                                    <Row className="form-group" >
                                        <Col md={{size: 10}}>
                                            <Button type="submit" color="primary"> Submit</Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                                
                            </ModalBody>
                        </Modal>
                        </div> 
                )
            }
            return(
            <Row className="form-group" >
                <Col md={{size: 10}}>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil "> Submit Comment</span>
                </Button>
                </Col>
                <CommentModal/>
            </Row>
            
            )
        }

        

        
        
    }



export default DishDetail;