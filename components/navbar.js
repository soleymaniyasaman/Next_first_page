import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>

}
function MobileNav({ open, setOpen }) {
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
        <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <a className="text-xl font-semibold" href="#">LOGO</a>
        </div>
        <div className="flex flex-col ml-4">
            <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                About
            </a>
            <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                Contact
            </a>
        </div>
    </div>

}
function TopNavbar() {
    return (
        <div className="flex drop-shadow-md bg-black px-4 py-4 h-12 items-center w-full">
            <div className="flex w-3/4 items-center mx-auto">
                <div className="w-3/12 flex">
                    <h1 className="text-white ">
                        Vercel
                    </h1>

                </div>
                <div className="w-9/12 flex justify-end">
                    <h1 className="text-white">
                        Deploy Next.js on Vercel</h1>

                </div>

            </div>
        </div>

    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("hsla(0,0%,100%,.8)") : setnavColor("transparent");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav className="flex flex-col sticky w-full z-50 items-center fixed top-0 left-0 right-0">
            <MobileNav open={open} setOpen={setOpen} />
            <TopNavbar />
            <div className='flex filter drop-shadow-md px-4 py-4 h-20 items-center w-full transition-all' style={{ backgroundColor: navColor }}>
                <div className='flex w-3/4 items-center mx-auto'>
                    <div className="w-3/12 flex items-center">
                        <a className="text-2xl font-semibold" href="#">LOGO</a>
                    </div>
                    {[
                        ['Showcase', '/Showcase'],
                        ['Docs', '/Docs'],
                        ['Blog', '/Blog'],
                        ['Analytics', '/Analytics'],
                        ['Templates', '/Templates'],
                        ['Interprise', '/Interprise'],
                    ].map(([title, url]) => (
                        <a href={url} key={title} className="rounded-lg px-3 py-2 text-slate-500 text-sm hover:text-slate-900">{title}</a>
                    ))}
                    <div className="w-9/12 flex justify-end items-center">

                        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                            setOpen(!open)
                        }}>
                            {/* hamburger button */}
                            <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                            <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                            <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                        </div>

                        <div className="hidden flex md:flex">

                            <button className="px-4 py-1 text-base text-slate-500 border border-white-400 rounded bg-white hover:border hover:border-slate-800">
                                Feedback
                            </button>
                            <button className="mx-1 px-4 py-1 text-base text-white border border-blue-400 rounded bg-blue-500 hover:text-blue-400 hover:bg-white hover:border hover:border-blue-400">
                                Learn
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faGithub} size="2x" color='grey' className='w-6' />
                            </button>

                        </div>
                    </div>
                </div >
            </div>
        </nav >
    )
}