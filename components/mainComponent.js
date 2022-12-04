import { faArrowRight, faCaretUp, faExclamationTriangle, faTriangleCircleSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FirstSection from './firstSection'
import Marquee from './marquee'
import SecondMarquee from './marquee/secondMarquee'
import SecondSection from './secondSection'
import Section from './section'
import style from './style.module.scss'
import ThirdSection from './thirdSection'

export default function MainComponent() {
    //style.rainbow is for border animation in line 20

    return (
        <div>
            <div className="flex flex-col filter drop-shadow-md w-11/12 h-full justify-center mx-auto">
                <div className="relative mt-80">
                    <p className="text-8xl font-bold mb-10 text-center">Dynamic without limits</p>
                    <p className="mx-auto text-center font-mono text-lg text-slate-500">Every announcement from the 2022 edition of <strong className="text-slate-900">Next.js Conf.</strong></p>
                    <div className="flex justify-center my-10">
                        <button className="rounded-full mx-1 px-6 py-3 text-base text-white border border-black bg-black">
                            <FontAwesomeIcon icon={faCaretUp} size="2x" color='white' className='w-5 -mb-2 mr-1' />
                            Start Deploying
                        </button>
                        <button className={`rounded-full mx-1 px-4 py-1 text-base text-black border bg-white ${style.rainbow}`}>
                            Replay the Event
                            <FontAwesomeIcon icon={faArrowRight} size="1x" color='black' className='w-5 ml-2' />
                        </button>
                    </div>
                </div>
                <FirstSection />
                <br />
                <SecondSection />
                <br />
                <ThirdSection />
                <br />
            </div>
            <Marquee />
            <SecondMarquee />
            <Section />
        </div>
    )
}
