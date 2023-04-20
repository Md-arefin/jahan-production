import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logout } = useContext(AuthContext)
    console.log(user);

    const handleLogout = () => {

    }

    return (

        <div className="navbar bg-base-100 my-4  ">
            <div className="flex-none">
                <button onClick={() => setIsMenuOpen(true)} className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl  text-red-400">Adri's Farm House</Link>
            </div>
            <div className="flex-none">

                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src="https://i.ibb.co/5YmSWpt/1681579360755.jpg" />
                    </div>

                    {
                        user && <span >
                            <h1 className="btn btn-ghost normal-case text-sm  text-red-400">{user.displayName}</h1>

                            <button onClick={handleLogout}>
                                Sign out
                            </button>
                        </span>
                    }
                </div>
            </div>
            {/* Mobile Navbar Section */}
            <div className='lg:hidden'>
                {/* Dropdown Open Button */}
                {/* <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                   
                </button> */}
                {
                    isMenuOpen && (
                        <div className='absolute top-0 left-4 w-[90%] z-10'>
                            <div className='p-5 bg-gray-500 border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}
                                            <span className='ml-2 text-xl font-bold tracking-wide text-red-400 uppercase'>
                                                Adri's Farm House
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}

                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <FontAwesomeIcon className="" icon={faXmark} />
                                        </button>
                                    </div>

                                    {/* Dropdown menu close button */}
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/shops'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Shops
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/adri'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Adri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/about'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
            </div>
        </div>

    );
};

export default Header;