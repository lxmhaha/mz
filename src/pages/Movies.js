import React, {Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import '../css/film.css'

import FilePlaying from "./FilePlaying.js"
import Filewillcome from "./Filewillcome.js"





export default class Movies extends Component{
	constructor(){
		super();
		
		
		this.state={
				
		}
	}		
	
	render(){

		return (
			<div class="page filmpage"  >
				
				<div class='filmtype'>
					<NavLink  exact  to='/movies/'>正在热映</NavLink>
					<NavLink to ='/movies/come'>即将上映</NavLink>
				</div>
				

				
			<Route exact path='/movies/' component={FilePlaying}/>
			<Route path='/movies/come' component={Filewillcome}/>

			</div>
		)
	}



	componentDidMount(){
	
		
	}
	
}	
