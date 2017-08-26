import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
            goodsinfo:{},
            skuListData:[],
            labelimg:'',
            isShow:false,
            num:1
           
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
                       <div class="price">￥{this.state.goodsinfo.price/100}</div>
                        <div>

                        </div>
                </div>
               <div class="selectbox" onClick={this.choiceAction.bind(this)}>
                    <div class="chooseAction">选择　规格　数量</div>                  
               </div>
               {/* <div class="introImg">
                    {this.state.goodsbanner.map((item,index)=>{
                        return(
                        
                            <div key={index}>
                                <img src={item}/>
                            </div>
                        ) 

                    })}	
               </div> */}
               <div class="goodcover" class={this.state.isShow?"goodcover active":"goodcover"}>
                        <div class="goodtypebox">
                            <div class="goodtypebox-top">
                                <div class="labelimgbox">
                                    <img src={this.state.labelimg}/>
                                </div>
                               
                                <div class='smanumbox'>
                                    <div class="jiage">￥{this.state.goodsinfo.price/100}</div>
                                    <div class="xgs">选择　规格　数量</div>
                                </div>
                                <div class="btnhide"  onClick={this.hideAction.bind(this)}>X</div>
                            </div>
                            <div class="labelbox">
                                <p>款式</p>
                                {
                                    this.state.skuListData.map((item,index)=>{
                                    return(
                                        <span  class="goodsstyle" key={index}  onClick={this.styleAction.bind(this,index)}  >{item.masterName}</span>
                                    )
                                    })
                                }
                            </div>
                            <div>
                                <p>选择数量</p>
                                <div class="numbox">
                                    <span class="minus" onClick={this.btnOperation.bind(this,-1)}>-</span>
                                    <span class="center">{this.state.num}</span>
                                    <span class="add" onClick={this.btnOperation.bind(this,1)}>+</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div class="goodsbuy">
                <div class='goodsbuy-left' ><Link to="/">首页</Link></div>
                <div class="buybtn">立即购买</div>
            </div>
            </div>
        )
    }
    choiceAction(){
        console.log('showcuhfa')
        this.setState({isShow:true})
    }
    hideAction(){
        console.log('hidecuhfa')
        this.setState({isShow:false})
    }
    styleAction(index){
        var ogoodsstyle=document.querySelectorAll('.goodsstyle')

        for(var i=0;i<ogoodsstyle.length;i++){
            
                if(i!=index){
                    ogoodsstyle[i].className='goodsstyle '
                }
            }
            if(ogoodsstyle[index].className=='goodsstyle active'){
                ogoodsstyle[index].className='goodsstyle '
            }else{
                ogoodsstyle[index].className='goodsstyle active'
            }
        
    }
    btnOperation(n){  
          var val=this.state.num+n
          if(val<=0){
            this.setState({num:1})  
          }else{
            this.setState({num:val})   
          }
           
        console.log('diajile')
    }
     componentWillMount(){
        
        Homeservice.getgoodsdetailDate(this.state.gid)
        .then((res)=>{
        console.log(res)
        this.setState({goodsdata:res})   
        this.setState({goodsbanner:res.skuList[0].images})  
        this.setState({goodsinfo:res.skuList[0]})  
        
        this.setState({skuListData:res.skuList}) 
        console.log(this.state.skuListData)
        this.setState({labelimg:res.skuList[0].images[0]})  
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