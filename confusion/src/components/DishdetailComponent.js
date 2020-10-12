import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            dish: this.props.selectedDish
        }
    }

    render(){
        if (this.state.dish != null) {
          return (
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.state.dish.image} alt={this.state.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.state.dish.name}</CardTitle>
                            <CardText>{this.state.dish.description}</CardText>
                        </CardBody>
                    </Card>
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.state.dish.comments)}
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
                            <li>-- {element.author} , {element.date}</li>
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