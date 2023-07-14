import { faA, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import style from './style.module.scss';
import Image from 'next/image';

export default function ThirdSection() {
    const ref = useRef(null);

    useEffect(() => {

        // for handling card haver
        const cardVercel = document.querySelector('#cardVercel_id');;

        cardVercel.addEventListener('mousemove', e => {

            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            var wh = window.innerHeight / 2;
            var ww = window.innerWidth / 2;
            cardVercel.style.setProperty('--x', x + 'px');
            cardVercel.style.setProperty('--y', y + 'px');
            cardVercel.style.setProperty('--mouseX8', (e.clientX - ww) / 25);
            cardVercel.style.setProperty('--mouseY8', (e.clientY - wh) / 25);

        });

        cardVercel.addEventListener('mouseleave', e => {

            cardVercel.style.setProperty('--mouseX8', 0);
            cardVercel.style.setProperty('--mouseY8', 0);

        });
    }, []);


    return (
        <div className="flex min-h-screen items-center justify-center p-1 mt-14">
            <div className="container grid max-w-screen-xl gap-4 grid-rows-2">
                <div className="col-start-1 rounded-lg border border-50 border-slate-300 bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200 p-4">
                    <a href="#" className='group relative'>
                        <button
                            className="absolute px-3 py-1 text-base text-slate-600 border border-white-400 rounded bg-gradient-to-br from-slate-300 via-slate-100 to-slate-300 mb-1 top-2">INTERPRISE</button>
                        <div className='h-full w-full flex flex-col items-center justify-center'>
                            <div className='flex justify-end items-center border border-100 border-slate-300 rounded-lg w-32 h-24 '>
                                <div className='flex justify-center border border-100 border-slate-300 rounded-lg w-24 h-20 mr-1 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-50'>
                                    <div className='border border-100 border-slate-300 rounded-lg w-20 h-10 mt-1 bg-slate-50'>

                                    </div>

                                </div>
                            </div>
                            <p className="text-2xl leading-relaxed text-center text-slate-700 font-serif mt-10">
                                Monitoring and logs
                            </p>
                            <p className="text-2xl text-center text-slate-500 font-serif">
                                Deployment-based introspection.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="col-start-1 rounded-lg border border-50 border-slate-300 bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200 p-4">
                    <a href="#" className='group relative'>
                        <button
                            className="absolute px-3 py-1 text-base text-slate-600 border border-white-400 rounded bg-gradient-to-br from-slate-300 via-slate-100 to-slate-300 mb-1 top-2">BETA</button>
                        <div className='h-full w-full flex flex-col items-center justify-center pb-28'>
                            <p className="text-2xl leading-relaxed text-center text-slate-700 font-serif mt-10">
                                Review your UI
                            </p>
                            <p className="text-2xl text-center text-slate-500 font-serif">
                                Leave feedback instantly
                                <span className="block"></span>
                                with new colabration
                                <span className="block"></span>
                                features on Previewa.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="row-start-1 col-start-2 rounded-lg border border-50 border-slate-300 bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200 p-4">
                    <a href="#" className='group'>
                        <div className='h-full w-full flex flex-col items-center justify-center'>

                            <p className="text-2xl text-center text-slate-500 font-serif">
                                Dynamic social cards
                            </p>

                            <div className='w-full flex gap-4 p-4 pb-0 mb-0 justify-self-end self-end'>
                                <div className='border h-full w-1/2 border-100 rounded-xl bg-gradient-to-br from-slate-50 via-slate-200 to-slate-50'>
                                    <div className='mx-1 my-1 px-4'>
                                        <FontAwesomeIcon icon={faA} size="2x" className='w-6 text-slate-500' />
                                        <span className='text-4xl text-slate-300'>a</span>

                                        <p className='text-left text-lg text-slate-500 mb-2 mt-2 font-extralight'>next/font</p>
                                    </div>
                                </div>
                                <div className='border h-full w-1/2 border-100 rounded-xl bg-gradient-to-br from-slate-50 via-slate-200 to-slate-50'>
                                    <div className='mx-1 my-1 px-4'>
                                        <FontAwesomeIcon icon={faImage} size="2x" className='w-6 text-slate-500' />
                                        <p className='text-left text-lg text-slate-500 mb-2 mt-2 font-extralight'>next/image</p>
                                    </div>

                                </div>
                            </div>
                            <div className='border border-100 border-slate-300 rounded-lg px-4 py-2 mt-1 bg-slate-50 mt-4'>
                                Powered by Vercel Image Optimization
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-start-2 rounded-lg border border-50 border-slate-300 bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200 p-4">
                    <a href="#" className='group'>
                        <div className='h-full w-full flex flex-col items-center justify-center pt-28'>
                            <p className="text-2xl leading-relaxed text-center text-slate-800 font-serif mt-10">
                                Dynamic HTML Streaming
                            </p>
                            <p className="text-xl text-center text-slate-500 font-serif">
                                Support for HTML streaming,
                                <span className="block"></span>
                                now on Vercel
                            </p>
                        </div>
                    </a>
                </div>
                <div className="row-start-1 row-span-2 col-start-3 flex">
                    <div ref={ref} className={`duration-500 bg-slate-100 rounded shadow-slate-400 border-none cursor-pointer h-full w-full focus:outline-none outline-none relative ${style.cardVercel} ${style.card_V}`} id="cardVercel_id">
                        <span>
                            <a href="#" className='group'>
                                <div className="h-full w-full flex flex-col items-center justify-center ">
                                    <Image src='/images/nextLogo.jpg' alt='logo' width={80} height={80} className="rounded-full mb-8" />
                                    <p className="text-7xl">Next.js 13</p>
                                    <span className="text-sm my-4 text-slate-700">By Vercel</span>
                                    <p className="text-2xl leading-relaxed text-center text-slate-500 font-serif">Bring the power of full-stack
                                        <span className="block"></span>
                                        to the front-end.</p>
                                </div>

                            </a>
                        </span>

                    </div>
                </div>
            </div>
        </div >

    )
}
