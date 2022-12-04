import { faA, faCaretUp, faFileCode, faImage, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';

export default function SecondSection() {
    const ref = useRef(null);

    useEffect(() => {

        // for handling card haver
        const cardTurbo = document.querySelector('#cardTurbo_id');;
        console.log(cardTurbo);

        cardTurbo.addEventListener('mousemove', e => {

            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            var wh = window.innerHeight / 2;
            var ww = window.innerWidth / 2;
            cardTurbo.style.setProperty('--x', x + 'px');
            cardTurbo.style.setProperty('--y', y + 'px');
            cardTurbo.style.setProperty('--mouseX8', (e.clientX - ww) / 25);
            cardTurbo.style.setProperty('--mouseY8', (e.clientY - wh) / 25);

        });

        cardTurbo.addEventListener('mouseleave', e => {

            cardTurbo.style.setProperty('--mouseX8', 0);
            cardTurbo.style.setProperty('--mouseY8', 0);

        });
    }, []);


    return (
        <div className="flex min-h-screen items-center justify-center p-1 mt-14">
            <div className="container grid max-w-screen-xl gap-4 lg:grid-cols-3 grid-rows-cardLayout">
                <div className="row-start-1 row-span-1 col-start-1 rounded-md border-none bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200 p-4">
                    <a href="#" className='group'>
                        <div className='h-full w-full flex flex-col items-center justify-center'>
                            <div className='mb-3'>
                                <FontAwesomeIcon icon={faFileCode} size="2x" className='w-6 text-slate-500 mr-2' />
                                <FontAwesomeIcon icon={faFileCode} size="2x" className='w-6 text-slate-500 mr-2' />
                                <FontAwesomeIcon icon={faFileCode} size="2x" className='w-6 text-slate-500' />
                            </div>

                            <p className="text-2xl text-center text-slate-500 font-serif">
                                <strong>Ecosystem Friendly</strong>
                            </p>
                            <p className="text-xl text-center text-slate-500 font-serif">
                                Out-of-the-box support
                                <span className="block"></span>
                                for TypeScript, JSX, CSS
                                <span className="block"></span>
                                and more.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="row-start-2 row-span-2 col-start-1 rounded-md border-none bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200">
                    <a href="#" className='group'>
                        <div className='h-full w-full flex flex-col items-center justify-center'>
                            <p className="text-7xl font-semibold">4X</p>

                            <p className="text-2xl text-center text-slate-800 font-serif">
                                faster cold starts
                            </p>
                            <p className="text-2xl text-center text-slate-500 font-thin font-serif">
                                than Webpack
                            </p>
                        </div>
                    </a>
                </div>
                <div className="row-span-3 col-start-2 flex">
                    <div ref={ref} className={`bg-gradient-to-b from-fuchsia-100 to-slate-100 duration-500 rounded shadow-slate-400 border-none cursor-pointer h-full w-full focus:outline-none outline-none relative ${style.cardTurbo} ${style.card_T}`} id="cardTurbo_id">
                        <span>
                            <a href="#" className='group'>
                                <div className="h-full w-full flex flex-col items-center justify-center ">
                                    <img src='nextLogo.jpg' alt='logo' width={80} height={80} className="rounded-full mb-8" />
                                    <p className="text-7xl">Turbopack</p>
                                    <p className="text-2xl leading-relaxed text-center text-slate-500 font-serif">
                                        Introducing the successor to
                                        <span className="block"></span>
                                        Webpack, written in Rust.</p>
                                    <button className="rounded-full mx-1 mt-4 justify-self-end px-5 py-2 text-base text-white border border-slate-600 bg-slate-600">
                                        Try in Next.js 13
                                        <FontAwesomeIcon icon={faShareFromSquare} size="2x" color='white' className='w-4 -mb-1 ml-2' />
                                    </button>
                                </div>

                            </a>
                        </span>

                    </div>
                </div>
                <div className="row-start-1 row-span-2 col-start-3 rounded-md border-none bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200">
                    <a href="#" className='group relative'>
                        <div className='h-full w-full flex flex-col items-center justify-center py-28'>
                            <p className="text-7xl font-semibold">700X</p>

                            <p className="text-2xl text-center text-slate-800 font-serif">
                                faster updates
                            </p>
                            <p className="text-xl text-center text-slate-500 font-thin font-serif">
                                than Webpack
                            </p>
                        </div>
                    </a>
                </div>
                <div className="row-start-3 row-span-1 col-start-3 rounded-md border-none bg-slate-100 hover:delay-200 duration-500 hover:bg-slate-200">
                    <a href="#" className='group'>
                        <div className='h-full w-full flex flex-col items-center justify-center'>
                            <p className="text-2xl text-center text-slate-800 font-serif">
                                Incremental by design
                            </p>
                            <p className="text-xl text-center text-slate-500 font-thin font-serif">
                                Only build what has changed, both locally and in the cloud.
                            </p>
                        </div>
                    </a>
                </div>


            </div>
        </div >

    )
}
