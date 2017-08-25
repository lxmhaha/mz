import React, {Component} from 'react'

import Homeservice from '../services/homeService.js'

export default class Homelist extends Component{
	constructor(){
		super();
		this.state={
				fwillcomeDate:[],
				page:1,
				flag:false
		}
		
	}
	render(){
		return (
			<div class="filmlist willcomePage" onScroll={this.handleScroll.bind(this)}  ref="bodyBox">
               <ul>
                    {this.state.fwillcomeDate.map((item,index)=>{
                        return(
                            <li key={index}>
                                <img src={item.poster.origin}/>
                                <div class='filmdescribe'>
                                    <h2>
										<span class='title'>{item.name}</span>
                                        <span class='iconfont icon-arrow-right'></span>
                                    </h2>
                                   
                                    <p>{item.intro}</p>
                                    <div class='showtime'>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                                
                            </li>
                        )
                    })

                    }
                </ul>
			</div>
		)
	}
	handleScroll(e){
		let clientHeight = this.refs.bodyBox.clientHeight; //可视区域高度
		let scrollTop  = this.refs.bodyBox.scrollTop;  //滚动条滚动高度
		let scrollHeight = this.refs.bodyBox.scrollHeight; //滚动内容高度
		console.log(clientHeight,scrollTop,scrollHeight)
		if((clientHeight+scrollTop)>scrollHeight-30 && this.state.flag==false){
			this.state.page++
			this.setState({page:this.state.page})
			this.setState({flag:true})

			Homeservice.getfilmwillcomeDate(this.state.page)
			.then((res)=>{
				console.log(res)
				res.map((item)=>{
					this.state.fwillcomeDate.push(item)
					this.setState({fwillcomeDate:this.state.fwillcomeDate})
				})
				this.setState({fwillcomeDate:this.state.fwillcomeDate})
				this.setState({flag:false})
			})

		}
	
		
	}
	componentWillMount(){
		Homeservice.getfilmwillcomeDate()
		.then((res)=>{
			console.log(res)
		this.setState({fwillcomeDate:res})
		
		})
	
	}
	componentDidMount(){
		
	}
	
	
}