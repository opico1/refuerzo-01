import React, { Component } from 'react';
import ListCharacters from './ListCharacters';

class Pagination extends Component {

    constructor(props){
        super(props);

        this.state = {
            contador: 2,
        }
    }

    render() {
        console.log(this.state.contador)
        return (
            <div>
                <button type='button' className='btn btn-primary' onClick={() => this.setState({contador: this.state.contador + 1})}>Next</button>
                <button type='button' className='btn btn-primary' onClick={() => this.setState({contador: this.state.contador - 1})}>Prev</button>
                <br/>
                <ListCharacters conteo={this.state.contador}></ListCharacters>
            </div>
        );
    }
}

export default Pagination;
