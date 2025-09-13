import React, { Component } from 'react';

class NvhEventClass extends Component {

    nvh_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    nvh_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.nvh_Func1}>Click</button>
                <button onClick={()=>this.nvh_Func2("Chung trịnh văn")}>Click Param</button>
            </div>
        );
    }
}

export default NvhEventClass;