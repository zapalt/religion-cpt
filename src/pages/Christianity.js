import LoremIpsum from "react-lorem-ipsum";
import Card, { Pane, Card2 } from "../elements/Card";

// general images
import crucified from "../media/christianity/crucifixion.png"
import bible from "../media/christianity/bible.jpg"

// milestones
import baptism from "../media/christianity/milestones/baptism.jpg"
import confession from "../media/christianity/milestones/confession.jpg"
import communion from "../media/christianity/milestones/communion.jpg"
import confirmation from "../media/christianity/milestones/confirmation.jpg"
import ordination from "../media/christianity/milestones/ordination.jpg"
import matrimony from "../media/christianity/milestones/matrimony.jpg"
import thesick from "../media/christianity/milestones/thesick.jpg"
import death from "../media/christianity/milestones/death.jpg"

// symbols
import symbol1 from "../media/christianity/symbols/1.jpg"
import symbol2 from "../media/christianity/symbols/2.png"
import symbol3 from "../media/christianity/symbols/3.png"
import symbol4 from "../media/christianity/symbols/4.jpg"
import symbol5 from "../media/christianity/symbols/5.png"
import { useState } from "react";

function StatPane({ h1, h2, icon, text }) {
    return (
        <div class="w-full max-w-[20rem] p-8 rounded-lg bg-white/60 shadow-md ease-in-out-expo duration-[0.4s] hover:scale-105 hover:shadow-xl overflow-clip text-center text-c1-300">
            <h1 class="font-Unbounded font-bold text-6xl text-c1-500">{h1}</h1>
            <h2 class="font-Unbounded font-bold text-2xl">{h2}</h2>
            <div class="h-30">
                {icon}
            </div>
            <h3 class="font-SpaceGrotesk font-bold text-xl">{text}</h3>
        </div>
    );
}


function Overview() {
    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div>
                    <h1 class="text-4xl font-Unbounded font-bold pb-4">Overview</h1>
                    <div class="min-w-[20em] w-auto text-justify">
                        <p class="font-SpaceGrotesk">
                            Christianity is the <b>world’s largest monotheistic religion</b>, with about 2.3 billion adherents worldwide. Christian theology is centred on Jesus Christ, a historical figure present in other religions, widely accepted to be God as a part of the trinity in Christianity.
                            <br/><br/> Jesus Christ was crucufied at <b>Golgotha</b>, or 'place of the Skull'. His crucifixion was overseen by the Roman governor <b>Pontius Pilate</b>, who authorized his execution.
                        </p>
                    </div>
                </div>
                <div class="min-w-[20em]">
                    <Card image={crucified} text={<p>Jesus was crucified alongside two criminals, one of which he saves.</p>}>

                    </Card>
                </div>
            </div>
        </Pane>
    );
}

const stats = [
    {
        h1: '2.3',
        h2: 'BILLION',
        h3: <p>Adherents <br/> Worldwide</p>,
        src:
            <svg class="pb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
    },
    {
        h1: '248',
        h2: 'MILLION',
        h3: 'Highest Christian population: USA',
        src: <div class="p-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"> <path d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1v36.1l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-20.3-9-41.8-14.7-63.6-16.9v32.2c17.4 2.1 34.4 6.7 50.6 13.9l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 136.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 203.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 232.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 299.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 328.3v33.5c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 400v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V416 345.5 312.8 249.5 216.8 153.5 120.8 64 32C0 14.3 14.3 0 32 0zm80 96A16 16 0 1 0 80 96a16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-32 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
            </div>
    },
    {
        h1: 'FIRST',
        h2: 'Century',
        h3: <p>Began after <br/> Jesus died</p>,
        src: <div class="p-12 pb-8 pt-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"> <path d="M176 0c-26.5 0-48 21.5-48 48v80H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V256h80c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H256V48c0-26.5-21.5-48-48-48H176z"/></svg>
            </div>
    }
];

function Stats() {
    const statList = stats.map(stat =>
        <StatPane
            h1={stat.h1}
            h2={stat.h2}
            icon={stat.src}
            text={stat.h3} />
    )

    return (
        <div class="flex flex-row justify-center gap-10 mt-5 mb-5">
            {statList}
        </div>
    );
}

function History() {
    return (
        <p> Not done yet!</p>
    );
}

