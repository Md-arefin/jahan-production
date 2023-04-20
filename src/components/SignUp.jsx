import React from 'react';
import  { useContext, useState } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from './AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUserWithEmail } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // validation
        setError("")

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase")
            return;
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError("Please add at least one smaller case")
            return;
        }
        else if (!/(?=.*[!#$%&?@"])/.test(password)) {
            setError("Please add at least one special character")
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError("Please add at least one number")
            return;
        }
        else if (password.length < 6) {
            setError("Please add at least 6 characters")
            return;
        }

        // validation ends
        createUserWithEmail(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div>
            <div className=' m-3 px-3 rounded-[20px]'>
                <Player
                    autoplay
                    loop
                    src="https://assets8.lottiefiles.com/packages/lf20_mjlh3hcy.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold text-red-400 my-5'>Please Sign Up <br />
                <span >
                        Adri!!!</span>
                </h1>
                <form onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor='name'
                            className='text-2xl font-semibold text-red-400 mr-[220px]'
                        >Name</label>
                        <input type="text" placeholder="Type your name" name='name' className="input input-bordered  w-full max-w-xs mt-4 mb-5 " required />
                    </div>

                    <div>
                        <label htmlFor='name'
                            className='text-2xl font-semibold text-red-400 mb-2 mr-[220px]'
                        >Email</label>
                        <input type="text" placeholder="Type your email" name='email' className="input input-bordered  w-full max-w-xs mt-4" required />
                    </div>

                    <FontAwesomeIcon className="relative top-[87px] left-[145px]" icon={faEye} />

                    <div>
                        <label htmlFor='name'
                            className='text-2xl font-semibold text-red-400 mr-[220px]' >Password</label>
                        <input type="password" placeholder="Type your password" name='password' className="input input-bordered my-4 w-full max-w-xs" required />
                        <p className='text-red-400 text-xl my-10'>
                            {error}
                        </p>
                    </div>
                    <button className="btn btn-wide">Sign up</button>
                </form>
                {/* Sign up button ends */}
                <div className=' m-3 px-3 rounded-[20px]'>
                    <Player
                        autoplay
                        loop
                        src="https://assets9.lottiefiles.com/private_files/lf30_xRDQab.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                {/* google button starts here */}
                <div className='mb-10 my-5 '>
                    <img className='rounded-[50px] mx-auto px-4 w-[85%]' src="https://i.ibb.co/M6sGqDy/GButton.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;