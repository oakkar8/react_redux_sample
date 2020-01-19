import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart, goToItem} from './actions/cartActions';
import {Link} from 'react-router-dom';
class Home extends Component{
  constructor(props) {
    super(props);
    this.state={
      filter:''
    }
  }

  handleClick = (id)=>{
    this.props.addToCart(id);
  }

  handleGoTo = (id) =>{
    this.props.goToItem(id);
  }
  render(){
    let filter = this.state.filter.toLowerCase();
    let items = this.state.filter.length > 0 ? this.props.items.filter( item => item.title.toLowerCase().includes(filter)) : this.props.items;
    let itemList = items.map(item=>{
        return(
          <div key={item.id}>
            <div>
              <h1>{item.title}</h1>
            </div>
            <div>
              <Link to="/singleitem" onClick={()=>this.handleGoTo(item.id)}>
                <img style={{width: '100px', height:'100px'}} src={item.img} alt={item.title}/>
              </Link>
            </div>
            <div>
              <button to="/" className="btn-floating red" onClick={()=>{this.handleClick(item.id)}}><i>add</i></button>
            </div>
            <div>
              <p>{item.desc}</p>
              <p><b>Price: {item.price}$</b></p>
            </div>
          </div>
        )
      })
      return(
        <div className="container">
          <div>
            <h1>Total items in cart : {this.props.total} </h1>
          </div>
          <div>
            <input onChange={(e) => {
                console.log(e.target.value);
                this.setState({ filter: e.target.value })
              }}
              placeholder="type to filter"/>
          </div>
          <h3 className="center">Items List</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
      )
  }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items,
      total : state.totalItem
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        goToItem: (id)=>{dispatch(goToItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
