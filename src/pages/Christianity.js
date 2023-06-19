import LoremIpsum from "react-lorem-ipsum";
import Card, { Pane, Card2, Card3 } from "../elements/Card";

// general images
import crucified from "../media/christianity/crucifixion.png"
import bible from "../media/christianity/bible.jpg"

// beliefs
import nicene from "../media/christianity/beliefs/creed.jpg"
import creation from "../media/christianity/beliefs/creation.jpg"
import god from "../media/christianity/beliefs/god.jpg"
import trinity from "../media/christianity/beliefs/trinity.jpeg"
import salvation from "../media/christianity/beliefs/eternal.jpg"
import lastJudgement from "../media/christianity/beliefs/lastjudgement.jpg"

// groups
import catholic from "../media/christianity/sects/catholic.jpg"
import orthodox from "../media/christianity/sects/orthodox.jpg"
import luther from "../media/christianity/sects/luther.jpg"
import protestant from "../media/christianity/sects/protestant.jpg"
import ethiopian from "../media/christianity/sects/ethiopian.jpg"

// milestones
import baptism from "../media/christianity/milestones/baptism.jpg"
import confession from "../media/christianity/milestones/confession.jpg"
import communion from "../media/christianity/milestones/communion.jpg"
import confirmation from "../media/christianity/milestones/confirmation.jpg"
import ordination from "../media/christianity/milestones/ordination.jpg"
import matrimony from "../media/christianity/milestones/matrimony.jpg"
import thesick from "../media/christianity/milestones/thesick.jpg"
import death from "../media/christianity/milestones/death.jpg"

// festivals
import christmas from "../media/christianity/festivals/jesusbirth.jpg"
import epiphany from "../media/christianity/festivals/magi.jpg"
import lent from "../media/christianity/festivals/lent.jpg"
import holyweek from "../media/christianity/festivals/palmsunday.jpg"
import ascension from "../media/christianity/festivals/pentecost.jpg"
import saintsday from "../media/christianity/festivals/saints.jpg"

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
                <span>There are <b>four Gospels</b>:</span>
                <ol class="list-disc list-inside">
                    <li>Matthew</li>
                    <li>Mark</li>
                    <li>Luke</li>
                    <li>John</li>
                </ol>
                <li>All but John are known as <b>synoptic</b>, meaning told from the same &ldquo;eye&rdquo;. John is more interpretive in style, and lays out much of Christianity&rsquo;s foundations.</li>

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

            <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Vem8Jz9ggYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

