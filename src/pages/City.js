import React, {Component} from 'react'
import '../css/city.css'

import store from '../store'
let unsubscribe;

import Homeservice from '../services/homeService.js'
export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			smadata:[],
			bigdata:{},
			history,
			addr:store.getState().addr
			
		}
	
	}
	
	render(){
		
		return (			
					<div id="city" class='page citypage'>
						<h2>GPS定位你所在城市</h2>
						<div class="item-address">
							<span class="addressname">深圳</span>
						</div>
						<h2>热门城市</h2>
						<div class="item-address">
							<span class="addressname">北京</span>
							<span class="addressname">上海</span>
							<span class="addressname">广州</span>
							<span class="addressname">深圳</span>
						</div>
						<h2>按字母排序</h2>
						<div class="letterbox item-address">
							{
								this.state.smadata.map((item,index)=>{
									return(
										<a key={index} class="addressname" href={'#liter'+index} >{item}</a>	
									)
								})
							}
						</div>
						<div class="citylist">
								{
									this.state.smadata.map((item,index)=>{
										return(
											<div key={index} class="listitem" id={'liter'+index}>
												<div class="itemword">{item}</div>
												<div class="item-address">
													{
													JSON.stringify(this.state.bigdata)=='{}'? null:this.state.bigdata[item].map((sitem,index)=>{
														return(
															
																<span key={index} class="addressname" onClick={this.addrAction.bind(this,sitem)}>{sitem.name}</span>		
															
														)
													})
													}
													</div>
											</div>
										)
									})
								}
						</div>


					</div>
			
		)
	}
	addrAction(sitem){
		store.dispatch({
			type: 'changeaddr',
			val: sitem.name
		})
		// this.state.history.push({
		// 	pathname:'/'
		// })

		//console.log(store.getState())
	}
	componentWillMount(){
		Homeservice.getcityDate()
		.then((res)=>{
			// console.log(res)
		this.setState({smadata:res.smadata})
		this.setState({bigdata:res.bigdata})
			
		})

		unsubscribe = store.subscribe(()=>{
	
			this.setState({addr: store.getState().addr});
		});

	
	}
	componentDidMount(){
	unsubscribe();
	}
}