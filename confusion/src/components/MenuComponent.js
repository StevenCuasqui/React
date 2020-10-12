import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log('Menu Component constructor is called')
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked')
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />              
                  <CardImgOverlay >
                    <CardTitle heading>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        console.log('Menu Components render is called')

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );

        
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div key={dish.id} className="col-12">
                    <DishDetail selectedDish={dish} />
                </div>           
                
            )
        }else{
            return(
            <div>

            </div>
            );
        }
    }
}

export default Menu;