import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 my-4  ">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl  text-red-400">Adri's Farm House</a>
                </div>
                <div className="flex-none">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src="https://i.ibb.co/5YmSWpt/1681579360755.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;