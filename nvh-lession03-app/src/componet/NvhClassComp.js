import React, { Component } from 'react';

class NvhClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fistname: 'Nguyễn',
            lastname: 'Văn Huỳnh',
            age: 21,
            course: 'reactjs',
            marks:[
                {"toán":"10"},
                {"lý":"9"},
                {"hóa":"8"}
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>Demo Class Component</h2>
                <div>
                    <h3>Đọc dữ liệu từ props</h3>
                    <p> name: {this.props.fullname} </p>
                    <p> age: {this.props.age} </p>
                    <p> company: {this.props.company} </p>
                    <p> phone: {this.props.phone} </p>
                    </div>
                <div>
                    <h3>Đọc dữ liệu từ state</h3>
                    <p> first name: {this.state.fistname} </p>
                    <p> last name: {this.state.lastname} </p>
                    <p> age: {this.state.age} </p>
                    <p> course: {this.state.coruse} </p>
                    <p> marks: {this.state.marks.toString()}</p>
                </div>
            </div>
        );
    }
}

export default NvhClassComp;
