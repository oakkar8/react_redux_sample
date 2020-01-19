import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions';
class Item extends Component{

  handleClick = (id)=>{
    this.props.addToCart(id);
  }

  render(){
    console.log(this.props);
    let item = this.props.item ? this.props.item : this.props.items[0];
      return(
        <div>
          <div>
            <button> <Link to="/">Back</Link></button>
          </div>
          <div key={item.id}>
            <div>
              <h1>{item.title}</h1>
            </div>
            <div>
                <img style={{width: '100px', height:'100px'}} src={item.img} alt={item.title}/>
            </div>
            <div>
              <button to="/" className="btn-floating red" onClick={()=>{this.handleClick(item.id)}}><i>add</i></button>
            </div>
            <div>
              <p>{item.desc}</p>
              <p><b>Price: {item.price}$</b></p>
            </div>
          </div>
        </div>
      )
  }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      total : state.totalItem,
      item: state.item
    }
  }
const mapDispatchToProps= (dispatch)=>{
  return{
    addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item)
