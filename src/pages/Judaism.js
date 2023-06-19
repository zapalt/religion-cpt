import LoremIpsum from "react-lorem-ipsum";
import Card, { Pane, Card2, Card3 } from "../elements/Card";

// general images
import kaaba from "../media/islam/kaaba.jpg"

import halal from "../media/islam/halal.jpg"
import environment from "../media/islam/environment.jpg"

// beliefs
import throne from "../media/islam/beliefs/throne.png"
import righteous from "../media/islam/beliefs/handshake.jpg"
import creation from "../media/islam/beliefs/creation.jpg"
import baby from "../media/islam/beliefs/baby.jpg"
import soul from "../media/islam/beliefs/soul.jpg"
import call from "../media/islam/beliefs/call.jpg"

// groups
import sunni from "../media/islam/sects/sunni.jpg"
import shia from "../media/islam/sects/shia.jpg"
import sufi from "../media/islam/sects/sufi.jpg"

// milestones
import birth from "../media/islam/milestones/birth.jpg"
import marriage from "../media/islam/milestones/marriage.jpg"
import death from "../media/islam/milestones/death.jpg"

// festivals
import ramadan from "../media/islam/festivals/ramadan.jpg"
import eid1 from "../media/islam/festivals/eid1.jpg"
import eid2 from "../media/islam/festivals/eid2.jpg"
import milad from "../media/islam/festivals/milad.jpg"
import miraj from "../media/islam/festivals/miraj.jpg"
import muharram from "../media/islam/festivals/muharram.jpg"

// symbols
import symbol1 from "../media/islam/symbols/1.jpg"
import symbol2 from "../media/islam/symbols/2.jpg"
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
                            Judaism is the chronologically oldest, yet smallest of the three monotheistic world religions. The other two have many similar beliefs, as Judaism
                            in large part acts as the source for beliefs, especially in Christianity.
                        </p>
                    </div>
                </div>
                <div class="min-w-[20em] h-[8rem]">
                    <Card2 image={require("../media/judaism/jewsymbols.jpg")} text=""/>
                    <p class="font-SpaceGrotesk pt-1 text-xs text-center">
                        Despite having similar origins to other monotheistic religions, there has been constant bloodshed over disagreements.
                    </p>
                </div>
            </div>
        </Pane>
    );
}

