//http://m.maizuo.com
//http://m.maizuo.com/v4/api/film/now-playing

import store from '../store'
let unsubscribe;




// 首页的API
const bannerApi='/v4/api/billboard/home'
const homelistApi='/v4/api/film/now-playing'
const willcomeListApi='/v4/api/film/coming-soon'


// 电影详情
const  filmdetailsApi='/v4/api/film/'





// 电影页面API
const flimplayListApi='/v4/api/film/now-playing?count=7&page='
const flimwillcomeApi='/v4/api/film/coming-soon?count=7&page='

// 卖座商
// ico
//http://aura.maizuo.com/
 const shopIconApi='/api/ad/list'

// 精选列表
  const  handpickApi='api/recommend/home?num=20&page='



// 影院
//http://m.maizuo.com/v4/api/cinema?__t=1503317067960
const cinemaApi='v4/api/cinema?__t=1503317067960'

//城市页面
const  cityApi='/v4/api/city'


// 小商品详情
//http://aura.maizuo.com/api/item?id=1607
const goodsApi='/api/item?id='


export default{
    bannerApi,
    homelistApi,
    willcomeListApi,
    flimplayListApi,
    flimwillcomeApi,
    shopIconApi,
    handpickApi,
    cinemaApi,
    filmdetailsApi,
    cityApi,
    goodsApi
}