import React, {Component} from 'react'

import Homeservice from '../services/homeService.js'
import ShopicoList from '../../views/common/ShopicoList.js'
import ShopremList from '../../views/common/shopremlist.js'
import ShopHandpick from '../../views/common/shophandpick.js'
import '../css/shop.css'
var mySwiper=null;
export default class Shop extends Component{
	constructor({history}){
		super();
		this.state={
			bannerdate:[],
			iconlist:[],
			recommend:[],
			rcpiclist:[],
			srcpiclist:[],
			shophandpick:[],
			history,
			gid:'',
			flag:false,
			page:1
		
		}
		
	}
	render(){
		return (
				<div class="shoppage" onScroll={this.handleScroll.bind(this)}  ref="bodyBox">
					
					<div ref='banner' class='shopbanner swiper-container'>
						<div class="swiper-wrapper">
						
							{this.state.bannerdate.map((item,index)=>{
								return(
								
									<div class="swiper-slide" key={index}>
										<img src={item.imageSrc}/>
									</div>
								) 

							})}	
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<ShopicoList iconlist={this.state.iconlist} />
					<div class='recommend'>
						{
							this.state.recommend.map((item,index)=>{
								return(
									<img src={item.imageSrc} key={index}/>
								)
								
							})	
						}
					</div>
					<ShopremList rcpiclist={this.state.rcpiclist} srcpiclist={this.state.srcpiclist}  goodsAction={this.goodsAction.bind(this)}/>
					<ShopHandpick shophandpick={this.state.shophandpick} pickAction={this.pickAction.bind(this)}/>
		</div>
			
		)
	}
	goodsAction(item){
	this.state.history.push({
			pathname: '/goodsdetail',
					state: {
						gid:item
					}
		});
	}
	pickAction(item){
		this.state.history.push({
				pathname: '/goodsdetail',
						state: {
							gid:item
						}
			});
		}
	handleScroll(e){
		let clientHeight = this.refs.bodyBox.clientHeight; //可视区域高度
        let scrollTop  = this.refs.bodyBox.scrollTop;  //滚动条滚动高度
        let scrollHeight = this.refs.bodyBox.scrollHeight; //滚动内容高度
		//console.log(clientHeight,scrollTop,scrollHeight)

		if((clientHeight+scrollTop)>scrollHeight-30 && this.state.flag==false){
			this.state.page++
			this.setState({page: this.state.page})
			this.setState({flag:true})
			
			Homeservice.gethandpickDate(this.state.page)
			.then((res)=>{
				console.log(res)
				res.map((item)=>{
					this.state.shophandpick.push(item)
				})
			this.setState({filmplayDate:this.state.filmplayDate})
			this.setState({flag:false})
		   
			})
	
		}


	}






	componentWillMount(){
		Homeservice.getshopDate()
		.then((res)=>{
			//console.log(res)
		this.setState({bannerdate:res.banner})
		this.setState({iconlist:res.iconlist})
		this.setState({recommend:res.recommend})
		this.setState({rcpiclist:res.rcpiclist})
		this.setState({srcpiclist:res.srcpiclist})
	//console.log(this.state.rcpiclist)

			mySwiper.update();
		})


	Homeservice.gethandpickDate()
		.then((res)=>{
			console.log(res)
		this.setState({shophandpick:res})	
			
		})
	
	}


	componentDidMount(){
		 mySwiper = new Swiper (this.refs.banner, {
			direction: 'horizontal',
			pagination: '.swiper-pagination',
			autoplay : 1000,
			speed:300
	})
	}
	
}