const stats = [
    {
        h1: '15',
        h2: 'MILLION',
        h3: <p>Adherents <br/> Worldwide</p>,
        src:
            <svg class="pb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
    },
    {
        h1: '8.7',
        h2: 'MILLION',
        h3: 'Highest Jewish population: Israel',
        src: <div class="p-2 pt-7 mb-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512"><path d="M309.8 3.7c5.9-4.9 14.6-4.9 20.5 0l121 100.8C469.5 119.7 480 142.2 480 166V280.1 512H464 352V416c0-17.7-14.3-32-32-32s-32 14.3-32 32v96H176 160V280.1 166c0-23.7 10.5-46.3 28.8-61.5L309.8 3.7zM512 512V244.5l28.1-31.2c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3l63.8 70.9c7.9 8.8 12.3 20.3 12.3 32.1V448c0 35.3-28.7 64-64 64H512zM128 244.5V512H64c-35.3 0-64-28.7-64-64V316.3c0-11.9 4.4-23.3 12.3-32.1l63.8-70.9c3-3.4 7.4-5.3 11.9-5.3s8.9 1.9 11.9 5.3L128 244.5zM327 124.3c-3.1-5.4-10.9-5.4-13.9 0l-15.9 28.1-32.3-.3c-6.2-.1-10.1 6.7-7 12.1L274.3 192l-16.4 27.8c-3.2 5.4 .7 12.1 7 12.1l32.3-.3L313 259.7c3.1 5.4 10.9 5.4 13.9 0l15.9-28.1 32.3 .3c6.2 .1 10.1-6.7 7-12.1L365.7 192l16.4-27.8c3.2-5.4-.7-12.1-7-12.1l-32.3 .3L327 124.3z"/></svg>
            </div>
    },
    {
        h1: '6th',
        h2: 'Century BCE',
        h3: <p>Introduced by<br/> Abraham*</p>,
        src: <div class="p-4 pb-33 pt-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M404.2 309.5L383.1 344h42.3l-21.1-34.5zM371.4 256l-54-88H194.6l-54 88 54 88H317.4l54-88zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112H163.3l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112H458.6c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-54-88l21.1 34.5L425.4 168H383.1zM283 112L256 68l-27 44h54zM128.9 168H86.6l21.1 34.5L128.9 168zM107.8 309.5L86.6 344h42.3l-21.1-34.5zM229 400l27 44 27-44H229z"/></svg>
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
    'Star of David':
    {
        text: <p>Referred to as "Magen David", as it resembled his shield. This symbol has been widely adopted Zionists, however, it is still viewed as a source of pride for many Jewish people</p>,
        img: require("../media/judaism/symbols/sod.jpg")
    },
    'Menorah':
    {
        text:
        <p>
            Light source, used differently in different occasions. The seven-branched variant is used during Sabbath while the nine-branched version is used during Hanukah
            The original one was in the Temple in Jerusalem until it was destroyed. This was a major contender for a symbol for Judaism, but many did not want to nullify its meaning by making it commonplace.
        </p>,
        img: require("../media/judaism/symbols/menorah.jpg")
    },
    'Shabbat':
    {
        text:
        <p>
            Shabbat candles are primarily used for rituals. Mainly, they usher in peace and joy before the Sabbath. The reason there are two candles is because historically, it was more efficient to have two, 
            because many households had two dwelling rooms. After the candles are lit, the Sabbath is initiated with a blessing.
        </p>,
        img: require("../media/judaism/symbols/shabbat.jpg")
    },
    'Dreidel':
    {
        text:
        <p>
            The Dreidel (meaning "To Turn") is primarily used as a toy to play games during Hanukkah. The characters on each face say "Nun Gimel Hay Shin", which can be translated to
            "A great miracle happened there". This references the Jewish victory over the Syrians during Hanukkah. To win, you must get "Gimel"
        </p>,
        img: require("../media/judaism/symbols/dreidel.jpg")
    },
    'Havdalah Candle & Holder':
    {
        text:
        <p>
            Used to separate the week from the Sabbath, as "Havdalah" means separation. It is lit when the Sabbath ends and burns for the entire week.
        </p>,
        img: require("../media/judaism/symbols/havdalah.jpg")
    },
    'Kiddush Cup & Tray':
    {
        text:
        <p>
            The Kiddush is a common Jewish prayer, often said over wine to consecrate it. The cup used to hold this wine is engraved with the Star of David 
            and filled to overflow to represent an overflowing hope. There is an enscription that reminds one to keep the Sabbath Holy.
        </p>,
        img: require("../media/judaism/symbols/kiddush.jpg")
    },
    'Kippah/Yarmulke':
    {
        text:
        <p>
            Skull cap, similar to those worn by Biships, Cardinals and Popes in Christianity. Howver, it is worn as a sign of respect by
            both men and women depending on 
        </p>,
        img: require("../media/judaism/symbols/kippa.jpg")
    },
    'B\'kol Echad':
    {
        text:
        <p>
            B'kol Echad can be translated to "In one Voice". It is one of the most widely used prayerbooks, containing English, transliterated English and Hebrew translations.
            However, it is written from right to left to match the writing style of the Hebrew language.
        </p>,
        img: require("../media/judaism/symbols/kippa.jpg")
    },
    'Sedar Tray':
    {
        text:
        <p>
            At the passover table, Jewish people divide their food into six categories, placing them in one of six sections in a Sedar tray.
        </p>,
        img: require("../media/judaism/symbols/sedar.jpg")
    },
    'Tallit':
    {
        text:
        <p>
            Jewish people wear prayer shawls known as Tallits, which symbolically remind them of the 613 mitzvahs found in the Torah.
        </p>,
        img: require("../media/judaism/symbols/tallitt.jpg")
    },
    'Torah Replica':
    {
        text:
        <p>
            A symbolic scroll containing the first five books in the Old Testament (Pentateuch). There are no page numbers
            to represent the absence of a beginning and end. It cannot be touched by hands, so a pointer can be used during readings.
        </p>,
        img: require("../media/judaism/symbols/torahrep.jpg")
    },
};

function Symbols()
{
    let [page, setPage] = useState('Star of David');

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

const scripture = [
    {
        title: "Torah",
        text: <div class="space-y-3 text-justify">
            <p>
                The Torah contains Judaisms' most sacred writings. The word itself can be accurately translated into "instruction" or "teaching".
                The book itself describes the historical development in the relationship between God's chosen people, the Jews, and God himself.
            </p>
        </div>
    },
    {
        title: "Talmud",
        text:
            <ul class="space-y-3 text-justify">
                <p>
                    The Talmud is a compilation of commentary and literature eventually recorded. Today, it acts as a source for Jewish law.
                </p>
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
            <div class="flex flex-row justify-center gap-10">
                {scriptureList}
            </div>
            <hr class="my-6 h-0.5 border-t-0 bg-gray-700/20" /> <div class="p-1"></div>

            <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nQE8YhYSuS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </Pane>
    );
}

const milestones = {
    'Birth':
    {
        text:
            <div class="space-y-3">
                <p>
                    Newborns are given Hebrew names (usually named after a deceased relative) in addition to their other name. This acts as a way
                    to carry on Jewish tradition, as the Hebrew name is used during religious ceremonies.
                </p>
                <p>
                    Just more than a week, at 8 days after birth, Jewish boys are circumcised. The circumcision is preferably performed by someone
                    trained with Jewish law, but otherwise, a doctor is also permissible. Usually, this is when the boy his given his name. Because girls
                    don't get circumcisions, their names are given on the closest Sabbath after birth.
                </p>,
            </div>,
        img: require("../media/judaism/milestones/birth.jpg") 
    },
    'Coming of Age':
    {
        text:
            <div>
                <p>
                    Jewish children experience coming of ages as they grow into their teens. At 13, boys celebrate their bar-mitzvahs, while girls celebrate bat-mitzvahs at 12.
                    At this point, they are now considered adults under JEwish law, however, it is no easy task. Children must spend months practicing to recite the Torah at the service.
                </p>
            </div>,
        img: require("../media/judaism/milestones/comingofage.jpg") 
    },
    'Marriage':
    {
        text: <p>
            Like other beliefs, marriage plays a large role in the lives of Jewish people. It is encouraged in the faith but not required. However, when weddings do happen, ceremonies are conducted
            in a synagogue with a rabbi present. The newlyweds stand under a "chuppah", similar to a roof, which represents their shared household together. The bridgegroom signs a marriage contract 
            and gives the ring to the bride. At the service's end, glass is crushed underfoot to symbolize the struggles the couple will go through and overcome, while also referencing the Temple's Destruction.
           </p>,
        img: require("../media/judaism/milestones/marriage.jpg") 
    },
    'Divorce':
    {
        text: <p>
            Again, similar to other religions, divorce is highly discouraged, so it is viewed as a last-resort. If all measures fail, a divorce can happen by obtaining a "get", which is an official certificate
            of divvorce. If this document is not obtained or obtained improperly, Jewish congregations will still view the couple as married. After a divorce however, remarrying is allowed.
           </p>,
        img: require("../media/judaism/milestones/divorce.jpg") 
    },
    'Death':
    {
        text: <p>
           Funerals are held as soon as possible after death. Cremation is not permitted whatsoever. Following death, close ones will go into <b>Shiva</b>, which is a week-long period
           of mourning. During this time, the deceased's family is freed of many of their responsibilities, such as cooking and some cleaning, while mirrors are covered up too. The beginning of this period is marked by 
           the lighting of a shiva candle which represents the passing soul.
           </p>,
        img: require("../media/judaism/milestones/shiva.jpg") 
    },
};

function Milestones() {
    let [page, setPage] = useState('Birth');

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
    'Purim':
    {
        text:
        <div class="space-y-3">
            <p>
                Purim is a festival that commemorates the survival of the Jewish people against a plan to completely wipe them out, as recorded in the book Esther. 
                It is celebrated on the 14th of Adar (Hebrew month from late-winter to early-spring). To celebrate, Jewish people reread the story, donate and distribute gift.
            </p>
        </div>,
        img: require("../media/judaism/festivals/purim.jpg") 
    },
    'Passover':
    {
        text:
        <div class="space-y-3">
            <p>
                Passover or Pesach references the deliverance of the Jewish people from the Egyptians, specifically the final plague, which was the angel of death. The festival itself
                is typically held for a week in April. Jewish people eat only unleavened bread to match the pace at which they escaped Egypt. Celebration is done with singing, food, and a retelling
                or reacting of the Exodus story.
            </p>
        </div>,
        img: require("../media/judaism/festivals/passover.jpg") 
    },
    'Shavuot':
    {
        text:
        <div class="space-y-3">
            <p>
                Shavuot commemorates Moses receiving the Ten Commandments from God on Mount Sinai after they escaped from the Egyptians. It is typically celebrated in the summer and features the decoration of synagogues with many flowers.
            </p>
        </div>,
        img: require("../media/judaism/festivals/shavuot.jpg") 
    },
    'Sukkot':
    {
        text:
        <div class="space-y-3">
            <p>
                During Sukkot, Jewish people recount their lives wandering in the wilderness as they searched for the Promised Land after escaping from the Egyptians. Specifically, they recreate the tradition of building huts
                for shelter and decorating them with autumn fruits. Overall, this holiday is considered an Autumn Harvest Festival.
            </p>
        </div>,
        img: require("../media/judaism/festivals/sukkot.jpg") 
    },
    'Hanukkah':
    {
        text:
        <div class="space-y-3">
            <p>
                Hanukkah commemorates the Maccabean revolt, in which the Jewish people temporarily retook the Temple. It is said a candle burned for eight days instead of one, hence, the festival lasts eight days.
                During Hanukkah, a candle is lit every day on the Menorah.
            </p>
        </div>,
        img: require("../media/judaism/festivals/hanukkah.jpg") 
    },
    'Rosh Hashanah & Yom Kippur':
    {
        text:
        <div class="space-y-3">
            <p>
                These holidays are considered high holy days in the Jewish calendar. Rosh Hashanah is considered the new year in the Jewish calendar, however, it lasts two days.
                However, the Saturday before Rosh Hashanah is the beginning of a ten-day period of repentence, which ends with Yom Kippur, the day of atonement. This is considered the 
                most solemn day in the Jewish Calendar, as Jewish people atone for their sins and fast for 25 hours.
            </p>
        </div>,
        img: require("../media/judaism/festivals/rosh.jpg") 
    },
};

function Festivals() {
    let [page, setPage] = useState('Purim');

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
    'Orthodox':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
            Orthodox Judaism interprets the Torah very literally, leaving no space for subjective interpretation. They hold fast to this principle because they believe the Torah is the direct “word of God”, which cannot be changed by human individuals, meaning it has not been modified in over 3000 years. This means only Kosher food can be eaten and traditional gender roles are maintained and other traditions present in the Torah are practiced. 
            </p>
        </div>,
        img: require("../media/judaism/sects/orthodox.jpg")
    },
    'Reform':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
                The reform movement has a very different viewpoint on the Torah, believing that Torah’s interpretation can change with each passing generation. This was one of the factors that led them to absorb as much German culture as possible, learning German instead of Yiddish and studying secular topics. Instead of using just Hebrew in services, local languages were used too. 
            </p>
        </div>,
        img: require("../media/judaism/sects/reform.jpg")
    },
    'Conservative':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
                The Conservative movement is the middle ground between the two. It is not as strict as Orthodox but not as “loose” as reformist Rather, it recognizes that humans are responsible for maintaining and passing on the Torah and as a result believe that it spreads to and through the people, meaning that change was possible. This means that they still practice services in Hebrew and preserve some other Jewish traditions but allows for flexible interpretation of Jewish law. 
            </p>
        </div>,
        img: require("../media/judaism/sects/conservative.jpg")
    },
    'Reconstructionist':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
                The most recent movement is the American-centered reconstructionist movement, which originated from the conservative sect. Rather than just seeking liberties like reformists, reconstructionists attempt to “translate” scripture not only from language to language but from time to time. They believe that Judaism is constantly evolving and that it must be adapted to the current society. Consequently, they believe “tradition has a vote but a veto”, believing tradition has a “say” but not absolute authority when it comes to practicing.
            </p>
        </div>,
        img: require("../media/judaism/sects/reconstruct.jpg")
    },
};

