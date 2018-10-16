import React, { Component } from 'react';
import ShoeList from '../components/ShoeList';

class ShoeListPage extends Component {
    render() {
        return (
            <div>
                <h1>List of Shoes Here</h1>
                <ShoeList />
            </div>
        )
    }
}

export default ShoeListPage;