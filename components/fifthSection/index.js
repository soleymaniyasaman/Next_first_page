import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FifthSection() {

    const arrays = [...Array(12)]

    return (
        <div className="flex flex-col justify-center mt-44 px-10 mb-44">
            <p className="text-3xl font-bold text-center">The Web SDK</p>
            <p className="text-xl text-gray-500 font-light mt-4 text-center">Next.js has all the tools you need to make the Web. Faster.</p>
            <div className="flex min-h-screen justify-center p-1 mt-10">
                <div className="container w-full grid max-w-screen-xl gap-4 grid-rows-4 grid-cols-3">
                    {arrays.map(_ => <div key={_} className="w-full shadow-none rounded-lg border border-50 border-slate-300 bg-transparent hover:delay-200 duration-200 hover:shadow-2xl p-6">
                        <h1 className="text-lg font-medium">Image Optimization</h1>
                        <p className="text-base font-light my-4">
                            &lt;Image&gt; and Automatic Image
                            <span className="block"></span>
                            Optimization with instant builds.
                        </p>
                        <a className="text-blue-600">Documentation
                            <FontAwesomeIcon icon={faArrowRight} size="1x" className='text-blue-600 w-5 ml-2' />
                        </a>
                    </div>)}
                </div>
            </div>
            <p className="text-center mt-10 font-light"><strong className="font-bold">And more:</strong> Support for <e className="text-blue-600 cursor-pointer">environment variables</e>, <e className="text-blue-600 cursor-pointer">preview mode</e>, <e className="text-blue-600 cursor-pointer">custom head tags</e>, <e className="text-blue-600 cursor-pointer">automatic polyfills</e>, and more.</p>
        </div>
    )
}
