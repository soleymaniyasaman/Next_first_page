
export default function Section() {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen w-full p-10 text-gray-800 bg-slate-200 md:p-20">
            <h2 class="text-4xl font-medium">Who's Using Next.js</h2>
            <h2 class="text-2xl font-medium text-gray-500 mt-2 font-light">We’re honored some of the most talented creatives out there build with Next.js</h2>

            <div class="flex flex-wrap items-center justify-center w-full max-w-full mt-8 flex-nowrap">
                <div class="z-10 flex flex-col flex-grow mt-1 overflow-hidden bg-white rounded-lg shadow-lg  md:scale-150">
                    <img src="Hulu.png" className="max-h-56 h-full" />

                </div>
                <div class="z-20 flex flex-col flex-grow mt-10 overflow-hidden bg-white rounded-lg shadow-lg  md:scale-150">
                    <img src="Hulu.png" className="max-h-64 h-full" />

                </div>
                <div class="z-30 flex flex-col flex-grow mt-24 overflow-hidden bg-white rounded-lg shadow-lg  md:scale-150">
                    <img src="Hulu.png" className="max-h-80 h-full" />

                </div>

                <div class="z-40 flex flex-col flex-grow mt-40 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-150">
                    <img src="Hulu.png" className="max-h-96 h-full" />
                </div>

                <div class="z-30 flex flex-col flex-grow mt-24 overflow-hidden bg-white rounded-lg shadow-lg  md:scale-150">
                    <img src="Hulu.png" className="max-h-80 h-full" />
                </div>
                <div class="z-20 flex flex-col flex-grow mt-10 overflow-hidden bg-white rounded-lg shadow-lg  md:scale-150">
                    <img src="Hulu.png" className="max-h-64 h-full" />
                </div>
                <div class="z-10 flex flex-col flex-grow mt-1 overflow-hidden bg-white rounded-lg shadow-lg  md:scale-150">
                    <img src="Hulu.png" className="max-h-56 h-full" />
                </div>
            </div>
        </div>
    )
}