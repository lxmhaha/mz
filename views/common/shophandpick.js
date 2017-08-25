import React, {Component} from 'react'

export default class ShopHandpick extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div class="shophandpick">
               <h2>——好货精选——</h2> 
                <ul>
               {
                   this.props.shophandpick.map((item,index)=>{
                        return(
                            <li key={index}>
                                <img src={item.image}/>
                                <p class='proname'>{item.name}</p>
                                <div>
                                    <span class="price">￥{item.price}</span>
                                    <span class="salecount">已售{item.salesCount}</span>
                                </div>
                            </li>
                        )
                   })
                   
               }
               </ul>
            </div>
        )
    }
}