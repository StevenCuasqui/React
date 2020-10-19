import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link, NavLinkProps } from "react-router-dom";


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
                </div>
            );
        
    }


export default DishDetail;