const festivals = {
    'Advent & Christmas':
    {
        text:
        <div class="space-y-3">
            <p>
                Advent begins 40 days prior to Christmas, marking the end of Ordinary Time in the annual Christian calendar. This period is filled with fasting, repentance, worship and prayer in preparation for Christmas. <b>Christ</b>mas commemorates the birth of Jesus on December 25th for most denominations, however, many Byzantine rite Catholic and Orthodox Churches Celebrate it on January 7th or some other date, partly because the exact date of Jesus’ birth is unknown.
            </p>
            <p>
                Manger scenes are often used to depict Jesus’ birth in Churches. Services feature worship led by song and often draw people who rarely attend Church in. Christmas is responsible for many carols that are well known today by Christians and non-Christians alike.
            </p>
            <p>
                Christmas itself features several traditions such as gift-giving, which has two origins. When Jesus was born, he was visited by 3 Magi (Wise Men) who were led by “Star of Bethlehem”, gifting Jesus frankincense, gold and myrrh to Jesus. The other source of the tradition is Hellenistic in origin, as giving gifts to honour Roman Gods was common.
            </p>
        </div>,
        img: christmas
    },
    'Epiphany':
    {
        text:
        <div class="space-y-3">
            <p>
                Soon after Christmas on January 6th, Epiphany is celebrated. Epiphany celebrates the Magi visiting Jesus along with his baptism by John the Baptist in the Jordan River. This is the origin of the “twelve days of Christmas”, which are filled with gift-giving. Overall, Epiphany celebrates Jesus’ being revealed as the Son of God incarnate.
            </p>
        </div>,
        img: epiphany
    },
    'Lent':
    {
        text:
        <div class="space-y-3">
            <p>
                Lent begins two months after Christmas on Ash Wednesday, seven Wednesdays before Easter. On Ash Wednesday, believers often have crosses painted with ash on their foreheads to remind them of their mortality; that they will eventually return to ashes. Lent lasts 40 days, in reference to Jesus’ 40 day fast in the wilderness during which he faced temptations from the devil. Thus, believers practise fasting, abstinence and spiritual reflection during this time period.
            </p>
        </div>,
        img: lent
    },
    'Holy Week & Easter':
    {
        text:
        <div class="space-y-3">
            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Palm Sunday</span>
            <p>
                The first day is Palm Sunday, which commemorates Jesus’ welcome to Jerusalem, riding on a colt as prophesied in Zechariah, an Old Testament Book. Today, palm branches are distributed to believers in reference to how Jesus was welcomed with Palm branches.
            </p>

            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Holy Thursday</span>
            <p>
                Later in the week, on Thursday, Holy Thursday is celebrated. During this day, Jesus washed the disciples’ feet and partook in the Last Supper, which is the source of The Eucharist today.
            </p>

            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Good Friday</span>
            <p>
                The most solemn part of Holy Week occurs on Good Friday, which commemorates Jesus’ crucifixion and burial. Jesus’ final hours are read out by ministers from the Gospels during service, and believers solemnly kiss crosses or tombstones which represent Jesus’ death.
            </p>

            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Easter Sunday</span>
            <p>
                Three days after crucifixion, Jesus resurrected, as recognized on Easter Sunday. This is considered the Holiest day in the year, as Jesus successfully overcame death and atoned for mankind’s sins. Parishioners attend worship-filled liturgies.
            </p>
        </div>,
        img: holyweek,
    },
    'Ascension & Pentecost':
    {
        text:
        <div class="space-y-3">
            <p>
                Ascension celebrates Jesus’ ascension to heaven 40 days after his resurrection. Soon after, the Holy Spirit was bestowed upon the apostles on Pentecost, giving them spiritual gifts and enabling them to perform miracles and speak different tongues to evangelise nonbelievers. This is covered in acts, which states “three thousand souls.” (Acts 2:41) were saved.
            </p>
        </div>,
        img: ascension
    },
    'Saints\' Day':
    {
        text:
        <div class="space-y-3">
            <p>
                The early Church began to pray and show reverence towards those considered holy, such as saints and martyrs. Prayers are directed towards these people because those considered saints are believed to be in heaven. Furthermore, many non-protestant denominations practise reverence for Mary, considered the Mother of God. Saints have days in which they are recognized with special celebrations.
            </p>
        </div>,
        img: saintsday
    },
};

function Festivals() {
    let [page, setPage] = useState('Advent & Christmas');

    const festivalsSelect = Object.entries(festivals).map(([key, val], i) =>
        <a onClick={(ev) => {setPage(key); ev.preventDefault()}} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            {key}
        </a>
    )

    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div class="flex pb-8 gap-10">
                    <h1 class="text-4xl font-Unbounded font-bold">Festivals</h1>
                    <div class="hs-dropdown relative inline-flex">
                        <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-SpaceGrotesk bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            {page}
                            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
                            {festivalsSelect}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Card2 title={page} text={festivals[page].text} image={festivals[page].img}>
                </Card2>
            </div>
        </Pane>
    );
}

