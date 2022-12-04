import { faArrowRight, faCaretUp, faExclamationTriangle, faTriangleCircleSquare, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FifthSection from './fifthSection'
import FirstSection from './firstSection'
import ForthSection from './forthSection'
import LastSection from './lastSection'
import Marquee from './marquee'
import SecondMarquee from './marquee/secondMarquee'
import MiddleSections from './middleSections'
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
            <MiddleSections />
            <div className="flex flex-col filter drop-shadow-md h-full justify-center mx-auto bg-white">
                <ForthSection />
                <FifthSection />
            </div>
            <Marquee />
            <SecondMarquee />
            <div className='relative -mt-9 mb-2'>
                <div className='max-w-md h-20 bg-white m-auto shadow rounded-md p-4 flex justify-between'>
                    <p className='text-5xl font-bold ml-4'>hulu</p>
                    <button className="mr-4 px-10 py-1 shadow-md shadow-blue-200 text-base text-white border border-blue-400 rounded bg-blue-500 hover:text-blue-400 hover:bg-white hover:border hover:border-blue-400">
                        Read Case Study
                    </button>
                </div>
            </div>
            <Section />
            <LastSection />
        </div>
    )
}
