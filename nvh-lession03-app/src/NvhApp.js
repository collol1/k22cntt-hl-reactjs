import React, { Component } from 'react';
import NvhFuncComp from './componet/NvhFuncComp';
import NvhClassComp from './componet/NvhClassComp';
import NvhRenderList from './componet/NvhRenderList';
import NvhListStudent from './componet/NvhListStudent';

class NvhApp extends Component {
  constructor(props){
    super(props);
    this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
            ],
        }
  }
  
  render() {
    return (
      <div className='container border '>
        <h2> ôn tập về componet/ props/ state/ render listkey</h2>
        <NvhFuncComp/>
        <NvhFuncComp fullname="Nguyễn Văn Huỳnh" address="hà nội" email="kx4kX@example.com"></NvhFuncComp>
        <NvhClassComp/>
        <NvhClassComp fullname="Nguyễn Văn Huỳnh" age="21" company="FitNTU" phone="0123456789"></NvhClassComp>
        <NvhRenderList></NvhRenderList>
        <hr/>
         <NvhListStudent students = {this.state.students} />

      </div>
    );
  }
}

export default NvhApp;
