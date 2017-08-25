import React, {Component} from 'react'

export default class ShopremList extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){

        return(
            <div class="shopremlist">
              {
                  this.props.rcpiclist.map((item,index)=>{
                        return(
                            <div key={index} class='remlist'>
                                <img src={item.imageSrc}/>
                                    <div class="slistbox">
                                        { 
                                            item.products.map((sitem,sindex)=>{
                                                return (
                                                
                                                        <div key={sindex} class='shopsmalist' onClick={this.goodsAction.bind(this,sitem.id)}> 
                                                    
                                                            <img src={sitem.image}/>                                            
                                                            <p>{sitem.name}</p>
                                                            <span>￥{sitem.price/100}.00</span>
                                                    </div>
                                                
                                                    
                                                )
                                            })
                                        }
                                        <div class='more'>
                                            <a>全部</a>
                                        </div>
                                    </div>
                            </div>
                        )
                  })
              }
            </div>
        )
    }
     goodsAction(id){
         console.log(id)
       this.props.goodsAction(id)
    
    }
}