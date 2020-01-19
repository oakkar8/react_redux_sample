import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeItem, addQuantity, subtractQuantity} from './actions/cartActions'

class Cart extends Component {
  handleRemove = (id)=>{
    this.props.removeItem(id);
  }
  handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
  }
  handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
  }
  render() {
    console.log(this.props);
    let addedItems = this.props.items.length ?
    (
      this.props.items.map( item => {
        return(
          <li key={item.id}>
            <div>
              <img style={{width: '100px', height: '100px'}} src={item.img} alt={item.title}/>
            </div>
            <div className="description">
              <span className="title">{item.title}</span>
              <p><b> Price :{item.price}$ </b></p>
              <p><b> Quantity : {item.quantity}</b></p>
              <div>
                <Link to="/cart"><i onClick={()=>{this.handleAddQuantity(item.id)}}>plus 1</i></Link>
              </div>
              <div>
                <Link to="/cart"><i onClick={()=>{this.handleSubtractQuantity(item.id)}}>Remove 1</i></Link>
              </div>
              <button className="remove btn pink" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
            </div>
          </li>
        )
      })
    ) :
    (
      <p>Nothing.</p>
    )

    return(
      <div>
        <div className="cart">
          <h3>Items in the cart</h3>
          <h3>Total Amount : {this.props.total}</h3>
          <ul className="items">
            {addedItems}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
