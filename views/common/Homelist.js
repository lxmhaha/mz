import React, {Component} from 'react'

import { Route,Link} from 'react-router-dom'


export default class Homelist extends Component{

	constructor({history}){
        super();
        //console.log(history)
		this.state={
			history
		}
		
	}
	render(){
		return (
			<div class="homelist">
                <ul class='listbox'>
                    {
                        this.props.nowlistDate.map((item,index)=>{
                            return(
                              
                                    <li key={index} onClick={this.detailAction.bind(this,item.id)}>
                                      
                                        <span class='listimg'><img src={item.cover.origin}/></span>
                                        <div class='listifo'>
                                            <div>
                                                <span class='texttitle'>{item.name}</span>
                                                <i>{item.cinemaCount}家影院上映{item.watchCount}人购票</i>
                                            </div>
                                            <em>{item.grade}</em>
                                        </div>
                                   
                                    </li>
                            )
                        })
                    }

                    <div class='playingmore'><a>更多热映电影</a></div>
                </ul>
			</div>
		)
    }
    detailAction(id){
       this.props.detailAction(id)
    
    }
    componentWillMount(){
		
	

	
	}

	
}