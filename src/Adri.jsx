import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Adri = () => {

    return (
        <div>
            <div className=' m-3 px-3 rounded-[20px]'>
                <h1 className='text-center text-red-400 text-2xl font-bold'>If you want we can live like them. 😘</h1>
                <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/packages/lf20_evy35j9e.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div className="carousel w-[90%] mx-auto rounded-[20px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/5YmSWpt/1681579360755.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide11" className="btn btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle  ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/150078737_2909522149305018_4150578660471608217_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF7IozSiQPQSD555Ls4ahC9aPuJCZLPY-po-4kJks9j6rQGYg6dn-phDpRJzG9SNRNvs-L8lmhiaokKJUb1oRY2&_nc_ohc=kk-F7NARZEAAX8BNPiU&_nc_oc=AQn66FMg534iyUQ53QqaW0-ksE8ozkkrRrvwVPsIAwNFfnTpB5_7LOddts9sMaArYjE&_nc_ht=scontent.fdac139-1.fna&oh=00_AfC5LYgumSLf5Bf6K7zl_mH3w3rJ_kaVYYgTQbf6x5cONQ&oe=64651516" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/338265397_896441334951233_5259065169194481502_n.jpg?stp=dst-jpg_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeE3hLFg0A46z6Dqtzi-3WP74qlR_PrIQ7fiqVH8-shDt0Km5IgRAO3j5LfIxkN95eUa4UIj9IaFoC2-JB3ak5Py&_nc_ohc=GY-AeQHp-xUAX-qMDdH&_nc_ht=scontent.fdac139-1.fna&oh=00_AfDw7yydBpMcPlJ4QAVIEYGWuNoRl_6or3t_PcoZvPEubw&oe=64427B15" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/145750717_2902157650041468_1006434286135275073_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFTeqUqR2orlu_jiVTlVjrSIDGC7KCTRdggMYLsoJNF2JcXmJ0uzfS2RFX0Jx2wl-RiKKs1L_FAwSl-zSxQS97d&_nc_ohc=Eszj2dIJSUEAX873T5T&_nc_ht=scontent.fdac139-1.fna&oh=00_AfD2LiEroEw6IEYpzZvR4-V3FFC_eaAFPU1qtnfcVSbmkw&oe=646523C2" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/dLPnVXG/338540477-174274182092993-4631558895731243589-n.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/141455513_2891750104415556_8240704057868181294_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHMJhLr2Au-RkoyDPcSefxcbhqc2ghOcq9uGpzaCE5yrzEXVFC__fr1FUktd9k5p48JTUdWG9G-_xkF-bYM0MMT&_nc_ohc=fok5nSYkaZ4AX-vXt4H&_nc_ht=scontent.fdac139-1.fna&oh=00_AfAfZiJ6rzKMuQb1lTMwM684pMES-AaSQQ2bvQJKRcKIhw&oe=64651068" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/337524165_520221313612238_8581020626118392118_n.jpg?stp=dst-jpg_s206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFs591qc_Tp9-AFPlHKQOfxuvqEWUeWbIm6-oRZR5ZsiWvey-L_u3XaNIPpBCY9O_IEOnVZQWNO-knOrIAK5XIO&_nc_ohc=VeuqHC-BefIAX88_4z2&_nc_ht=scontent.fdac139-1.fna&oh=00_AfATAcpuXuZOZrCf8bUYpj-6iAtGMNoWl6WNNcBrNRTqZQ&oe=64421BCD" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/48418651_2262760610647845_4852650726163218432_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFHs9BKP-K3FIsoAItb0QMtazvOFMoYwSVrO84UyhjBJbOYAwfHt0xp5S7q0_0r89JPzjP-YQnZByOVwVviDD4L&_nc_ohc=72yAv97yd60AX9wuNn0&_nc_ht=scontent.fdac139-1.fna&oh=00_AfBrUwByQmNbcidkuy6QxHAoOznXlRUy0Br9Ot5rsy2IkA&oe=64650E88" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide9" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide9" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/341478401_792713185611061_2322993678212064698_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeGLIkasesEqXQqE8BMgVr2XuTmbryeaLJu5OZuvJ5osm48mUJ5DUwt8ZbOF8GfKPhivK9r9SZq6QTcihhCII4TG&_nc_ohc=I6ffEVTfzMMAX8gVnZy&_nc_ht=scontent.fdac139-1.fna&oh=00_AfAWqfi8ZdWUeEds02pCsdIRObTAgXa8csldXZ6_JZOHsg&oe=644356E8" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide8" className="btn btn-circle">❮</a>
                        <a href="#slide10" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide10" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t31.18172-8/24831091_2017894571801118_2800346032429337484_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHQcbysfXZqWpdrIpxBwxzRzUW70u6ibdTNRbvS7qJt1D5JSO3zGmHQOOFM3OjJjwFolTSOxW3yB49DOpjmyICF&_nc_ohc=_39yxevWxWMAX_MR0ms&_nc_ht=scontent.fdac139-1.fna&oh=00_AfD3oVWKijrlJt8VuEVG_XM80IRwomZclYzpfSKVVl3MZQ&oe=64652730" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide9" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide11" className="carousel-item relative w-full">
                    <img src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/339469374_1265640881042884_5226955618746885581_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeEzc7DN_frnS4fdbdBbmOG-g_v0z69mc1iD-_TPr2ZzWFYiYzXh1d4NpZWCFwDKCZWBSUJ2gv3qgKScn3EwvwvR&_nc_ohc=eMjqvz2JJvsAX_BMar9&_nc_ht=scontent.fdac139-1.fna&oh=00_AfBD612Hv5TmcyiEVdbNyQIu23xhai5S5web3WNmK3uvIg&oe=644220CC" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide10" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide12" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bdy04K0/FB-IMG-1635464472173.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide11" className="btn btn-circle">❮</a>
                        <a href="#slide13" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide13" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/HPZxhsG/received-2105893386265953.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide12" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='m-3 px-3'>
                <h2 className='m-3 px-3 text-3xl font-semibold text-red-400 text-center'>My ❤️ to my Adri</h2>
                <br />
                <p>
                    <span className='text-xl font-semibold text-red-400 text-center'>My dearest Adri,</span>
                    <br />
                    <br />
                    <span>
                        As I sit down to write this letter, my heart is overflowing with love and affection for you. You are the sunshine in my life, the reason I wake up every morning with a smile on my face and a skip in my step.
                    </span>
                    <br />
                    <br />
                    <span>
                        From the moment I saw your profile on facebook, I knew that there was something special about you. Your radiant smile, your infectious laugh, and your kind heart captured my attention and my heart. And as I got to know you better, I realized that you were everything I had ever dreamed of in a partner and more.
                    </span>
                    <br />
                    <br />
                    <span>
                        You are the most beautiful person I have ever met, both inside and out(I don't know yet). Your strength, your courage, and your unwavering loyalty inspire me every day, and I feel so blessed to have you by my side. I love the way you light up a room with your presence, and the way you make everyone feel welcome and loved.
                    </span>
                    <br />
                    <br />
                    <span>
                        <span className='text-xl font-semibold text-red-400 text-center'>Adri, </span>
                        I want you to know that you mean the world to me. I cherish every moment we spend together, and I am grateful for the love and happiness you bring into my life. I promise to love you always and to be there for you through thick and thin. I will support you, encourage you, and stand by you no matter what life throws our way.
                    </span>
                    <br />
                    <br />
                    <span>
                        I want to spend the rest of my life making you happy and creating beautiful memories together. I want to hold your hand, gaze into your eyes, and tell you how much I love you every day. You are my soulmate, my best friend, and my true love, and I am so lucky to have you in my life.
                    </span>
                    <br />
                    <br />
                    <span>Forever yours,</span>
                    <br />
                    <span className='text-xl font-semibold text-red-400 text-center'>Your Hashwala</span>
                </p>
                <br />
                <br />
                <p className='text-xl font-semibold text-red-400 text-center'>
                    My love, my heart's desire,
                    Will you be mine and never tire?
                    Together we'll build a life so sweet,
                    And make each other's hearts complete.
                </p>
            </div>
            <div className='bg-green-300 m-3 px-3 rounded-[20px]'>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_ApdyhRfyvw.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div className='flex justify-center'>
                <Link to='/about' className="btn btn-active bg-red-500 text-black mx-auto border-none hover:bg-red-400 text-lg font-bold  my-10" >About Adri's Farm House</Link>
            </div>
        </div >

    );
};

// 
export default Adri;