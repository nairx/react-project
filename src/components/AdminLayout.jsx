import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function AdminLayout() {
  return (
    <div>
        <Link to="/admin">Users</Link> | 
        <Link to="/admin/products">Products</Link>
        <Outlet/>
    </div>
  )
}
