export default function ForthSection() {
    return (
        <div className=" justify-center items-center mt-44">
            <h1 className="flex flex-col text-8xl font-black text-center ">
                The React Framework
                <span className="block"></span>
                for Production
            </h1>
            <p className="text-xl font-light text-gray-500 text-center mt-6 leading-relaxed">Next.js gives you the best developer experience with all the features you need for production: hybrid static &
                <span className="block"></span>
                server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
            </p>
            <div className="flex justify-center mt-16">
                <button className="mx-4 px-12 py-2 text-lg font-light text-white border border-blue-400 rounded bg-blue-500 hover:text-blue-400 hover:bg-white hover:border hover:border-blue-400">
                    Start Learning
                </button>
                <button className="px-12 py-2 text-base text-slate-500 border border-white-400 rounded bg-white hover:border hover:border-slate-800">
                    Documentation
                </button>
            </div>
            <p className="text-center mt-8 text-gray-500">
                License: MIT
                <a className="text-blue-600 mx-4">GitHub</a>
            </p>
        </div>
    )
}
