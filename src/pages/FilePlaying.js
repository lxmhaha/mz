import React, {Component} from 'react'


import Homeservice from '../services/homeService.js'
export default class Homelist extends Component{
	constructor({location}){
        super();
       
		this.state={
				filmplayDate:[]
		}
		
	}
	render(){
		return (
			<div class="filmlist playingpage">
                <ul>
                    {this.state.filmplayDate.map((item,index)=>{
                        return(
                            <li key={index}>
                                <img src={item.poster.origin}/>
                                <div class='filmdescribe'>
                                    <h2>
                                        <span class='title'>{item.name}</span>
                                         <span class='pinfen'>
                                             {item.grade}
                                        </span>
                                        <span class='iconfont icon-arrow-right'></span>
                                    </h2>
                                   
                                    <p>{item.intro}</p>
                                    <div class='boxoffice'>
                                        <span>{item.cinemaCount}家影院正在上线</span>
                                        <span>{item.watchCount}人购票</span>
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
    componentWillMount(){
		Homeservice.getfilmplayDate()
		.then((res)=>{
			console.log(res)
		this.setState({filmplayDate:res})
		
		})
	
	}
	componentDidMount(){
		
	}
	
}