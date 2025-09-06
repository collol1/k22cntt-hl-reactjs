import React, { Component } from 'react';

class NvhFuncComp extends Component {
    render() {
        return (
            <div>
                <h2>Demo Function Component</h2>
                <div>
                    <h3>Nội dung từ props</h3>
                    <p> wellcome to {this.props.fullname}  </p>
                    <p> Địa chỉ {this.props.address}</p>
                </div>
            </div>
        );
    }
}

export default NvhFuncComp;