const denominations = {
    'Roman Catholic':
    {
        text:
        <div class="space-y-3 leading-8">
            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Overview</span>

            <p>
                The Catholic Church is currently the largest denomination of Christianity, with believers numbering above <b>1.3 billion</b>. Since its beginning, the Western, Catholic Church expanded and centralised its authority. To recover Jerusalem and other land, Pope Urban II launched the "Holy" Crusades lasting more than a century starting in 1095 CE. Despite being targeted towards retaking the lands from Muslim rule and originally being speculated to regain unity with the Eastern Church, they were not incredibly
                It split from the Orthodox Church because of the great schism. However, the Catholic Church also went through some changes soon after the Protestant formation. Starting in 1543, the Catholic Church started the Catholic reformation with the Council of Trent, which re-established the beliefs of the denomination. This is where the seven sacraments were formally defined and Hell, Purgatory and Heaven were defined as the three post-death destinations. <b>Purgatory</b> is a destination in which one
                cannot yet enter heaven until they are cleansed, but not damned to hell either. Here, it was also affirmed that prayers to saints & Mary are acceptable.
            </p>

            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Characteristics</span>

            <p>
                The Catholic Church has a lot of importance placed in hierarchy, especially compared to protestant denominations. Specifically, the Pope sets the Roman Catholic Church apart from any churches. Catholics believe in <b>Apostolic Succession</b>, linking the Pope to the likes of Peter, considered the leader of the early Church following Jesus' death.
                Later in 1870, another council known as the <b>First Vatican Council</b> reaffirmed <b>papal infallibility</b>, ultimately asserting the Pope's statements were protected from error by God. 
                The second Vatican Council was held from 1962 to 1965. Many documents were introduced at this time, as it was a period of rapid development worldwide. To adapt to the modern world, things like Latin were replaced with local languages for worship. The Church encouraged participating in the mass directly, and provided non-clergy the opportunity to be commentators
                and distributors of Holy Communion. Here, it was formalised that the Eucharist could be taken in a small wafer of unleavened bread and wine, both consecrated.
            </p>

            <div class="pt-1"/>
            <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Struggle</span>
            <p>
                Today, the Roman Catholic faces a drop in attendance and clergy, especially priests, in industrialized nations. This can be attributed to the strict requirements to be priests, such as celibacy (not a requirement for Eastern Orthodox) and strong adherence to zeal, especially contrasted against ever-secular societies today. Thus, many congregations have been merged under the leadership of less priests.
            </p>
        </div>,
        img: catholic
    },
    'Orthodox':
    {
        text:
            <div class="space-y-3 leading-8">
                <div class="pt-1" />
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Overview</span>

                <p>
                    Often referred to as the Eastern Orthodox Church, formed after the first great schism due to the filioque clause being added to the Nicean creed by the Western Latin Church.
                    However, they originally bega rejecting the pope's authority in addition to any changes made to Christianity after 787 CE. Due to being on the Eastern side of the divide, Eastern Orthodoxy
                    is most common in Russia, Serbia, Ukraine, Greece, Bulgaria and Romania. Today, the Chuch claims 225 million follwers.
                </p>

                <div class="pt-1" />
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Characteristics</span>

                <p>
                    Eastern Orthodox churches are well-known for their church buildings, which are thoroughly decorated with icons symbolic of Jesus, Mary, the angels and the others.
                    The services held are known as "Divine Liturgies", and typically last long comparatively. featuring many traditions from the earlier Church. These services contain A
                    strong sense of divinity, as chanting, incense and ornate vestaments are worn by the priest contribute to the other-worldliness of the services.
                </p>

                <p>
                    Rather than being led by a Pope, they are led by an "Ecumenical Patriarch" based in Istanbul. Quite recently in 1965, this patriarch met with
                    Pope Paul VI from the Roman Catholic Church and erased the former excommunications that had formerly separated the Churches. However, they still remain
                    separate institutions today.
                </p>

                <p>
                    When it comes to the qualifications for a priest, Orthodox priests must be male. Interestingly, they are permitted to marry <b>only</b> before ordination.
                    Overall, the Orthodox denomination has encouraged believers to pursue monastic lives, leading many to become monastic priests or nuns and not marry.
                </p>

                <p>
                    On the Eastern side of the great schism, several other denominations have formed or broken away from the Eastern Orthodox Church. They have differences in doctrine surrounding
                    the nature of Jesus' divinity and humanity while incarnate. One such example is the Ethiopian Church, accounting for about 50% of these people. Interestingly, they follow many Jewish
                    traditions such as practicing the Sabbath, participating in ritual purification and using an Ark of the Covenant replica. Examples include:

                    <div class="pt-2" />
                    <div class="flex flex-row p-5">
                        <ul class="list-inside list-disc w-[80rem]">
                            <li>East Syrian Church (Iraq, Middle East)</li>
                            <li>Chaldean Church (Iraq, Iran)</li>
                            <li>West Syrian Church (Syria, Lebanon, Iraq)</li>
                            <li>Armenian Church (Middle East)</li>
                            <li>Coptic Church (Egypt)</li>
                            <li>Ethiopian Church (Ethiopia)</li>
                        </ul>
                        <div class="w-auto h-[15rem] rounded-lg overflow-clip items-center flex">
                            <img src={ethiopian} class="relative pt-[13rem]"></img>
                        </div>
                    </div>
                </p>
            </div>,
        img: orthodox
    },
    'Protestant':
    {
        text:
            <div class="space-y-3 leading-8">
                <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Overview</span>
                <div class="flex flex-row">
                    <div class="w-[50rem]">
                        <p class="leading-8">
                            Despite originally being a priest in the Roman Catholic Church, Martin Luther felt he was not close enough to God and began to develop his own beliefs about the Christian Faith, including sola fide, sola gratia and sola scriptura, which conflicted with the Catholic Church’s views.
                        </p>
                    </div>
                    <div class="grow pl-5">
                        <img class="w-100% h-auto rounded-lg" src={luther} />
                    </div>
                </div>

                <div class="pt-1" />
                <div class="aspect-w-16 aspect-h-9">
                    <iframe class="object-cover" width="560" height="315" src="https://www.youtube.com/embed/FhGGjRjvq7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="pt-1" />

                <h1 class="text-2xl font-Unbounded font-bold">Solas</h1>
                <div class="flex flex-row gap-5 text-justify ">
                    <p class="w-1/3">
                        <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Sola Fide</span>
                        <br/>The Catholic Church held that salvation could be attained through the combination of faith, good works, participating in sacraments, and fulfilling several other church demands. However, Luterh believed salvation simply relied on faith, which is where <b>Sola Fide</b> comes from, by faith alone.
                    </p>
                    <p class="w-1/3">
                        <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Sola Gratia</span>
                        <br/>Sola gratia also ties into his interpretation of salvation, which could not be earned, only graciously given by God. However, the Catholic Church still believes in <b>Sola Gratia</b> through faith, some there is some more common ground here.
                    </p>
                    <p class="w-1/3">
                        <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Sola Gratia</span>
                        <br/>Luther rejected papal infallibility, denying the authority of the pope and claiming Christianity's absolute authority is scripture itself, <b>Sola Scriptura</b>. This calls many to question to draw the line on the Church's influence, especially with biblical canon.
                    </p>
                </div>
                <p>
                    Ultimately, irreconcilable views led to his excommunication and the birth of the Protestant branch of Christianity.
                    Alongside Luther's translations of the Bible to German, many people were now able to read and interpret scripture without relying on either the Catholic or Orthodox Churches. This led to widespread reform throughout Europe, giving birth to several "protestant" denominations, including the Lutheran, Calvinist, and Anglican branches.
                </p>
                <div class="h-1"/>

                <div>
                    <button type="button" class="w-full hs-collapse-toggle py-3 px-4 inline-flex justify-left items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" id="hs-a" data-hs-collapse="#hs-a-heading">
                        The Lutheran Church
                        <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div id="hs-a-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-a">
                        <div class="mt-5">
                            <p>
                                The Lutheran Church is one of the first protestant denominations, started by Martin Luther himself. Today, the Church has over 75 million followers. 
                                Based upon Luther's beliefs, believers hold the Bible as the one true source of doctrine and believe the Church plays an important role in following what is taught in the Bible. Unlike
                                the Catholic Church, the Lutheran Church only practices two sacraments: Bapsim and Holy Communion. Unlike Catholicism, they believe in consubstantiation, not substantiation, which acknowledges
                                Christs' presence in blood and body, but deny that they are converted to his flesh and blood in substance. These practices are followed by many other protestant Churches.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <button type="button" class="w-full hs-collapse-toggle py-3 px-4 inline-flex justify-left items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" id="hs-b" data-hs-collapse="#hs-b-heading">
                        The Calvinist/Reformed Church
                        <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div id="hs-b-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-b">
                        <div class="mt-5">
                            <p>
                                A classical scholar known as John Calvin experienced a powerful religious conversion in the middle-sixteeth century.
                                He soon developed beliefs of destiny, believing that God held absolute sovereignty over everything. His was influenced by
                                the protestant reformation, soon travelling to Scotland to form the <b>Presbyterian Church</b>.
                            </p>
                            <p>
                                Calvinists believe in sanctification: purification from sin by obeying the Ten Commandments from the Old Testament. They believe that all human actions are under God’s scrutiny, so people should therefore value integrity, sincerity and hard work.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <button type="button" class="w-full hs-collapse-toggle py-3 px-4 inline-flex justify-left items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" id="hs-c" data-hs-collapse="#hs-c-heading">
                        Jehovah’s Witness (Non-Trinitarian)
                        <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div id="hs-c-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-c">
                        <div class="mt-5">
                            <ul class="list-inside list-disc">
                                <li> Founded by Charles Taze Russel in the 1870s, with very unorthodox interpretations of scripture. </li>
                                <li> Do not celebrate things like birthdays, Christmas and other commonly celebrated Christian traditions. Rather they simply commune in assemblies and commemorate a “The Memorial of Christ” once a year. </li>
                                <li> Surrounded by controversy, such as denying blood transplants, rampant sexual immorality, and social ostracization. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>,
        img: protestant
    },
};

