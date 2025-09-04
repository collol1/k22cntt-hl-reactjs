import React, { Component } from 'react';

class NvhClasscomp extends Component {
    render() {
        return (
            <div className='alert alert-success'>
                <h2>Class Component Demo</h2>
                <h4>Welcome to, {this.props.fullName}</h4>
                <p>company: {this.props.company}</p>
            </div>
        );
    }
}

export default NvhClasscomp;