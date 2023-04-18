import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <div className=' m-3 px-3 rounded-[20px]'>
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_dHiAy3oz6Q.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>

            <div>
                <h2 className='text-3xl text-red-400 font-semibold text-center'>About Adri's Farm House</h2>

                <div className=' m-3 px-3 rounded-[20px]'>
                    <Player
                        autoplay
                        loop
                        src="https://assets1.lottiefiles.com/packages/lf20_VOrsVO0F1G.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>

                <div className='flex justify-center items-center'>
                    <div className="w-20 rounded-full mx-auto">
                        <img className='rounded-full' src="https://i.ibb.co/5YmSWpt/1681579360755.jpg" />
                    </div>
                    <h2 className='text-2xl text-red-400 font-semibold text-center'>Adirsi Jahan (Ansari 😌)</h2>
                </div>
                <article>
                    <p className='m-2 p-2'>
                        <span>
                            Once upon a time, in a beautiful farm, there lived a lovely couple <span className='text-lg text-red-400 font-semibold'>Arefin & Adri</span>
                            . They had been married for years and still had the spark that kept their love alive. Their days were filled with laughter, hard work, and romantic moments.
                        </span>
                        <br />
                        <br />
                        <span>
                            Every morning, the husband woke up early to tend to the animals. He would milk the cows and feed the chickens while his wife prepared breakfast. She would make delicious pancakes, fresh from the farm, and they would enjoy them together, savoring the flavors and enjoying each other's company.
                        </span>
                        <br />
                        <br />
                        <span>
                            One day, as they were walking through the fields, the husband suddenly dropped to one knee. His wife's heart skipped a beat as he presented her with a beautiful bouquet of freshly-picked flowers.
                        </span>
                        <br />
                        <br />
                        <span>
                            "My dear," he said,<span className='text-lg text-red-400 font-semibold'> "I love you more than anything in the world. Will you do me the honor of becoming my wife all over again?"</span>
                        </span>
                        <br />
                        <br />
                        <span>
                            Tears welled up in her eyes as she said yes, and they embraced in a passionate kiss. But as they pulled away, they heard a loud snort coming from one of their ducks.
                        </span>
                        <br />
                        <br />
                        <span>
                            They turned to see the cat (minu) staring at them with a smirk on its face. "What?" the cat (minu) said. "You think you're the only ones who can have a romantic moment on this farm?"
                        </span>
                        <br />
                        <br />
                        <span>
                            The couple couldn't help but burst out laughing, and the cat (minu) joined in, wiggling its tail in delight. From that moment on, the cat (minu) became their constant companion, always cracking jokes and adding a little humor to their love story.
                        </span>
                        <br />
                        <br />
                        <span>
                            And so, the farm became known as the most romantic and funny farm in the land, where love and laughter filled the air and even the animals couldn't resist joining in on the fun.
                        </span>
                    </p>
                </article>
                <p className='text-center text-red-400 my-3'>- - - - - - - - - - - - - - - - - - - - </p>
                <div>
                    <div className='flex gap-10  items-center'>
                        <div>
                            <img className='w-[70px] rounded-full' src="https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/90048111_2613359855587917_4525871180283904000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEX6WXHK1C21BFP8ZDl0L4BCVZhbFA6ZYsJVmFsUDpli0eAmavd5KAawB8ilD6BmiRQfY590u1kf8eUBB9UhT5W&_nc_ohc=G_PDJR6pjzUAX9WLv-R&_nc_ht=scontent.fdac139-1.fna&oh=00_AfCMJwG9v9pdZyXDGobcFSyzPKnz4_qHM-XkgCphfYI1SQ&oe=6465BFF0" alt="" />
                        </div>
                        <h1 className='text-2xl text-red-400 font-semibold text-center'>Arefin Ansari</h1>
                        <Link to='https://www.facebook.com/muhammadarifin.24'>
                            <img className='w-[25px]' src="https://i.ibb.co/frdXFSt/vecteezy-facebook-logo-pnedgregg-facebook-icon-transparent-png-18930427-322.png" alt="" />
                        </Link>
                    </div>

                    <div className='flex gap-12  items-center my-5'>
                        <div>
                            <img className='w-[65px] rounded-full' src="https://i.ibb.co/5YmSWpt/1681579360755.jpg" alt="" />
                        </div>
                        <h1 className='text-2xl text-red-400 font-semibold text-center'>Adirsi Jahan</h1>
                        <Link to='https://www.facebook.com/profile.php?id=100091519203342'>
                            <img className='w-[25px]' src="https://i.ibb.co/6HN80ZH/vecteezy-facebook-logo-png-facebook-icon-transparentdfbgr-png-18930427-322.png" alt="" />
                        </Link>
                    </div>
                    <div className='mb-10 flex items-center justify-center gap-10 my-5'>
                        <div className='w-[50%] h-50' >
                            <img className='w-full h-60 rounded-lg' src="https://i.ibb.co/yYGKQbx/1681802025647.jpg" alt="" />
                        </div>
                        <h1 className='text-2xl text-red-400 font-semibold text-center'>Our Minu.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;