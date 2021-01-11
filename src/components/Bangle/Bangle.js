import React, { Component }from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import './Bangle.css';
import {MdAdd} from 'react-icons/md';
import {viewDetails} from './ProductDetails';
import { Link } from 'react-router-dom';
  
 class Bangle extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    sendDetails=(item)=>{
        this.props.viewDetails(item);
    }
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title} class='responsive' style={{width:300}}/>
                            <br></br>
                            <button to="/"style={{fontSize:15}} onClick={()=>{this.handleClick(item.id)}}><MdAdd size="20px"/>Add to Cart</button>
                            
                            <Link to={{
                                pathname:"/ProductDetails/"+item.title,
                                state:item
                            }} style={{textDecoration:"none"}}><button style={{fontSize:18}}>view</button></Link>
                                
                           
                        </div>

                        <div className="card-content">
                            <p>{item.title}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 
                     
                 </div>
            )
        })

        return(
            <div className="Bangle">
            <div class="container" style={{width:'100%'}}>
                <h3>Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
            <div>
                        
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

export default connect(mapStateToProps,mapDispatchToProps)(Bangle)