import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props)
    }

    render(){
        if (this.props.dish != null) {
          return (
              <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
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

    renderComments(comments){
        
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
}

export default DishDetail;