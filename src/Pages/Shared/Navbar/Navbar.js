import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


let activeStyle = {
    textDecoration: "underline",
    color: '#7c3aed'

};

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 w-full z-50 text-gray-800">
                <div className='flex justify-between px-2 md:px-12  bg-gray-500 text-white items-center'>
                    <div className='text-start text-xs md:text-base'>
                        <h1>We're here to provide 24/7 at your service</h1>
                    </div>
                    <div className='md:flex py-2 '>
                        <h1 className='md:mr-3 text-end text-xs  md:text-base'><i className="fa-solid fa-phone mr-[3px]"></i>01517828832</h1>
                        <h1 className='text-xs text-end  md:text-base'><i className="fa-regular fa-envelope mr-[3px]"></i>limitless@gmail.com</h1>
                    </div>
                </div>
                <div className="navbar bg-[#a2f3c0]">
                    <div className="flex-1 md:pl-5 mx-2">
                        <Link href="/">
                            <div className="relative top-[]">
                                <p className='font-mono font-extrabold text-base text-violet-600  md:text-2xl'><i className="fa-solid fa-earth-asia"></i> Limitless-Tourism</p>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden mx-2 lg:flex">
                        <div className="flex items-center">

                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mx-2">
                                <NavLink to="/home"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">HOME</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mx-2">
                                <NavLink to="/packages"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">PACKAGES</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mx-2">
                                <NavLink to="/events"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">EVENTS</button>
                                </NavLink>
                            </h1>
                            <h1 className="btn font-bold hover:bg-rose-100   btn-ghost text-gray-800 rounded-btn mx-2">
                                <NavLink to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                >
                                    <button className="py-3">CONTACT</button>
                                </NavLink>
                            </h1>

                            <Link className="btn font-bold hover:bg-rose-100 btn-ghost rounded-btn bg-violet-600 text-white hover:text-black mr-10" to="/contact">
                                Log in
                            </Link>


                            {/* {!user.isSignedIn &&
                                <Link passHref href="/register">
                                    <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white dark:hover:bg-slate-600 transition duration-500 mx-3">FREE TRIAL</button>
                                </Link>
                            } */}

                        </div>
                    </div>
                    {/* {user.isSignedIn &&
                        <div className="flex-none dropdown dropdown-end mx-1 sm:mx-2 my-auto lg:pr-10">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:border-purple-800">
                                <div className="rounded-full">
                                    {
                                        user.photo ? <Image src={user.photo} alt="User Profile" width="90px" height="90px" draggable="false" /> :
                                            <div className="flex-none my-auto pr-2 sm:mr-3 lg:mr-12">
                                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar hover:bg-transparent">
                                                    <div className="rounded-full">
                                                        <FaUserCircle className="text-4xl" />
                                                    </div>
                                                </label>
                                            </div>
                                    }
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 relative top-10 shadow menu menu-compact dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52">
                                <li>
                                    <Link href={`/profile/${user.email}`}>
                                        <a className=" hover:bg-rose-500 hover:text-white">
                                            Profile
                                        </a>
                                    </Link>
                                </li>
                                {
                                    thisUser !== undefined ? thisUser.role === 'admin' && <li>
                                        <Link href="/dashboard">
                                            <a className=" hover:bg-rose-500 hover:text-white">
                                                Dashboard
                                                <span className="ml-2 badge">New</span>
                                            </a>
                                        </Link>
                                    </li> : ''
                                }
                                <li>
                                    <Link href={`/my-course/${user.email}`}>
                                        <a className=" hover:bg-rose-500 hover:text-white">My Course</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vote">
                                        <a className=" hover:bg-rose-500 hover:text-white">
                                            Vote
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/canvas">
                                        <a className=" hover:bg-rose-500 hover:text-white">
                                            Canvas
                                        </a>
                                    </Link>
                                </li>
                                <li onClick={logout}>
                                    <a className=" hover:bg-rose-500 hover:text-white">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    } */}
                    <div className="flex-none lg:hidden dropdown dropdown-left">
                        <button tabIndex="0" className="m-1 btn hover:bg-gray-800 btn-square hover:text-white btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex="0" className="p-2 relative top-10 shadow menu dropdown-content bg-slate-100 dark:bg-slate-600 rounded-box w-52 mt-2">
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-2" to='/'>
                                    HOME
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/packages">
                                    PACKAGES
                                </Link>
                            </li>
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/events">
                                    EVENTS
                                </Link>
                            </li>
                            <li>
                                <Link className="btn hover:bg-slate-300 dark:hover:bg-slate-500 btn-ghost rounded-btn mx-3" to="/contact">
                                    CONTACT
                                </Link>
                            </li>

                            <li>
                                <Link className="mx-auto btn font-bold hover:bg-rose-100 btn-ghost rounded-btn bg-violet-600 text-white hover:text-black my-3" to="/contact">
                                    Log in
                                </Link>

                            </li>

                            {/* {!user.isSignedIn &&
                                <li className="text-white mt-3">
                                    <Link passHref href="/register">
                                        <button className="btn border-0 px-7 py-2 rounded-btn bg-rose-500 text-white transition duration-500 mx-3">FREE TRIAL</button>
                                    </Link>
                                </li>
                            } */}
                        </ul>
                    </div>
                </div>
            </nav>
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />
        </>

    );
};

export default Navbar;