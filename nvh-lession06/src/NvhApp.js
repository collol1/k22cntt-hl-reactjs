import React, { Component } from 'react';
import NvhEventComp from './component/NvhEventComp';
import NvhEventClass from './component/NvhEventClass';  
import NvhEventForm1 from './component/NvhEventForm1';
import NvhEventForm2 from './component/NvhEventForm2';

class NvhApp extends Component {
    render() {
        return (
            <div className='container border'>
                <h1 className='text-center'> Nguyễn Văn Huỳnh <br/> React - Event - Form</h1>
                <hr/>
            <NvhEventClass />
            <NvhEventComp />
            <NvhEventForm1 />
                <NvhEventForm2 />
                    
                </div>
        );
    }
}

export default NvhApp;

