import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, logOut } = useContext(AuthContext)
    let email = user?.email;
    const profile = () => {
        navigate('/profile')
    }

    const signOut = () => {
        logOut()
    }

    const loc = location.pathname;

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Add Product</NavLink></li>
        <li><NavLink to={`/cart/${email}`}>My Cart</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>


    return (
        <div>
            <div className="w-[75%] mx-auto navbar bg-base-100 py-5">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-28" src="https://i.ibb.co/0hyc2Nn/logo-no-background.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="font-semibold space-x-12 text-white text-xl  menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <button className="ml-8 mr-4 text-[28px]">
                        <FiSun />
                    </button>

                    {
                        user ? <>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label tabIndex={0} className="m-1">
                                    <div tabIndex={0} className="avatar cursor-pointer m-1">
                                        <div className="my-auto w-[30px] h-[29px] md:w-[35px] md:h-[34px] rounded-full ring ring-white ring-offset-0">
                                            <img src={
                                                user.photoURL ? user.photoURL :
                                                    "https://i.ibb.co/7j59Hhq/avatar.png"} />
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-[10px] dropdown-content z-[1] px-5 py-5 bg-base-100 rounded-box w-52 rounded-b-xl">
                                    <li>
                                        <h2 className="font-semibold text-white">{user.displayName ? user.displayName : "Anonymous"}</h2>
                                        <h2 className="text-[12px] text-semibold mb-3">{user.email}</h2>
                                    </li>
                                    <li>
                                        <li>
                                            <button onClick={profile} className="w-full text-zinc-300 bg-slate-700 hover:text-gray-900 hover:bg-white rounded-md font-bold text-[13px] pt-[2px] pb-[4px] mb-2">Profile</button>
                                            <button onClick={signOut} className="w-full text-zinc-300 bg-slate-700 hover:text-gray-900 hover:bg-white rounded-md font-bold text-[13px] pt-[2px] pb-[4px]">logout</button>
                                        </li>
                                    </li>
                                </ul>
                            </div>
                        </> :
                            <>
                                <div className="w-[110px]">
                                    {
                                        (loc === "/login") ?
                                            <NavLink to="/register" className="btn btn-ghost text-white text-xl">Register</NavLink>
                                            : <NavLink to="/login" className="btn btn-ghost text-white text-xl">Login</NavLink>
                                    }
                                </div>
                            </>

                    }


                </div>
            </div>
        </div>
    );
};

export default Header;