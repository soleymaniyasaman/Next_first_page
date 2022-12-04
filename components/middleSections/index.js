import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../style.module.scss'

export default function MiddleSections() {
    return (
        <div className='flex border-1 px-6 py-10 bg-gray-100 justify-between '>
            <div>
                <p className='text-lg text-gray-500 font-medium leading-relaxed'>Huge new features and major leaps forward for developer experience</p>
                <p className='text-base text-gray-500 font-light leading-relaxed'>Read the Next.js Conf announcements blog post or browse the changelog for all the latest.</p>
            </div>
            <button className={`rounded-full mx-1 px-4 py-1 text-base text-black border bg-white ${style.rainbow}`}>
                Replay the Event
                <FontAwesomeIcon icon={faArrowRight} size="1x" color='black' className='w-5 ml-2' />
            </button>

        </div>
    )
}
