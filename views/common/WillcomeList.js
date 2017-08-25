import React, {Component} from 'react'

import { Route,Link} from 'react-router-dom'

export default class WillcomeList extends Component{
	constructor({history}){
        super();
		this.state={
			history
		}
		
	}
	render(){

		return (
			<div class="homelist">
                <div class='willcomeline'>
                    <span class='linebox'>即将上映</span>
                </div>
                <ul class='listbox'>
                    {
                        this.props.willcomelist.map((item,index)=>{
                            return(
                              
                                    <li key={index} onClick={this.detailAction.bind(this,item.id)}>
                                        <span class='listimg'><img src={item.cover.origin}/></span>
                                        <div class='listifo'>
                                            <div>
                                                <span class='texttitle'>{item.name}</span>
                                            </div>
                                            <em>{item.time}</em>
                                        </div>
                                    </li>
                                    
                               
                            )
                        })
                    }

                    <div class='playingmore'><a>更多即将上映电影</a></div>
                </ul>
			</div>
		)
	}
 detailAction(id){
       this.props.detailAction(id)
    
    }
	
}