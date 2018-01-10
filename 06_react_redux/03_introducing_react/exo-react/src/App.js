import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'underscore';

function Row(props){
  return (
    <tr>
      <td>{props.arrayProducts.decathlon_id}</td>
      <td>{props.arrayProducts.title}</td>
      <td>{props.arrayProducts.price}</td>
    </tr>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allProducts: props.products,
      order: {decathlon_id:"asc",title:"asc",price:"asc"}
    }
  }

  sortby = (filter) => {
    console.log(this.state.order);
    console.log(this.state.order[filter]);
    let newOrder = this.state.order;
    if(this.state.order[filter]==="asc"){
      let sortedproducts = _.sortBy(this.state.allProducts, filter).reverse()
      newOrder[filter] = "desc";
      this.setState({ allProducts: sortedproducts, order:newOrder })
    } else {
      let sortedproducts = _.sortBy(this.state.allProducts, filter)
      newOrder[filter] = "asc";
      this.setState({ allProducts: sortedproducts, order:newOrder  })
    }
  }

  render() {
    let sortedProducts = this.state.allProducts;
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.sortby('decathlon_id')}>Decathlon Id</th>
            <th onClick={() => this.sortby('title')}>Title</th>
            <th onClick={() => this.sortby('price')}>Price</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map(prdct => <Row key={prdct.decathlon_id} arrayProducts={prdct}/>)}
        </tbody>
      </table>
    );
  }
}


export default App;
