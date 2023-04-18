import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faDrumstickBite, faEgg, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-5'>
            <div className=' m-3 px-3 rounded-[20px]'>
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_1t8na1gy.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <h2 className='text-2xl text-red-400 font-semibold text-center my-8'>Welcome to Adri's Farm House</h2>
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
                    why should you buy my duck?</h2>

                <p className=''>
                    <span className='text-xl text-red-400'>Tomar Hashwalar theke jodi tumi hash na neo taile ke nibo!!! </span>
                    Duck meat is a delectable and nutritious protein that is becoming increasingly popular in the culinary world. Not only is it rich in protein, iron, and vitamins, but it's also lower in fat than other meats. Duck meat is a great choice for those looking to maintain a healthy and balanced diet while enjoying a delicious and flavorful meal. Its versatility in cooking methods allows for a wide range of dishes, from roasted duck breast to confit legs and duck cassoulet. Furthermore, duck fat and duck eggs are also sought after in the culinary world for their unique properties. So, if you're looking for a tasty and healthy addition to your meals, give duck a try! <br />
                    <span className='text-lg text-red-400'>Ei hashwalar shob hash amr pagli Adri'r jonno.</span>
                </p>
            </div>
            <div>
                <div className=' m-3 px-3 rounded-[20px]'>
                    <Player
                        autoplay
                        loop
                        src="https://assets2.lottiefiles.com/datafiles/d2r7Sp2fKIkHuDb/data.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                <h1 className='text-3xl text-red-400 text-center my-2'>Hasher Categories</h1>

                <div>

                    <div className='bg-red-300 rounded  text-black p-2 my-3'>
                        <div className='flex gap-5 justify-center items-center my-1'>
                            <div className='text-center'>
                                <FontAwesomeIcon icon={faBowlFood} style={{ color: "#e32626", }} />
                            </div>
                            <h3 className='text-xl font-bold text-center'>1. Whole Duck</h3>
                        </div>
                        <p>
                            This category includes whole ducks that are perfect for roasting, grilling, or smoking. These can be purchased fresh or frozen and come in different sizes to accommodate various cooking needs.
                        </p>
                    </div>
                    <div className='bg-red-300 rounded  text-black p-2 my-3'>

                        <div className='flex gap-5 justify-center items-center my-1'>
                            <div className='text-center'>
                                <FontAwesomeIcon icon={faUtensils} style={{ color: "#ea5757", }} />
                            </div>
                            <h3 className='text-xl font-bold text-center'>2. Duck Cuts</h3>
                        </div>
                        <p>
                            This category features a range of duck cuts, such as breast, legs, and wings, which can be cooked in various ways. Duck breast, in particular, is a popular choice due to its tender texture and rich flavor.
                        </p>
                    </div>
                    <div className='bg-red-300 rounded  text-black p-2 my-3'>

                        <div className='flex gap-5 justify-center items-center my-1'>
                            <div className='text-center'>
                                <FontAwesomeIcon icon={faDrumstickBite} style={{ color: "#e01010", }} />
                            </div>
                            <h3 className='text-xl font-bold text-center'>3. Duck Products</h3>
                        </div>
                        <p>
                            This category includes a variety of duck products such as foie gras, confit, and sausages. These products are ideal for those looking to experiment with different flavors and textures in their cooking.
                        </p>
                    </div>
                    <div className='bg-red-300 rounded  text-black p-2 my-3'>

                        <div className='flex gap-5 justify-center items-center my-1'>
                            <div className='text-center'>
                                <FontAwesomeIcon icon={faEgg} style={{ color: "#ff0505", }} />
                            </div>
                            <h3 className='text-xl font-bold text-center'>4. Duck Eggs</h3>
                        </div>
                        <p>
                            Duck eggs are larger than chicken eggs and have a richer taste. This category includes duck eggs that can be used in various recipes, such as omelets, quiches, and cakes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='/shops' className="btn btn-active bg-red-500 text-black mx-auto border-none hover:bg-red-200" >Buy Hash from your HashWala</Link>
            </div>
        </div>
    );
};

export default Home;