import API from '../api/index.js'
import axios from 'axios'



//首页banner数据
function getbannerDate(){
  return new Promise((resolve,reject)=>{

      axios.get(API.bannerApi)
    .then((res)=>{
        // console.log(res)
var arr=res.data.data.billboards
if(arr==null){
  getbannerDate()
}else{
    window.sessionStorage.setItem('lunbo',JSON.stringify(res.data.data.billboards))
  resolve(res.data.data.billboards)   
}
    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}
//首页正在上映的电影列表数据
function gethomelistDate(){
  return new Promise((resolve,reject)=>{

      axios.get(API.homelistApi)
    .then((res)=>{
        //console.log(res)
        resolve(res.data.data.films)    
    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}
//首页即将上映的电影列表数据
function getwillcomelistDate(){
  return new Promise((resolve,reject)=>{

      axios.get(API.willcomeListApi)
    .then((res)=>{
       let arr=res.data.data.films
      arr.map((item)=>{
        
       var date= new Date(item.premiereAt)
        var m=date.getMonth()+1;
        var d=date.getDate()
        item.time=`${m}月${d}日上映`
       
        return item
      })
         resolve(arr)
    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}


//电影详情列表页面

function getfilmdetailDate(cid){
  return new Promise((resolve,reject)=>{

      axios.get(API.filmdetailsApi+cid)
    .then((res)=>{
        //console.log(res)
var filmobj=res.data.data.film
let obj={}
obj.id=filmobj.id
obj.imgurl=filmobj.cover.origin
obj.director=filmobj.director
obj.actors=filmobj.actors
obj.nation=filmobj.nation
obj.language=filmobj.language
obj.category=filmobj.category
obj.synopsis=filmobj.synopsis

 var date= new Date(filmobj.premiereAt)
var m=date.getMonth()+1;
var d=date.getDate()
obj.time=`${m}月${d}日上映`
        resolve(obj)   

     //console.log((res.data.data.film) )
//console.log(obj)
    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}


//影片页面正在热映
function getfilmplayDate(num){
  return new Promise((resolve,reject)=>{
      axios.get(API.flimplayListApi+num)
    .then((res)=>{

    //    console.log(res)
    resolve(res.data.data.films)   
      //console.log((res.data.data.films) )
    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}


//影片页面即将上映
function getfilmwillcomeDate(num){
  return new Promise((resolve,reject)=>{

      axios.get(API.flimwillcomeApi+num)
    .then((res)=>{
       // console.log(res)
        let arr=res.data.data.films
      arr.map((item)=>{  
       var date= new Date(item.premiereAt)
        var m=date.getMonth()+1;
        var d=date.getDate()
        var week=new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()]
        item.time=`${m}月${d}日上映　　${week}` 
        return item
      })
         resolve(arr)
    })
    .catch((err)=>{
    console.log(err)
    })
  })  
}

//s商城页面，是一个比较多的各种数据
function getshopDate(){
  return new Promise((resolve,reject)=>{

      axios.get(API.shopIconApi)
    .then((res)=>{
   //     console.log(res)
     res.data.data.splice(12,3) 

    let arriconlist=(res.data.data.slice(0,8)) 


     var newArriconlist=arriconlist.map((item)=>{
      let obj={}
      obj.imageSrc=item.imageSrc
      obj.name=item.name
      return obj
    })
 //console.log(newArriconlist)

let arrbanicon=(res.data.data.slice(8,10))
 var newArrban=arrbanicon.map((item)=>{
      let obj={}
      obj.imageSrc=item.imageSrc
      obj.name=item.name
      return obj
    })
 //console.log(newArrban)

let arrrecommend=(res.data.data.slice(10,12))
 var newArrrecommend=arrrecommend.map((item)=>{
      let obj={}
      obj.imageSrc=item.imageSrc
      obj.name=item.name
      return obj
    })
 //console.log(newArrrecommend)

let arrrcbigimg=(res.data.data.slice(12,19))
 var newArrrcbigimg=arrrcbigimg.map((item)=>{
      let obj={}
      obj.imageSrc=item.imageSrc
      obj.name=item.name
      obj.products=item.products
      return obj
    })
 //console.log(newArrrcbigimg)

 let arrsrcpiclist=(res.data.data.slice(12,19))
 var newsrcpiclist=arrsrcpiclist.map((item)=>{
      let obj={}
      obj.products=item.products
     
      return obj
    })

var bigobj={}
bigobj.banner=newArrban
bigobj.iconlist=newArriconlist
bigobj.recommend=newArrrecommend
bigobj.rcpiclist=newArrrcbigimg
bigobj.srcpiclist=newsrcpiclist

     resolve(bigobj)   
    })
    .catch((err)=>{
    console.log(err)
    })
  }) 
}
function gethandpickDate(num){
  return new Promise((resolve,reject)=>{

      axios.get(API.handpickApi+num)
    .then((res)=>{
//console.log((res.data.data.list) )
 let handarr=res.data.data.list
let harr=handarr.map((item)=>{
  let hobj={}
  hobj.image=item.skuList[0].image
  hobj.name=item.masterName
  hobj.price=item.minPrice/100
  hobj.salesCount=item.displaySalesCount
  return hobj
})
        resolve(harr)   
    
    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}

//影院数据
function getcinemalistDate(){
 return new Promise((resolve,reject)=>{

      axios.get(API.cinemaApi)
    .then((res)=>{
 //console.log(res.data.data.cinemas)
let carr=res.data.data.cinemas

 var ncarr=carr.map((item)=>{

 return (item.district.name) 

  
})
//console.log(ncarr)

var newArr=[]
for(var i=0;i<ncarr.length;i++){
if(newArr.indexOf(ncarr[i])==-1){
    newArr.push(ncarr[i])
}
}
  //  console.log(newArr) 
var obj={}
for (var i = 0; i < newArr.length; i++) {
   obj[newArr[i]]=[]
  
}
carr.map((item,key)=>{
 obj[item.district.name].push(item)
})
//console.log(obj)

var bigobj={}
bigobj.bigdata=obj
bigobj.smadata= newArr

//console.log(bigobj)

      resolve(bigobj)   

    })
    .catch((err)=>{
    console.log(err)
    })
  })
}


//城市数据
function getcityDate(){
  return new Promise((resolve,reject)=>{

      axios.get(API.cityApi)
    .then((res)=>{
console.log(res.data.data.cities)
  let cityarr=res.data.data.cities  
  var letterarr=cityarr.map((item)=>{
    return item.pinyin.substr(0,1) 
  })   
//console.log(letterarr)
var newletterArr=[]
for(var i=0;i<letterarr.length;i++){
if(newletterArr.indexOf(letterarr[i])==-1){
    newletterArr.push(letterarr[i])
}
}
newletterArr.sort();
//console.log(newletterArr)
var cityobj={}
for (var i = 0; i < newletterArr.length; i++) {
   cityobj[newletterArr[i]]=[]
  
}


cityarr.map((item,key)=>{
 cityobj[item.pinyin.substr(0,1)].push(item)
})

//console.log(cityobj)
var bigcityobj={}
bigcityobj.bigdata=cityobj
bigcityobj.smadata= newletterArr

//console.log(bigcityobj)

      resolve(bigcityobj)   

})
.catch((err)=>{
    console.log(err)
    })

  })
}

//小商品详情页
function getgoodsdetailDate(id){
  return new Promise((resolve,reject)=>{

      axios.get(API.goodsApi+id)
    .then((res)=>{
//       console.log(res.data.data)

       resolve(res.data.data)   

    })
    .catch((err)=>{
    console.log(err)
    })
  })
  
}


export default{
    getbannerDate,
    gethomelistDate,
    getwillcomelistDate,
    getfilmplayDate,
    getfilmwillcomeDate,
    getshopDate,
    gethandpickDate,
    getcinemalistDate,
    getfilmdetailDate,
    getcityDate,
    getgoodsdetailDate
  
}