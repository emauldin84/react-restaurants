import React from 'react';
import logo from './logo.svg';
import './App.css';

import Types from './Types'
import RestOfType from './RestOfType'
import Menu from './Menu'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantType: 'mediterranean',
      restaurantName: '',
      restaurants: {
        "mediterranean": {
        "Mediterranean Grill": [
            "hummus", "tabouli", "dolmas"
        ],
        "Yalla": [
            "hummus wrap", "tabouli wrap", "dolmas"
        ],
        "Nik's": [
            "spanakopita", "gyro", "dolmas"
        ]
        },
        "american": {
        "Chik fil a": [
            "chicken biscuit", "chicken sandwich", "chicken salad"
        ],
        "Mary Mac's Tea Room": [
            "biscuit", "fried chicken", "mashed potatoes"
        ],
        "Jersey Mike's": [
            "Big Sandwich", "Bigger Sandwich", "Most Biggerest Sandwich"
        ]
        },
        "mexican": {
        "Elmyriachi": [
            "tacos", "burritos", "cheese dip"
        ],
        "Mezcalito's Cantina": [
            "tortas", "tamales", "cheese dip"
        ],
        "Matador": [
            "cheese dip", "cheese dip", "cheese dip"
        ]
        }
        }
    }
  }
  
  _displayRestaurants = (e) => {
    console.log(e.target);
    this.setState({
      restaurantType: e.target.textContent,
      restaurantName: ''
    })
  }

  _displayMenu = (e) => {
    console.log(e.target);
    this.setState({
      restaurantName: e.target.textContent
    })
  }
  render () {

    return (
      <div className="App">
        <header className="App-header">
          <Types types={this.state.restaurants} displayRestaurants={this._displayRestaurants}/>

          <RestOfType restaurants={this.state.restaurants} type={this.state.restaurantType ? this.state.restaurantType : ''} displayMenu={this._displayMenu}/>
          
          <Menu restaurants={this.state.restaurants} type={this.state.restaurantType ? this.state.restaurantType : ''} restaurant={this.state.restaurantName ? this.state.restaurantName : ''}/>
          
          
        </header>
      </div>
    );
    
  }
}

export default App;
