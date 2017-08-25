import React, {Component} from 'react'

import Homeservice from '../services/homeService.js'
import '../css/goods.css'
var mySwiper=null;
export default class Goodsdetail extends Component{
    constructor({history}){
        super();
        //console.log(history)
		this.state={
            gid:history.location.state.gid,
            history,
            goodsdata:{},
            goodsbanner:[]
          
		}
        
     console.log(this.state.history.location.state.gid)  
    }
    render(){
        return(
            <div class="page goodsPage">
                <div ref='goodsbanner' class='shopbanner swiper-container'>
                    <div class="swiper-wrapper">
                    
                        {this.state.goodsbanner.map((item,index)=>{
                            return(
                            
                                <div class="swiper-slide" key={index}>
                                    <img src={item}/>
                                </div>
                            ) 

                        })}	
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class='goodsinfo'>
                        <h2> {this.state.goodsdata.masterName}</h2>
                </div>
               
            </div>
        )
    }
     componentWillMount(){
        
        Homeservice.getgoodsdetailDate(this.state.gid)
        .then((res)=>{
        console.log(res)
        this.setState({goodsdata:res})   
            this.setState({goodsbanner:res.skuList[0].images})   
            	mySwiper.update();
    })

	
    }
      componentDidMount(){
		 mySwiper = new Swiper (this.refs.goodsbanner, {
			direction: 'horizontal',
			pagination: '.swiper-pagination',
            // autoplay :1000,
            // loop : true,
			//speed:2000
	})
	}

}