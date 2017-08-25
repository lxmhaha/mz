import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import '../../src/css/filmdetail.css'
import Homeservice from '../../src/services/homeService.js'


export default class Filmdetail extends Component{
    constructor({history}){
        super();
        //console.log(history)
		this.state={
            id:history.location.state.id,
            history,
            filmdetail:{},
            actors:[]
		}
        
 //     console.log(this.state.history.location.state.id)  
    }
    render(){
        return(
            <div class="filmdetailbox">
            <div class="detailpage">
                <div class="coverImg">
                    <img src={this.state.filmdetail.imgurl}/>
                </div>
               <div class="introduce">
                    <h2>影片简介</h2>
                    <p>导演:{this.state.filmdetail.director}</p>
                     <p>主演:
                         {
                            this.state.actors.map((item,index)=>{
                                return(
                                    <span key={index}>{item.name}|</span>
                                )
                            })
                         }
                     </p>
                    <p>地区语言:{this.state.filmdetail.nation}({this.state.filmdetail.language})</p>
                     <p>类型:{this.state.filmdetail.category}</p>
                  
                    <p>上映时间:{this.state.filmdetail.time}</p>
                    <div class="text">{this.state.filmdetail.synopsis}</div>
                </div>
               
            </div>
             <div class="button" >
                    <Link to="/cinema">点击购票</Link>
            </div>
        </div>
        )
    }
    componentWillMount(){
        
			Homeservice.getfilmdetailDate(this.state.id)
		.then((res)=>{
 //            console.log(res)
              
        this.setState({filmdetail:res})
        this.setState({actors:res.actors})
		})
  
    
	
    }
  
  


}