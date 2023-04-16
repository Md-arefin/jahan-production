import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = ({ duck }) => {
    // console.log(duck)

    const { description, food, image, location, name, price } = duck;

    const handleToast = () =>{
  toast("quack quack quack!!! ");
         console.log("notify")
    }

    return (
        <div className='bg-red-400 m-5 p-4 rounded-lg text-black '>
            <div className='flex justify-center mb-3'>
                <img className='rounded-lg w-[50%] h-[30%]' src={image} alt="" />
            </div>

            <h1 className='my-1 text-2xl font-bold'>
                <span className='text-xl'>Name: </span>{name}.
            </h1>
            <p className='my-1'>
                <span className='font-bold'>
                    Description:
                </span>
                {description}
            </p>
            <div>
                <span className='text-xl font-bold'>Food: </span>
                {
                    food.map(fd => <li
                    >{fd}</li>)
                }
            </div>
            <p className='my-1'>
                <span className='font-bold'>Location: </span>
                {location}
            </p>

            <p className='my-1 text-lg'>
                <span className='font-bold'>Price: $</span>{price}.
            </p>
            <div  className='bg-red-600 rounded-lg px-5 py-2 flex justify-between items-center text-lg font-bold my-1 relative bottom-auto'>
                <button onClick={handleToast}>Buy Your duck</button>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Shop;