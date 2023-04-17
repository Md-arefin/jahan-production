import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Login = () => {
    return (
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
            <div className='text-center'>
                <h1 className='text-4xl font-semibold text-red-400 my-5'>Please Sign Up</h1>
                <form >
                    <input type="text" placeholder="Type your email" name='email' className="input input-bordered  w-full max-w-xs" />
                    <input type="password" placeholder="Type your password" name='email' className="input input-bordered my-4 w-full max-w-xs" />
                    <button className="btn btn-wide">Sign up</button>
                </form>
                <div className='mb-10 my-5 '>
                    <img className='rounded-[50px] mx-auto px-4 w-[85%]' src="https://i.ibb.co/M6sGqDy/GButton.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;