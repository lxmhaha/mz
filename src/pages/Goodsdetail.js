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
            goodsbanner:[],
            skuListData:{}
          
		}
        
//     console.log(this.state.history.location.state.gid)  
    }
    render(){
        return(
            <div class="goodsPage-wrap">
            <div class="goodsPage">
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
                        <span>{this.state.goodsdata.slaveName}</span>
                       <div class="price">￥{this.state.skuListData.price/100}</div>
                        <div>

                        </div>
                </div>
               <div class="selectbox">
                    <div class="chooseAction">选择　规格　数量</div>
                   
               </div>
               <div class="goodcover">
                        <div class="goodtype">
                            款式
                        </div>
                </div>
            </div>
            <div class="goodsbuy">
                <div class='goodsbuy-left'>首页</div>
                <div class="buybtn">立即购买</div>
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
        this.setState({skuListData:res.skuList[0]}) 
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