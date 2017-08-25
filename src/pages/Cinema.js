import React, {Component} from 'react'
import Homeservice from '../services/homeService.js'
import '../css/cinema.css'
export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			areaData:[],
			arealist:{},
			isshow:false
		}
	}
	render(){
		
		return (
			<div class="page cinemaPage">
				<div>
					{
						this.state.areaData.map((item,index)=>{
							return(
							<div key={index} class="everyitem">
								<div  class="area" onClick={this.listShow.bind(this,index)}>
									{item}
								</div>
								<div  class="itembox" >	
								{
									JSON.stringify(this.state.arealist)=="{}"? null : this.state.arealist[item].map((sitem, index) => {
										return (
												<div class='cinemalist' key={index}>
													<h2><i>{sitem.name}</i><span class="zuo">座</span><span class="tong">通</span><span class="iconfont icon-arrow-right"></span></h2>
													<a class="coke">可乐爆米花</a>
													<div class="address"><p>{sitem.address}</p></div>
												</div>	
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
	
	listShow(index){
		console.log(index)
		
	var ocinemalist=document.querySelectorAll('.itembox')	



	for(var i=0;i<ocinemalist.length;i++){
	
		if(i!=index){
				ocinemalist[i].className='itembox hide'
		}
	}
	if(ocinemalist[index].className=='itembox '){
		ocinemalist[index].className='itembox hide'
	}else{
		ocinemalist[index].className='itembox '
	}

	}

	componentWillMount(){

		Homeservice.getcinemalistDate()
		.then((res)=>{
			console.log(res)

			this.setState({areaData:res.smadata})
			this.setState({arealist:res.bigdata})
			console.log(this.state.areaData)
			console.log(this.state.arealist)
		})

	
	}
	componentDidMount(){
		
	}
}