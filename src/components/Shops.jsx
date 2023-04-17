import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Shop from './Shop';

const Shops = () => {
    const ducks = useLoaderData();
    // console.log(ducks)
    return (
        <div>
            <div>
                {
                    ducks.map(duck =>
                        <Shop
                            key={duck.id}
                            duck={duck}
                        ></Shop>)
                }

                <div className='flex justify-center'>
                    <Link to='/adri' className="btn btn-active bg-red-500 text-black mx-auto border-none hover:bg-red-200 text-lg font-bold mb-10" >Only for Adri</Link>
                </div>
            </div>
        </div>
    );
};

export default Shops;