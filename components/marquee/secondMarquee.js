export default function SecondMarquee() {
    return (
        <div class="relative flex overflow-x-hidden">
            <div class="py-12 animate-marquee3 whitespace-nowrap">
                <span class="text-4xl mx-4">Marquee Item 1</span>
                <span class="text-4xl mx-4">Marquee Item 2</span>
                <span class="text-4xl mx-4">Marquee Item 3</span>
                <span class="text-4xl mx-4">Marquee Item 4</span>
                <span class="text-4xl mx-4">Marquee Item 5</span>
            </div>

            <div class="absolute top-0 py-12 animate-marquee4 whitespace-nowrap">
                <span class="text-4xl mx-4">Marquee Item 1</span>
                <span class="text-4xl mx-4">Marquee Item 2</span>
                <span class="text-4xl mx-4">Marquee Item 3</span>
                <span class="text-4xl mx-4">Marquee Item 4</span>
                <span class="text-4xl mx-4">Marquee Item 5</span>
            </div>
        </div>
    )
}