function Denominations() {
    let [page, setPage] = useState('Orthodox');

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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zUNpC9Vjftg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                Abraham
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                                Moses
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                                Judges, Kings & Prophets
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-4" data-hs-tab="#vertical-tab-with-border-4" aria-controls="vertical-tab-with-border-4" role="tab">
                                Exile & Diaspora
                            </button>
                        </nav>
                    </div>

                    <div class="ml-3">
                        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                            <div class="flex flex-row">
                                <div class="w-[45em] space-y-3 text-justify">
                                    <p>
                                        God made a covenant with Abraham consisting of two parts that developed into the basis for Judaism. Abraham lived in a polytheistic mesopotamian society but had received a revelation from a single, monotheistic God, saying to Abraham, “Go forth from your native land from your father’s house to the land that I will show you. I will make of you a great nation, And I will bless you;. I will make your name great, And you shall be a blessing” (Genesis 12:1-2). God instructed Abraham to establish and raise a nation in a special land. The two ideas that resulted from this were the belief that the Jews were God’s “chosen people” that would eventually inherit the “Promised Land”.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-2" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                            <div class="w-[45em] space-y-3 text-justify">
                                <p>
                                    In the time before the Ten Commandments and Moses, the covenant that existed between God and the Jews relied on an agreement for God to love humanity and humanity to reciprocate by only loving the single God, rather than several polytheistic ones. The introduction of the Ten Commandments ushered in a Mosaic period in which Jews were able to fulfill their part in the covenant by following God’s commandments.
                                </p>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-3" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                            <div class="w-[45em] space-y-3 text-justify">
                                <p>
                                    When the Israelites arrived in Canaan, the promised land, they needed some form of leadership. The first leadership structures formed were through “judges” (shofetim). The judges led the Jews through difficult times, helping form an identity for the Jews. Many years later, by 1000 BC the Jewish people began to demand a king out of fear, especially of the Philistines. The first King was Saul, who was succeeded by the most revered King in Jewish history, David. David established Jerusalem and expanded Jewish Imperialism to its highest point in history. David’s son Solomon was responsible for constructing the first temple, but would later die, causing the kingdom to be broken up into the North (Israel) and south (Judah), marking the end of the era of Kings. This would give rise to the prophets. In Judaism, a Prophet is a messenger of God. Hebrew prophets often warned the Jewish people of the consequences of disobeying their covenant with God. However, many prophets also predicted the future (prophesied) in other ways.
                                </p>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-4" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-4">
                            <div class="w-[45em] space-y-3 text-justify">
                                <p>
                                    The exile and diaspora had large impacts on Jewish independence and autonomy. In 586 BCE, Babylonian invaders captured Judah and destroyed the temple, even exiling 10000 Jewish community leaders to Babylon. Those who were exiled were unable to worship in the usual way, as they were separated from the Temple in Jerusalem. This gave rise to synagogues, which became more important when the temple was actually destroyed, and are still significant today. Rabbis, who were revered teachers also initially emerged during the exile. They allowed scripture to be understood by the masses, increasing the practice of Judaism. Furthermore, the exile also marked the beginning of the belief that a “Messiah” would emerge, delivering the Jews from captivity. Overall, the Jewish faith evolved from a tribal one to a worldy one.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6" />
                    <h1 class="text-4xl font-Unbounded font-bold text-left">Summary</h1>
                <div class="pt-6" />
                <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vW1wseGyR1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
            <div class="pt-4"/>
            <div class="grid grid-flow-row gap-5">
                <Card3 image={require("../media/judaism/shema.jpg")} title="Shema (Creed of faith)" text="“Hear, O Israel, The Lord is our God, the Lord is One.”"/>
                <div class="grid grid-flow-row grid-cols-2 -m-3">
                    <Pane>
                        <h1 class="text-2xl font-Unbounded font-bold text-left">5 Fundamental Concepts</h1>
                        <ul class="list-inside list-decimal">
                            <li> God Exists </li>
                            <li> There is only one God (Monotheism) </li>
                            <li> God is responsible for creation, the world is temporary </li>
                            <li> Only one universe exists </li>
                            <li> God cares for all of creation </li>
                        </ul>
                    </Pane>
                    <Pane>
                        <h1 class="text-2xl font-Unbounded font-bold text-left">Thirteen Articles of Faith</h1>
                        <p>
                            From Maimonides, a philosopher. Only three of the thirteen articles are accepted absolutely:
                        </p>
                        <ul class="list-inside list-decimal">
                            <li> There is one God </li>
                            <li> Good is perfect Unity </li>
                            <li> Good is immaterial </li>
                        </ul>
                    </Pane>
                </div>
            </div>
        </Pane>
    );
}

function Judaism() {
    return (
        <div>
            <div class="h-20"></div>
            <div class="h-96 bg-judaism bg-cover bg-center flex justify-center items-center">
                <h1 class="text-center font-Unbounded font-[700] text-8xl text-gray-100 drop-shadow-lg z-50">Judaism</h1>
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

export default Judaism