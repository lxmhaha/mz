import React, {Component} from 'react'

export default class ShopicoList extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div class="shopiconlist">
                <ul>
               {
                   this.props.iconlist.map((item,index)=>{
                        return(
                            <li key={index} >
                            <img src= {item.imageSrc}/>   
                            <p>{item.name}</p>
                            </li>
                        )
                   })
               }
               </ul>
            </div>
        )
    }
}