import React, { Component } from 'react'
import { withRouter} from "react-router-dom";
import { Button } from 'react-bootstrap';

 class HomePage extends Component {



	render() {
		return (
			<div className='home-div'>
				Welcome to War
				<div className='button-div'>
					<Button>
					<a className='link' href='/gameboard'>Single Player Hot Seat</a>
					</Button>
					<br></br>
					<br></br>
					<Button>
					<a className='link' href='/'>Two Player Fun</a>
					</Button>
				</div>
			</div>
		)
	}
}

export default withRouter(HomePage);