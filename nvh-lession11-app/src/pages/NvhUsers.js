import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function NvhUsers() {
    // api
    const nvh_api = "https://68d33f16cc7017eec5465909.mockapi.io/k22cnt_TrinhVanChung_2200112233/users";

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa?")) {
            axios.delete(`${nvh_api}/${id}`)
                .then(() => {
                    setUsers(users.filter(user => user.id !== id));
                })
                .catch(error => console.error("Lỗi xóa user:", error));
        }
    };

    // useEffect; []
    useEffect(() => {
        axios
            .get(nvh_api)
            .then((response) => {
                setUsers(response.data); // Lưu dữ liệu vào state
            })
            .catch((error) => {
                console.error("Có lỗi khi gọi API:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    if (loading) return <p>Đang tải dữ liệu...</p>;

    // render data
    let usersElement = users.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.status}</td>
                <td>
                    <Link to={`/users/edit/${item.id}`} className="btn btn-success">
                        Edit
                    </Link>
                    <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Danh sách users</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th> id </th>
                        <th> FullName </th>
                        <th> UserName </th>
                        <th> Password </th>
                        <th> Status </th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersElement}
                </tbody>
            </table>
            <a href='/users/add' className='btn btn-primary'>Thêm mới</a>

        </div>
    )
}