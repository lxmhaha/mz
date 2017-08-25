import React,{Component} from 'react'
import {BrowserRouter, Route,Link} from 'react-router-dom'


import AppHeader  from '../views/common/AppHeader.js'
import  AppSlide from '../views/common/AppSlide.js'
import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Shop from './pages/Shop.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'
import City from "./pages/City.js"
import Goodsdetail from "./pages/Goodsdetail.js"


import Filmdetail  from '../views/common/filmdetail.js'

// import store from './store'
// let unsubscribe;
import './css/app.css'
export default class App extends Component{
	constructor(){
		super();
		//console.log(history)
	//	console.log(store.getState())
		this.state={
			slideShow:false,
			headerTitle: '卖座电影'
		}
		
	}
	render(){
		return(
			<BrowserRouter>
				
				<div >
				<AppHeader  menuHandle={this.menuHandle.bind(this)} title={this.state.headerTitle}/>
				
				<Route  path='/' render={({history,location})=>{
					return <AppSlide show={this.state.slideShow}  tAction={this.tAction.bind(this)}
					history={history} pathname={location.pathname} menuHandle={this.menuHandle.bind(this)} />}}/>
				
	
					
					<Route path='/' exact component={Home}/>
					<Route path='/movies' component={Movies}/>
					<Route path='/cinema' component={Cinema}/>
					<Route path='/shop' component={Shop}/>
					<Route path='/me' component={Me}/>
					<Route path='/card' component={Card}/>
					<Route path='/city' component={City}/>

					<Route path='/flimdetail' component={Filmdetail}/>
					<Route path='/goodsdetail' component={Goodsdetail}/>
				</div>
			
			</BrowserRouter>
		)
	}
	menuHandle(){
		this.setState({slideShow: !this.state.slideShow})

	}
	tAction(item){
		this.setState({headerTitle: item.header})
		this.setState({slideShow: false})
	}
}
