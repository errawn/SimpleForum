import React, { Component } from 'react';

import Content from '../components/Content';
import Form from '../containers/Form';
import Navbar from './Navbar';

class Home extends Component {
	render () {
		return (
			<div>
				<Navbar />
	            <Content>
	            	<Form />
	            </Content>
            </div>
		);
	}
}

export default Home;