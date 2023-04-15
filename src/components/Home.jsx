import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className='p-5'>
            <div className=' md:flex gap-10'>
                <div className='md:w-[50%]'>
                    <h1 className='text-3xl '>Quack Your Way to Deliciousness The Ultimate Destination for <br /> <span className='text-5xl text-red-400 font-bold '>Premium Duck Products</span></h1>
                </div>

                <div className='md:w-[50%] my-4'>
                    <img className='rounded-xl' src="https://www.gannett-cdn.com/-mm-/95372da5ffbbb2d8b20514636498ef2da55f54cb/c=0-247-4854-2989/local/-/media/2014/12/22/Phoenix/Phoenix/635548650297180337-Ducks.jpg" alt="" />
                </div>
            </div>
            <div>
                <h2 className='font-bold'>
                    <span className='text-2xl text-red-400 font-bold'>Ms. Adri (Pagli) </span>
                    why should you buy our duck?</h2>

                <p className=''>
                    <span className='text-xl text-red-400'>Tomar Hashwalar theke jodi tumi hash na neo taile ke nibo!!! </span>
                    Duck meat is a delectable and nutritious protein that is becoming increasingly popular in the culinary world. Not only is it rich in protein, iron, and vitamins, but it's also lower in fat than other meats. Duck meat is a great choice for those looking to maintain a healthy and balanced diet while enjoying a delicious and flavorful meal. Its versatility in cooking methods allows for a wide range of dishes, from roasted duck breast to confit legs and duck cassoulet. Furthermore, duck fat and duck eggs are also sought after in the culinary world for their unique properties. So, if you're looking for a tasty and healthy addition to your meals, give duck a try! <br />
                    <span className='text-lg text-red-400'>Ei hashwalar shob hash amr pagli Adri'r jonno.</span>
                </p>
            </div>
            <div>
                <h1  className='text-2xl text-red-400 text-center my-2'>Hasher Categories</h1>
                <div>
                    <div>
                    <FontAwesomeIcon icon={faBowlFood}style={{color: "#e32626",}} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;