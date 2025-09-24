import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NvhNavbar from './components/NvhNavbar'
import NvhProductDetail from './pages/NvhProductDetail'
import NvhProduct from './pages/NvhProduct'
import NvhAbout from './pages/NvhAbout'
import NvhContact from './pages/NvhContact'
import NvhHome from './pages/NvhHome'
import NvhNotFound from './pages/NvhNotFound'
import NvhUsers from './pages/NvhUsers'
import NvhUserAdd from './pages/NvhUserAdd'
import NvhUserEdit from './pages/NvhUserEdit'
import NvhCategories from './pages/NvhCategories'


export default function NvhApp() {
  return (
    <div className='container border'>
        <h1>React Route - Demo [Nguyễn Văn Huỳnh]</h1>
        <hr/>
        <BrowserRouter>
            <NvhNavbar/>
            <hr/>
            <Routes>
                <Route path='/' element={<NvhHome />} />
                <Route path='/about' element = {<NvhAbout />} />
                <Route path='/contact' element = {<NvhContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<NvhProduct />} >
                  <Route path=":id" element = {<NvhProductDetail />} />
                </Route>

                <Route path='/users' element = {<NvhUsers />}> </Route>
                <Route path="/users/add" element = {<NvhUserAdd />} />
                <Route path="/users/edit/:id" element = {<NvhUserEdit />} />

                <Route path='/categories' element = {<NvhCategories/ >}> </Route>

                {/* 404 page  */}
                <Route path='*' element = {<NvhNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}