const symbols = {
    'Cross/Crucifix':
    {
        text: <p>The cross is universally one of the most recognizable symbols. It was used by the Roman Empire as a method for capital punishment, often publicised to serve as an example and warn the public. Christians believe Jesus died from crucifixion before being raised three days later, ultimately accomplishing the father’s will to atone for the sins of mankind, past, present and future. A <b>crucifix</b> is a commonly used depiction of Jesus crucified on a cross.</p>,
        img: symbol1
    },
    'Ichthys Symbol/Fish':
    {
        text: <p>When Jesus first met the brothers, Simon Peter and Andrew, he offered to make them <b>fishers of men</b>- they became evangelical disciples, who played a major role in the development of the faith. This concept of becoming “fishers of men” is encouraged in Christianity through <b>evangelism. </b></p>,
        img: symbol2
    },
    'PX Monogram (chi-ro)':
    {
        text: <p>This symbol features the letters 'P' and 'X', which are the first two letters in <b>'Χριστός', Christ's name in Greek</b></p>,
        img: symbol3
    },
    'Bread and Wine':
    {
        text: <p>Bread and wine were crucial aspects of the agrarian societies present throughout the bible. However, these objects gained status as important symbols after the final supper, in which Jesus commanded his disciples to consume his body (through bread) and his blood (through wine). Many denominations like the Catholic Church believe in <b>transubstantiation</b>, the concept that the bread and wine become the substance of Jesus’ body and blood during the Eucharist. However, many Protestant Churches assert this is purely symbolic.</p>,
        img: symbol4
    },
    'Alpha and Omega':
    {
        text: <p>First and last letters in the Greek alphabet, representing God’s all-encompassing omnipotence, omnipresence and omniscience.</p>,
        img: symbol5
    },
};

function Symbols() {
    let [page, setPage] = useState('Cross/Crucifix');

    const symbolSelect = Object.entries(symbols).map(([key, val], i) =>
        <a onClick={(ev) => {setPage(key); ev.preventDefault()}} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            {key}
        </a>
    )

    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div class="flex pb-8 gap-10">
                    <h1 class="text-4xl font-Unbounded font-bold">Symbols</h1>
                    <div class="hs-dropdown relative inline-flex">
                        <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-SpaceGrotesk bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            {page}
                            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
                            {symbolSelect}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Card2 title={page} text={symbols[page].text} image={symbols[page].img}>
                </Card2>
            </div>
        </Pane>
    );
}

function Backup() {

    return (
        <Pane>
            <div class="flex flex-col gap-10">
                <div>
                    <h1 class="text-4xl font-Unbounded font-bold pb-4">Scripture</h1>
                    <div class="min-w-[20em] w-auto text-justify">
                        <p class="font-SpaceGrotesk">
                            Christianity is the <b>world’s largest monotheistic religion</b>, with about 2.3 billion adherents worldwide. Christian theology is centred on Jesus Christ, a historical figure present in other religions, widely accepted to be God as a part of the trinity in Christianity.
                            <br/><br/> Jesus Christ was crucufied at <b>Golgotha</b>, or 'place of the Skull'. His crucifixion was overseen by the Roman governor <b>Pontius Pilate</b>, who authorized his execution.
                        </p>
                    </div>
                </div>
                <div class="min-w-[20em]">
                    <Card image={crucified} text={<p>Jesus was crucified alongside two criminals, one of which he saves.</p>}>

                    </Card>
                </div>
            </div>
        </Pane>
    );
}

const scripture = [
    {
        title: "Old Testament",
        text: <div class="space-y-3">
            <p>The Old Testament covers scripture before Jesus. Despite being shared with Judaism in the Tanakh, each faith has different interpretations. Mainly, Christians believe the New Testament contains the fulfilment of Old Testament messianic prophecies through Jesus, an idea rejected by Jews.</p>
            <hr class="my-6 h-0.5 border-t-0 bg-gray-700/20" /> <div class="p-1"></div>

            <Card image={bible} title="Canonical Disputes" text={
                <div class="space-y-3" >
                    <p>However, many of these books have been interpreted differently and even omitted by different sects. For example, the deuterocanon is often omitted or called the Apocrypha by protestant bodies. However, this is where some significant beliefs present in Catholicism originate from, such as purgatory, which is not considered real in other denominations.</p>
                </div>
            }>

            </Card>
        </div>
    },
    {
        title: "New Testament",
        text:
            <ul class="space-y-3">
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Gospels</span>
                <span>There are <strong>four Gospels</strong>:</span>
                <ol class="list-disc list-inside">
                    <li>Matthew</li>
                    <li>Mark</li>
                    <li>Luke</li>
                    <li>John</li>
                </ol>
                <li>All but John are known as <strong>synoptic</strong>, meaning told from the same &ldquo;eye&rdquo;. John is more interpretive in style, and lays out much of Christianity&rsquo;s foundations.</li>

                <hr class="my-12 h-0.5 border-t-0 bg-gray-700/20"/> <div class="p-1"></div>
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Acts of the Apostles</span>
                <li>Following the Gospels are the acts of the Apostles, which follow the newly established Church and the Apostles&rsquo; acts as they evangelised and built up the early Church. </li>

                <hr class="my-12 h-0.5 border-t-0 bg-gray-700/20"/> <div class="p-1"></div>
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Epistles</span>
                <li>The 21 Epistles continue to follow the early Church in the form of letters, the majority of which were written by <b>Paul</b>. This includes James, Galatians, Romans, Philippians, and Colossians to name a few.</li>

                <hr class="my-12 h-0.5 border-t-0 bg-gray-700/20"/> <div class="p-1"></div>
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Apocalypse</span>
                <li>The apocalypse is the final part of the New Testament, written by John the Apostle. It describes the end of the present world and the future to come.</li>
            </ul>
    },
]

