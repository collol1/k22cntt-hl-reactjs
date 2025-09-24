import React, { useState } from 'react'
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NvhUserAdd() {
    const navigate = useNavigate();
    const nvh_api = "https://32792324-c4b3-40cb-966a-9932c20eb86e.mockapi.io/users";
     const [form, setForm] = useState({
        fullname: "",
        username: "",
        password: "",
        status: "",
    });

    const handleChange = (e)=>{
         setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post(nvh_api, form)
        .then(() => {
            alert("Thêm user thành công!");
            navigate("/users");
        })
        .catch(err => console.error("Lỗi thêm user:", err)
        );
    }
    
  return (
    <div>
        <h2>Thêm mới user</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Fullname:
                <input
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                />
            </div>
            <div>
                UserName:
                <input
                name="username"
                value={form.username}
                onChange={handleChange}
                />
            </div>
            <div>
                Password:
                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                />
            </div>
            <div>
                Status:
                <input
                name="status"
                value={form.status}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Thêm User</button>
            </form>
    </div>
  )
}