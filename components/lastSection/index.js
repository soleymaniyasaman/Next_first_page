import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LastSection() {
    return (
        <div className="mt-20 flex bg-transparent w-full px-32 mb-32">
            <div>
                <p className="text-3xl font-extrabold leading-relaxed">
                    Next.js is getting better every day —
                    <span className="block"></span>
                    don’t miss out on all the action.
                </p>
                <p className="text-lg font-light">Join the Next.js newsletter and stay updated on new releases and
                    <span className="block"></span>
                    features, guides, and case studies.</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
                <input className="border-slate-200 rounded-lg h-10 placeholder-slate-400 w-full px-10 contrast-more:placeholder-slate-500" placeholder="you@domain.com">
                </input>
                <button className="h-10 bg-slate-900 w-full rounded-lg mt-3 text-white">Subscribe</button>
            </div>

        </div>
    )
}
