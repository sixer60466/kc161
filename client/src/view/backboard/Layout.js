import Sidebar from "../../components/backboard/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="container-fluid">
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    )
}
export default Layout;