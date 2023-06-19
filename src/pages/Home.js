import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import { Link } from 'react-router-dom';
import religions from '../media/home/religionbg.mp4'
import Card, { Pane } from '../elements/Card';
import vatican_2 from '../media/home/vatican_2.jpg'

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
        </div>
    );
}

export default Home