import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ProductDetails.css'
import { addToCart } from '../actions/cartActions';
export class ProductDetails extends Component {
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
   render() {
    let item= this.props.location.state;
            return (
           <div className="ProductDetails" >
           <div className="container"> 
                <div className="left-div">
                    <div className="image" >
                <img src={item.img} width="100%"></img>
                </div>
                <div >

                </div>
                </div>
                <div className="right-div">
                 <div className="card-content">
                            <h1>{item.title}</h1>
                            <p><b>Price: {item.price}$</b></p>
                            <p>Schedule your free trail <Link to="/TryAtHome"style={{textDecoration:"none"}}> Try at Home</Link></p>
                            <h3 >{item.desc}</h3>
                            <button onClick={()=>{this.handleClick(item.id)}} style={{background:"#ffa64d"}}>
                                Buy Now
                            </button>
                            <div className="content">
                            <p>30-Days Money Back</p>
                            <p>Lifetime Exchange &Buy-Back</p>
                            <p>Certified Jwellery</p>
                            </div>
                            
                            <p>Any Questions? Please feel free to reach us at: 1234567890</p>
                            <h3>Proudct Details</h3>
                             <p>Product ID:{item.id}</p>
                            <p>Product Type:</p>
                            </div>
                </div>
                </div>
                 
                </div>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails)
