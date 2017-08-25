import React, {Component} from 'react'

import Homeservice from '../services/homeService.js'

export default class Homelist extends Component{
	constructor(){
		super();
		this.state={
				fwillcomeDate:[]
		}
		
	}
	render(){
		return (
			<div class="filmlist willcomePage">
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