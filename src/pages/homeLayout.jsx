import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const HomeLayout = () => {
    const navigation = useNavigation()

    return (
        <>
            <Navbar />
            <section className="page">
            {
             navigation.state ==='loading'?
             <div className="loading"/>
             :
              <Outlet />
            }
            </section>
        </>
    )
}