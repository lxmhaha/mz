import React, {Component} from 'react'
import { Route,Link} from 'react-router-dom'
import Homeservice from '../services/homeService.js'

import Homelist from '../../views/common/Homelist.js'
import WillcomeList from '../../views/common/WillcomeList.js'

import  Filmdetail from '../../views/common/filmdetail.js'

import '../css/home.css'
var mySwiper=null;
export default class Home extends Component{
	constructor({history}){
		super();
	//	console.log(history)
		this.state={
			isshow:false,
			bannerData:[],
			nowlistDate:[],
			willcomelist:[],
			
			history,
			id:''

		}
	}
	
	render(){
		let detailstyle={
			display:this.state.isshow?'block':'none'
		}
		return (
			<div class="page homepage">
				<div ref='banner' class='homebanner swiper-container'>
					<div class="swiper-wrapper">
					
						{this.state.bannerData.map((item,index)=>{
							return(
							
								<div class="swiper-slide" key={index}>
									<img src={item.imageUrl}/>
								</div>
							) 

						})}	
					</div>
				</div>

				<Homelist nowlistDate={this.state.nowlistDate}  filmdetail={this.state.filmdetail} detailAction={this.detailAction.bind(this)}/>
				<WillcomeList willcomelist={this.state.willcomelist} detailAction={this.detailAction.bind(this)}/>
				
			
				
			</div>
		)
	}
detailAction(item){
	this.state.history.push({
			pathname: '/flimdetail',
					state: {
						id:item
					}
		});


}
	 
	componentWillMount(){
		Homeservice.getbannerDate()
		.then((res)=>{
			// console.log(res)
			var data=res
			data.push(res.slice(0,1)[0])
			data.unshift(res.slice(-2)[0])
			this.setState({bannerData:data})

			mySwiper.update();
			mySwiper.slideTo(1, 0);
		})
		Homeservice.gethomelistDate()
		.then((res)=>{
			//console.log(res)
			this.setState({nowlistDate:res})
			
		})
		Homeservice.getwillcomelistDate()
		.then((res)=>{
			// console.log(res)
			this.setState({willcomelist:res})
			
		})
			Homeservice.getfilmdetailDate()
		.then((res)=>{
			// console.log(res)
		this.setState({filmdetail:this.state.filmdetail})
			
		})

	
	}
	componentDidMount(){
		 mySwiper = new Swiper (this.refs.banner, {
			direction: 'horizontal',
			loop: true,
			autoplay : 1000,
			speed:300
		})
		
	}

}