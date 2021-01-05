import React, { Component } from 'react'
import './Home.css';
import s1 from './images/0.jpg';
import s2 from './images/01.jpg';
import s3 from './images/02.jpg';
import c1 from './images/1.jpg';
import c2 from './images/11.jpg';
import c3 from './images/12.jpg';
import c4 from './images/14.jpg';
import o1 from './images/offer.PNG';
import o2 from './images/offer2.PNG';
import o3 from './images/offer3.PNG';
export class Home extends Component {
    render() {
        return (
        <div className="container">
           <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                  <div class="item active">
                      <div class="carousel-caption">
                         <h1>Genuine diamonds</h1>
                         <p>Make your life better</p>
                      </div>
                      <img src={s1} alt="Los Angeles" style={{width:"100%"}}></img>
                  </div>
                  <div class="item">
                      <div class="carousel-caption">
                         <h1>Engagement Ring</h1>
                         <p>She will say “yes”</p>
                      </div>
                      <img src={s2} alt="Los Angeles" style={{width:"100%"}}></img>
                  </div>
                  <div class="item">
                      <div class="carousel-caption">
                         <h1>Golden Bracelets</h1>
                         <p>You deserve to be beauty</p>
                      </div>
                      <img src={s3} alt="Los Angeles" style={{width:"100%"}}></img>
                  </div>

              </div>
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
             </a>
             <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                 <span class="sr-only">Next</span>
             </a>

           </div>
            
        <div class="card-deck" style={{margin:"auto", padding:"10px", width: "90%"}}>
            <h1 style={{textAlign:"center"}}>Latest Products</h1>
            <div class="card" style={{border:"1px solid grey",margin:"10px", padding:"10px"}}>
                <img src={c1} class="card-img-top" alt="card1"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a class="btn btn-primary" href="#" style={{marginLeft:"50px"}} >Add To Cart</a>
                </div>
            </div>
            <div class="card" style={{border:"1px solid grey",margin:"10px", padding:"10px"}}>
                <img src={c2} class="card-img-top" alt="card2"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a class="btn btn-primary" href="#" style={{marginLeft:"50px"}} >Add To Cart</a>
                </div>
            </div>
            <div class="card" style={{border:"1px solid grey",margin:"10px", padding:"10px"}}>
                <img src={c3} class="card-img-top" alt="card3"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a class="btn btn-primary" href="#" style={{marginLeft:"50px"}}>Add To Cart</a>
                </div>
            </div>
            <div class="card" style={{border:"1px solid grey",margin:"10px", padding:"10px"}}>
                <img src={c4} class="card-img-top" alt="card4"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <a class="btn btn-primary" href="#" style={{marginLeft:"50px"}}>Add To Cart</a>
                </div>
            </div>

        </div>
       
        <div class="offer1" style={{margin:"20px"}}>
   	       <img src={o1} style={{width:"100%"}} alt="offer1"></img>
        </div>
        <div class="offer2" style={{margin:"20px"}}>
   	       <img src={o2} style={{width:"100%"}} alt="offer2"></img>
        </div> 
        <div class="offer3" style={{margin:"20px"}}>
   	       <img src={o3} style={{width:"100%"}} alt="offer3"></img>
        </div>
               

         </div>
        )
    }
}

export default Home
