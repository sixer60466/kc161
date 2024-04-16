import Sidebar from "../../components/backboard/Sidebar";
import { useState, useEffect } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

function Layout() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/user/validateToken', { withCredentials: true })
            .then(() => setIsAuthenticated(true))
            .catch(() => setIsAuthenticated(false));
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid">
            <Sidebar></Sidebar>
            {isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />}
            {/* <Outlet></Outlet> */}
        </div>
    )
}
export default Layout;