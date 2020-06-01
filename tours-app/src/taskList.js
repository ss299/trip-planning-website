import React, { Component } from 'react';
import './indexStyle.css';
import './style.css';
import './newTrip.js';
import Tasklist from '@humanmade/react-tasklist';
import '@humanmade/react-tasklist/css/index.css';

export class TaskList extends Component {
    constructor( props ) {
        super( props );
        this.state = {
			items: [
				{
					label: 'Item one',
					checked: false,
				},
				{
					label: 'Item two',
					checked: false,
					disabled: true,
				},
				{
					label: 'Item three',
					checked: true,
				},
			],
		};
	}

	onChange = ( index, checked ) => {
		const { items } = this.state;
		this.setState( {
			items: [
				...items.slice( 0, index ),
				{ ...items[ index ], checked },
				...items.slice( index + 1 )
			],
		} );
	}

	render() {
		const { items } = this.state;

		return <Tasklist
			items={ items }
			onChange={ this.onChange }
			onReorder={ items => this.setState( { items } ) }
		/>
    }
}

export default TaskList;