function Denominations() {
    let [page, setPage] = useState('Roman Catholic');

    const denominationSelect = Object.entries(denominations).map(([key, val], i) =>
        <a onClick={(ev) => {setPage(key); ev.preventDefault()}} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            {key}
        </a>
    )

    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div class="flex pb-8 gap-10">
                    <h1 class="text-4xl font-Unbounded font-bold">Denominations</h1>
                    <div class="hs-dropdown relative inline-flex">
                        <button id="hs-dropdown-basic" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-SpaceGrotesk bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            {page}
                            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
                            {denominationSelect}
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <Card2 title={page} text={denominations[page].text} image={denominations[page].img}>
                </Card2>
            </div>

            <div class="pt-6" />
            <h1 class="text-4xl font-Unbounded font-bold text-left">Summary</h1>
            <div class="pt-3" />
            <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tzLS4O7YaUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </Pane>
    );
}

function History() {
    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div class="flex pb-8 gap-10">
                    <h1 class="text-4xl font-Unbounded font-bold text-left">History</h1>
                </div>
            </div>
            <div >
                <div class="flex flex-wrap">
                    <div class="border-r border-gray-200 dark:border-gray-700">
                        <nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                                Jesus' Life
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                                Early Church
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                                Great Schism
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-4" data-hs-tab="#vertical-tab-with-border-4" aria-controls="vertical-tab-with-border-3" role="tab">
                                Modernity
                            </button>
                        </nav>
                    </div>

                    <div class="ml-3">
                        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                            <div class="flex flex-row">
                                <div class="w-[45em] space-y-3 text-justify">
                                    <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Early Life</span>
                                    <p>
                                        Jesus was born around 4 BCE in Israel, which had been under the jurisdiction of the Roman Empire since 63 BCE. At the time, the Roman Empire was reigned by Caesar Augustus who ordered a census, known as the Census of Quirinius, to collect demographic information for taxation purposes. The census required citizens to travel back to the birthplaces to be counted. Joseph and Mary travelled to Bethlehem, because it was Joseph’s birthplace. They were unable to find a place to stay, so they resorted to staging in a stable shelter. This is significant because the circumstances surrounding his birth fulfil prophecies, such as Micah 5:2, which references the Messiah’s birth in Bethlehem.
                                    </p>
                                    
                                    <div class="pt-3"/> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Ministry</span>
                                    <p>
                                        When Jesus was 33, he fasted for forty days and forty nights after being baptised by John the Baptist. After returning from his fast, he would begin to perform a series of miracles throughout the rest of his life, many of which are recorded in the gospels.
                                    </p>

                                    <div class="pt-3"/> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Crucifixion</span>
                                    <p>
                                        As Jesus’ influence grew, the Sanhedrin, a group of powerful Jewish figures who governed under Roman jurisdiction. Jesus attracted crows with thousands of people and disrupted many Jewish social norms, such as interacting with Samaritans (considered unclean half-breeds by many Jews), or associating with tax-collectors and Gentiles. This put their authority at risk, as the Romans could usurp the Sanhedrin from their posts given any uncontrolled uprisings. Along with his testimonies of being God’s Son and the Messiah, which they considered blasphemous, the Sanhedrin viewed him as a threat. They were one of the main groups responsible for his initial arrest and eventual crucifixion.
                                    </p>

                                    <div class="pt-3"/> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resurrection</span>
                                    <p>
                                        After Jesus ascended from heaven, he left his apostles in charge until his return.
                                        St. Peter is considered the first Pope as Jesus symbolically handed him the keys of the Church. This is the root of apostolic succession, which has still carried on today, most noticeably in the Catholic Church.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-2" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                            <div class="w-[45em] space-y-3 text-justify">
                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Pentecost</span>
                                <p>
                                    Five days after his resurrection, the first Pentecost occurred, in which the Holy Spirit was received by believers, allowing them to evangelise in many languages and perform miracles.
                                </p>

                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Persecution</span>
                                <p>
                                    Jewish leaders, such as members of the Sanhedrin, began suppressing the movement of Christ’s followers. Especially after his death, they believed the movement should have been subdued, especially since they believed Jesus was blaspheming, claiming he was God.
                                </p>
                                <p>
                                    Alongside the Jews, Christianity was also suppressed by the Roman Empire itself as it was illegal. Thus, Christians had the choice to renounce their faith and commit apostasy or hold tight to their faith even till death, becoming martyrs. This act of following faith, even when it leads to death was known as martyrdom, meaning “witness”.
                                    One such figure was Saul of Tarsus, who persecuted Christians until he experienced divine intervention, as Jesus called out to him, questioning why he persecuted Christians. Following this, he changed his name to Paul and played a major role in Christianity’s spread to Gentiles (non-Jews) in the Roman Empire.
                                </p>

                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Recording of the New Testament</span>
                                <p>
                                    Early Christians did not initially document the New Testament because they believed the return of Christ was imminent. Thus, the New Testament was compiled from 50-100 AD. This would prove important, as over the next few centuries many subdivisions within the Church, which had doctrine contrary to the New Testament began to form.
                                </p>

                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Early Expansion</span>
                                <p>
                                    After Constantine converted to Christianity, he attempted to unify and consolidate Christianity in the council of Nicaea, held during 325 A.D. The main product of the council is the Nicean Creed, which outlined the core beliefs of Christianity, still held true by many denominations today.
                                </p>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-3" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                            <div class="w-[45em] space-y-3 text-justify">
                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Great Schism</span>
                                <p>
                                    The Nicean Council in 325 AD had settled some disputes in the early church, solidifying the core beliefs of participating congregations. However, one statement in the creed was soon modified by the Western Church, adding “and the Son” to the end of the statement “the Holy Spirit, the Lord and giver of Life, who proceeds from the Father”. This modification not only created a division of ideology, but called into question authority the individual churches had to make changes to their doctrine. Interestingly, although the filioque close was added around 589 CE, it took several centuries for excommunication between the Eastern and Western Church to occur, causing the great schism in 1054 CE. This resulted in the creation of the two largest denominations today: Catholicism from the Western Church and Orthodox Christianity from the Eastern Church.
                                </p>

                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Protestant Reformation</span>
                                <p>
                                    From <b>1347 to 1351</b>, the Black Plague ravaged through Europe, wiping out 30%-60% of the entire continent's population. However, this actually may have positively influenced the faith itself, as religion became a means to reconcile with the terrors of reality, having permanent death so closely intertwined with life.
                                </p>
                                <p>
                                    However, the renaissance soon followed with many well-known works of art flourishing, being funded by the Church. However, indulgences were very common during this time. People would pay the Church to reduce time in purgatory for after one had died. Some believed this was essentially “paying” institutions for sin, where only God could forgive. This meant that the rich could spend less time in purgatory than the poor.
                                </p>
                                <p>
                                    This gave rise to figures who seeked to reform the Church, the most notable of which was Martin Luther. His disdain of the current state of the Church led him to create 95 thesis, which outlined his reformist beliefs that contrasted the present Church’s doctrine. After his case is held in trial, he is excommunicated and outlawed. He manages to go into hiding and creates a German translation of the Bible. This was a major step forward for accessibility, as the Bible was only available in Latin, the language of the affluent, meaning the poor could not read it. He saw this as an opportunity to reduce corruption because now, interpretation was not limited to the perspectives of the rich, as other social classes could now derive their own interpretations.
                                </p>
                                <p>
                                    However, since the power of interpretation was now in the hands of common people, many others began to come up with different interpretations than Luther. Ultimately, this would split the then-Catholic Church into the Catholic side and a Reformist Protestant side.
                                </p>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-4" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-4">
                            <div class="w-[45em] space-y-3 text-justify">
                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Anglican Church</span>
                                <p>
                                    In England, King Henry VIII wanted to divorce his wife, but was denied by the Pope. This led him to reject papal authority and make himself the head of the Church, forming the Anglican Church in <b>1534</b>, one of the largest denominations today.
                                </p>

                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Council of Trent</span>
                                <p>
                                    In response to these various reformations, the Catholic Church was led to pursue a counter-reformation, initially hosting <b>The Council of Trent in 1545</b>. The council led to the following changes within the Church:
                                </p>
                                <ul class="list-inside list-disc">
                                    <li>Seven Sacraments</li>
                                    <li>Full Church Authority</li>
                                    <li>Denial of Sola Fide</li>
                                    <li>Stricter Indulgence & Sainthood Rules</li>
                                    <li>Measures to Prevent Corruption Implemented</li>
                                    <li>Reaffirmation of Papal Infallibility with Complete Papal Loyalty</li>
                                    <li>Chastity Vow</li>
                                </ul>

                                <div class="pt-3" /> <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Vatican II</span>
                                <p>
                                    Later, the Second Vatican Council was held between 1962 and 1965 to help the Church adapt to the modern world. 2600 Bishops, 800 Theologians and 60 external observers were welcomed, resulting in 9 degrees, 3 declarations and 4 constitutions to make 16 documents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6" />
                    <h1 class="text-4xl font-Unbounded font-bold text-left">Summary</h1>
                <div class="pt-6" />
                <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                    <iframe class="object-cover" width="560" height="315" src="https://www.youtube.com/embed/AUFvA9Dr0bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </Pane>

    );
}

