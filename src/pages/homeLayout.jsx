import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <section className="page">
                 <Outlet />
            </section>
        </>
    )
}