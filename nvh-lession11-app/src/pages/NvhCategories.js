import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function NvhCategories() {
    const nvh_api ="http://5191a61e-fc8a-4fbf-b780-a62401fe0a54.mockapi.io/Categories/"
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios
            .get(nvh_api)
            .then((response) => {
                setCategories(response.data); // Lưu dữ liệu vào state
            })
        .catch((error) => {
            console.error("Có lỗi khi gọi API:", error);
        })
    },[])
  return (
    <div>
      Danh sách loại sản phẩm
      <hr/>
      <ul>
        {
            categories.map((item,index)=>{
                return <li>{item.title}</li>
            })
        }
      </ul>
    </div>
  )
}