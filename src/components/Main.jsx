import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
    return (
        <div className='lg:max-w-[1280px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;