function Scripture() {
    const scriptureList = scripture.map(script =>
    <div class="w-full pt-5">
        <h1 class="text-3xl font-Unbounded font-bold pb-4">{script.title}</h1>
        <div class="font-SpaceGrotesk pb-4">{script.text}</div>
    </div>
    )

    return (
        <Pane>
            <h1 class="text-4xl font-Unbounded font-bold pb-4">Scripture</h1>
            <p class="font-SpaceGrotesk">
            Christian sects have two main sources of divine scripture: the <b>Old Testament</b>, which is shared with Judaism, and the <b>New Testament</b>, which contains scripture compiled following Jesus’ birth.
            </p>
            <div class="flex flex-row justify-center gap-10">
                {scriptureList}
            </div>
        </Pane>
    );
}

const milestones = {
    'Baptism':
    {
        text: <p>Baptism features cleansing a recipient with water to “wash away” the stain of their original sin. The practice is carried out differently in different denominations. Some pour or sprinkle water on the recipient's head, while others fully submerge them underwater. Additionally many denominations practice infant baptism while others do not.</p>,
        img: baptism
    },
    'Reconciliation/Confession':
    {
        text: <p>
           In order to stay reconciled with the Church, believers participate in confession, a practice in which sins or struggles are periodically discussed with Church ministers. Many protestant Churches lack confession, believing reconciliation should be directly between a believer and God.
           </p>,
        img: confession
    },
    'First Communion':
    {
        text: <p>
            Communion often features the Eucharist, Mass, or the Lord’s Supper, which commemorate Jesus’ death and resurrection. It can be practised different church-to-church, even occurring at vastly different time periods. However, it is almost universally important for believers to receive their first Communion.
           </p>,
        img: communion
    },
    'Confirmation':
    {
        text: <p>
            Confirmation represents a believer confirming their place as a full participant in the Church, usually done by believers in their early-adolescence. It is believed that spiritual gifts from the Holy Spirit are bestowed upon recipients, allowing them to have a larger impact in their contributions to the Church and their own faith. Some Churches have sponsors, who help prepare individuals for confirmation. They are present on the day of the sacrament and responsible for coming forward with the recipient, not the parents. During this time, the recipient is anointed with oil and hands are laid upon them by a minister, bishop or priest.
           </p>,
        img: confirmation
    },
    'Ordination':
    {
        text: <p>
            Individuals are officially made members of the clergy through ordination. Because those called by God are filled with the Holy Spirit, some denominations do not recognize formal clergy. However, clergy-led Churches elect members after extended periods of education and training at educational institutions or seminaries using the laying on of hands and prayer, which has been practised since the book of Acts.
           </p>,
        img: ordination
    },
    'Matrimony':
    {
        text: <p>
            Matrimony/Marriage is a sacred union between husband and wife, recognized legally but also specifically by the Church. Marriage is considered a sacred vow between two individuals who promise to be faithful to one another under God’s leadership.
           </p>,
        img: matrimony
    },
    'Anointing of the Sick':
    {
        text: <p>
            The Gospels feature many stories of Jesus healing people by praying and laying his hands on them, a practice continued by his apostles, especially after Pentecost. Many Churches continue this practice, anointing the sick alongside prayer. In cases where death is imminent, the last rites can be performed in which the viaticum, a special communion is provided, and priests are enabled to give indulgences.
           </p>,
        img: thesick
    },
    'Death':
    {
        text: <p>
            Although not part of the seven sacraments, death can be considered a final ‘milestone’ one can experience. Christian funerals serve to console those close to the deceased and commend the deceased to heaven.
           </p>,
        img: death
    },
};

function Milestones() {
    let [page, setPage] = useState('Baptism');

    const milestonesSelect = Object.entries(milestones).map(([key, val], i) =>
        <a onClick={(ev) => {setPage(key); ev.preventDefault()}} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            {key}
        </a>
    )

    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div class="flex pb-8 gap-10">
                    <h1 class="text-4xl font-Unbounded font-bold">Milestones</h1>
                    <div class="hs-dropdown relative inline-flex">
                        <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-SpaceGrotesk bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            {page}
                            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
                            {milestonesSelect}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Card2 title={page} text={milestones[page].text} image={milestones[page].img}>
                </Card2>
            </div>
        </Pane>
    );
}

function Christianity() {
    return (
        <div>
            <div class="h-20"></div>
            <div class="h-96 bg-statue bg-cover bg-center flex justify-center items-center">
                <h1 class="text-center font-Unbounded font-[700] text-8xl text-c2-100 drop-shadow-lg z-50">Christianity</h1>
            </div>
            <div class="flex flex-col items-center">
                <div class="mt-5"> <Overview /> </div>
                <div class="pt-0 min-w-[50em]"> <Stats /> </div>
                <div> <Symbols /> </div>
                <div> <Scripture /> </div>
                <div> <Milestones /> </div>
            </div>
        </div>
    );
}

export default Christianity