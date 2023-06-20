import { Link } from 'react-router-dom';
import religions from '../media/home/religionbg.mp4'
import Quiz from "../Quiz"
import wc from '../WC.pdf'
import { Pane } from '../elements/Card';
import Card from '../elements/Card';
import v from "../media/home/vatican_2.jpg"

function Selector({ text }) {
    return (
        <Link to={'/' + text} className="h1" class="hover:-translate-x-5 ease-in-out-expo duration-[0.4s] hover:text-c0-300">{text}</Link>
    );
}

function Home() {
    return (
        <div class="overflow-y-scroll h-screen">
            <div class="flex flex-col items-center">
                <div class="w-full mt-20 h-[35em] overflow-hidden self-center">
                    <div class="aspect-w-16 aspect-h-9 min-h-full min-w-full">
                        <div class="w-full flex items-center justify-center bg-slate-950/80 row-span-1 col-span-1">
                            <video autoplay="true" loop id="religions" class="w-screen">
                                <source src={religions} type="video/mp4" />
                            </video>
                        </div>
                        <div class="flex justify-center h-[35em] items-center bg-stone-950/80">
                            <h1 class="text-center font-Unbounded font-[700] text-8xl 
                            bg-clip-text text-transparent bg-gradient-to-t from-c0-100 to-c1-100 drop-shadow-2xl">WORLD <br /> RELIGIONS <br /> CPT</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Pane>
                <h1 class="font-Unbounded font-bold text-2xl">What is Nostra Aetate?</h1>
                <div class="pt-4"/>
                <div>
                    <Card
                        text ="After the second world war, during an era of rapid societal change, Vatican II was held from 1962 to 1965 to address the Catholic Church’s place in the now-modern world. It ended with the release of 16 major documents, one being the Nostra Aetate, a declaration. Nostra Aetate defined how the Catholic Church would relate to non-Christian faiths. It is divided into five chapters, three of which specifically address Eastern Religions (Hinduism and Buddhism), Islam and Judaism respectively. It recognizes the importance of promoting unity and peace between faiths while addressing past conflicts and calling for constructive inter-religious dialogue."
                        image={v}
                        >
                    </Card>
                    <p class="font-SpaceGrotesk pt-5">
                        Inter-religious dialogue is an important aspect in strengthening the faith of individuals no matter what faith. Despite being Catholic in origin, Nostra Aetate calls for unity and cooperation between all religions. Thus, no matter what faith one may identify with, it is applicable to them!
                    </p>
                </div>
                <p>
                </p>
            </Pane>
            <Quiz />
            <div class="p-10 pt-0 gap-10 flex flex-row">
                <div>
                    <p>
                    Images sourced from:
                    </p>
                    <ul class="list-disc list-inside">
                        <li>
                            https://www.pexels.com
                        </li>
                        <li>
                            https://commons.wikimedia.org
                        </li>
                        <li>
                            https://unsplash.com/
                        </li>
                    </ul>
                </div>
                <div class="grow">
                    <button type="button" class="w-full hs-collapse-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" id="hs-basic-collapse" data-hs-collapse="#hs-basic-collapse-heading">
                        Works Cited
                        <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div id="hs-basic-collapse-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse">
                        <div class="mt-5">
                            <object class="" width="100%" height="500" data={wc} type="application/pdf"></object>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home