export default function SecondMarquee() {
    return (
        <div className="relative flex overflow-x-hidden bg-white pb-10">
            <div className="py-12 animate-marquee3 whitespace-nowrap">
                <span className="text-4xl mx-4">Marquee Item 1</span>
                <span className="text-4xl mx-4">Marquee Item 2</span>
                <span className="text-4xl mx-4">Marquee Item 3</span>
                <span className="text-4xl mx-4">Marquee Item 4</span>
                <span className="text-4xl mx-4">Marquee Item 5</span>
            </div>

            <div className="absolute top-0 py-12 animate-marquee4 whitespace-nowrap">
                <span className="text-4xl mx-4">Marquee Item 1</span>
                <span className="text-4xl mx-4">Marquee Item 2</span>
                <span className="text-4xl mx-4">Marquee Item 3</span>
                <span className="text-4xl mx-4">Marquee Item 4</span>
                <span className="text-4xl mx-4">Marquee Item 5</span>
            </div>
        </div>
    )
}
