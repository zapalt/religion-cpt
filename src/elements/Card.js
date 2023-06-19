import { loremIpsum } from 'react-lorem-ipsum';

function Pane({ children, animate = false }) {
    return (
        animate ? <div class="p-10 max-w-[70em] rounded-lg bg-white/60 m-10 mt-5 mb-5 shadow-md ease-in-out-expo duration-[0.4s] hover:scale-105 hover:shadow-xl overflow-x-scroll">{children}</div>
            : <div class="p-10 max-w-[70em] rounded-lg bg-white/60 m-10 mt-5 mb-5 shadow-md overflow-x-scroll">{children}</div>
    );
}

function Card2({ title, text = loremIpsum({ p: 1, avgSentencesPerParagraph: 2 }), image }) {
    return (
        <div class="min-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
            <div class="overflow-clip h-[30rem] flex items-center justify-center">
                <img class="w-full object-cover" src={image} />
            </div>
            <div class="px-6 py-4 font-SpaceGrotesk flex-grow">
                <div class="font-bold text-xl mb-2 font-Unbounded">{title}</div>
                <p class="text-gray-700 text-base">{text}</p>
            </div>
        </div>
    );
}

function Card3({ title, text = loremIpsum({ p: 1, avgSentencesPerParagraph: 2 }), image }) {
    return (
        <div class="min-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
            <div class="overflow-clip h-[10rem] flex items-center justify-center">
                <img class="w-full object-cover" src={image} />
            </div>
            <div class="px-6 py-4 font-SpaceGrotesk flex-grow">
                <div class="font-bold text-xl mb-2 font-Unbounded">{title}</div>
                <p class="text-gray-700 text-base">{text}</p>
            </div>
        </div>
    );
}


export { Pane }
export { Card2 }
export { Card3 }

function Card({ title, text = loremIpsum({ p: 1, avgSentencesPerParagraph: 2 }), image }) {
    return (
        <div class="left-0 right-0 top-0 bottom-0">
            <div class="min-w-sm rounded-lg overflow-hidden shadow-lg">
                <img class="w-full" src={image} />
                <div class="px-6 py-4 font-SpaceGrotesk">
                    <div class="font-bold text-xl mb-2 font-Unbounded">{title}</div>
                    <p class="text-gray-700 text-base">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