function Beliefs()
{
    return (
        <Pane>
            <h1 class="text-4xl font-Unbounded font-bold text-left">Beliefs</h1>
            <div class="grid grid-flow-row gap-5">
                <Card3 image={nicene} title="Nicene Creed" text="Document created in 325 CE that outlined basic Christian beliefs. Many Christian denominations follow this document. However, it has still historically caused division."/>
                <Card3 image={creation} title="1. Creation" text="Affirms the universe in its entirety was created by God. Noticeably, does not make statements on many other circumstances surrounding the creation story, such as what was created in each day, or even if the universe was created in seven days."/>
                <Card3 image={god} title="2. God" text="There is one supreme, omniscient God responsible for all of creation. God is both powerful on a large scale and personal, able to communicate with individuals. God is forgiving and full of mercy. He practises authority over all of his creation. Including evil. Christians believe God demonstrated his love for humanity through Jesus’ sacrifice."/>
                <Card3 image={trinity} title="3. The Holy Trinity" text="The idea that the God-being is composed of three distinguishable ‘components’, the Father, the Son (Jesus) and the Holy Spirit, but are still one God entity. The Father and the Son of the trinity must be one, or the atonement accomplished by Jesus’ death falls apart. Jesus descended from heaven and incarnated in the flesh born both fully human and fully divine."/>
                <Card title="The Holy Spirit" text="The Holy Spirit is described as God’s life-emanating presence that enabled believers to live righteously and continue Jesus’ work. The Holy Spirit first came upon believers during the pentecost, and has since dwelt in believers, continuing to drive the progression of the faith."/>
                <Card3 image={salvation} title="4. Salvation and Eternal Life" text="Because Jesus on earth was fully human and fully God, he experienced suffering just as any other human would; His suffering was necessary to properly atone for humankind’s sin ultimately on the cross. After Adam and Eve’s original sin in the garden, all humans were imbued with original sin, resulting in separation from God. Christians believe Jesus’ mission was to reconcile humankind to God by atoning for our sins which caused separation on the cross. The Nicene creed refers to this salvation has humankind being “saved”"/>
                <Card3 image={lastJudgement} title="5. The Last Judgement" text="The Nicene makes reference to Jesus’ second coming, during which he will carry out the Final Judgement. At this time, those who will reside in heaven or suffer in hell for eternity will be determined depending on if they have followed Jesus’ teachings, including practising the Golden rule, helping the poor, and forgiving others."/>
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
                <div> <Beliefs /> </div>
                <div> <History /> </div>
                <div> <Symbols /> </div>
                <div> <Scripture /> </div>
                <div> <Milestones /> </div>
                <div> <Festivals /> </div>
                <div> <Denominations /> </div>
            </div>
        </div>
    );
}

export default Christianity