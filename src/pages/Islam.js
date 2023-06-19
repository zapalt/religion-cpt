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
                        Islam is Chronologically the third monotheistic religion. It is the second largest world religion (1.9 billion adherents) and the fastest growing faith.
                        </p>
                    </div>
                </div>
                <div class="min-w-[20em]">
                    <Card image={kaaba} text={<div/>}>

                    </Card>
                </div>
            </div>
        </Pane>
    );
}

const stats = [
    {
        h1: '1.9',
        h2: 'BILLION',
        h3: <p>Adherents <br/> Worldwide</p>,
        src:
            <svg class="pb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
            </svg>
    },
    {
        h1: '231',
        h2: 'MILLION',
        h3: 'Highest Muslim population: Indonesia',
        src: <div class="p-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M352 0c53 0 96 43 96 96V416c0 53-43 96-96 96H64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V384c-17.7 0-32-14.3-32-32V32C0 14.3 14.3 0 32 0H64 352zm0 384H96v64H352c17.7 0 32-14.3 32-32s-14.3-32-32-32zM274.1 150.2l-8.9 21.4-23.1 1.9c-5.7 .5-8 7.5-3.7 11.2L256 199.8l-5.4 22.6c-1.3 5.5 4.7 9.9 9.6 6.9L280 217.2l19.8 12.1c4.9 3 10.9-1.4 9.6-6.9L304 199.8l17.6-15.1c4.3-3.7 2-10.8-3.7-11.2l-23.1-1.9-8.9-21.4c-2.2-5.3-9.6-5.3-11.8 0zM96 192c0 70.7 57.3 128 128 128c25.6 0 49.5-7.5 69.5-20.5c3.2-2.1 4.5-6.2 3.1-9.7s-5.2-5.6-9-4.8c-6.1 1.2-12.5 1.9-19 1.9c-52.4 0-94.9-42.5-94.9-94.9s42.5-94.9 94.9-94.9c6.5 0 12.8 .7 19 1.9c3.8 .8 7.5-1.3 9-4.8s.2-7.6-3.1-9.7C273.5 71.5 249.6 64 224 64C153.3 64 96 121.3 96 192z"/></svg>
            </div>
    },
    {
        h1: '7th',
        h2: 'Century',
        h3: <p>Introduced by<br/> Muhammad</p>,
        src: <div class="p-4 pb-33 pt-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0c33 0 64.6 6.3 93.6 17.7c7.4 2.9 11.5 10.7 9.8 18.4s-8.8 13-16.7 12.4c-4.8-.3-9.7-.5-14.6-.5c-114.9 0-208 93.1-208 208s93.1 208 208 208c4.9 0 9.8-.2 14.6-.5c7.9-.5 15 4.7 16.7 12.4s-2.4 15.5-9.8 18.4C320.6 505.7 289 512 256 512C114.6 512 0 397.4 0 256zM375.4 137.4c3.5-7.1 13.7-7.1 17.2 0l31.5 63.8c1.4 2.8 4.1 4.8 7.2 5.3l70.4 10.2c7.9 1.1 11 10.8 5.3 16.4l-50.9 49.6c-2.3 2.2-3.3 5.4-2.8 8.5l12 70.1c1.3 7.8-6.9 13.8-13.9 10.1l-63-33.1c-2.8-1.5-6.1-1.5-8.9 0l-63 33.1c-7 3.7-15.3-2.3-13.9-10.1l12-70.1c.5-3.1-.5-6.3-2.8-8.5L261 233.1c-5.7-5.6-2.6-15.2 5.3-16.4l70.4-10.2c3.1-.5 5.8-2.4 7.2-5.3l31.5-63.8z"/></svg>
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
    'Star/Crescent Moon':
    {
        text: <p>The star and crescent date back to the Roman Empire in the city of Byzantium. Despite not being Islamic, the crescent symbol was first adopted as homage to a hunt goddess, Diana. The star was later added as a tribute to Mary in 330 CE. When Byzantium (now Constantinople) became s Muslim region in 1453 CE, these symbols were kept, and other Muslim nations also adopted it.</p>,
        img: symbol1
    },
    'Shahadah Against Green Background':
    {
        text: <p>The Shahadah is often considered a more fitting representation of Islam by some because it better encapsulates the belief, as opposed to the crescent-star which are not not Islam-centric to begin with. The green background is argued to be more fitting because it was the Prophet Muhammad’s favourite colour, while the Shahadah is a direct way to display the profession of faith.</p>,
        img: symbol2
    },
};

function Symbols() {
    let [page, setPage] = useState('Star/Crescent Moon');

    const symbolSelect = Object.entries(symbols).map(([key, val], i) =>
        <a onClick={(ev) => {setPage(key); ev.preventDefault()}} class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
            {key}
        </a>
    )

    return (
        <Pane>
            <div class="flex flex-row gap-10">
                <div class="flex pb-8 gap-10">
                    <h1 class="text-4xl font-Unbounded font-bold">Symbols*</h1>
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
        title: "Quran",
        text: <div class="space-y-3 text-justify">
            <p>Muslims treat the Qur’an with reverence and respect because they believe that it is Allah’s untainted word, known as wahi. Gabriel and Muhammad were not responsible for the creation of the word, rather, the communication and recording, being an angel messenger and human messenger respectively. Therefore, to treat the Qur’an without respect is analogous to treating God without respect, which is a matter to be taken very seriously. This is why even translations of the Qur’an are not considered God’s word in true form because translation inevitably affects the messages communicated, despite trying to be faithful.</p>
        </div>
    },
    {
        title: "Hadith",
        text:
            <ul class="space-y-3 text-justify">
                <p>
                The Hadith, also known as the Sunnah, is the second most important source of Islamic Law. Unlike the Qur’an there are three types of Hadith, which are not directly from God’s word. There are Muhammad’s sayings, Muhammad’s actions and Muhammad’s approval of someone else’s actions. However, Hadith can be classified as infirm, weak, good and sound based on its various qualities as analysed by scholars. Overall, the Hadith is important because it clarifies practices and traditions outlined in the Qur’an to assist Muslims’ interpretation.
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
            <p class="font-SpaceGrotesk">
            The main sacred text is known as the Quran, which translates to “recitation”. It contains 23 years of revelations revealed to Muhammad by Gabriel. It Divided into 114 chapters (suras)
            
            </p>
            <div class="flex flex-row justify-center gap-10">
                {scriptureList}
            </div>
            <hr class="my-6 h-0.5 border-t-0 bg-gray-700/20" /> <div class="p-1"></div>

            <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/spfD8LkA8Kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </Pane>
    );
}

const milestones = {
    'Birth':
    {
        text: <p>As Muslim child is introduced to the faith as soon as possible, right after they are born in a ceremony known as the Adhan. In this ceremony, the newborn is washed and an elderly figure (or father) whispers the Adhan in the child’s right ear (a call to prayer). In the left ear, they also whisper the Iqamah, which is a command to rise and worship. More ceremonies, such as the Aqiqah are carried out as soon as seven days after the birth. The Aqiqah is naming-ceremony in which the father (or another elderly relative) reads from the Qur’an and announces a chosen name. This name is often one of Muhammad’s recommended names or a family name. As described, all of these traditions are carried out within a week after the child is born, showing how Muslim children are introduced to the faith at a very early age.</p>,
        img: birth
    },
    'Marriage':
    {
        text:
            <div>
                <p>
                    Muslim marriage is a union between man and woman, with the intention of promoting happiness & companionship, creating a family to please God. Often, the parents will contribute to the spouse selection process, however, the final decision to marry is made by the bride and groom. Once both spouses have decided to go through with marriage, a contract outlining wishes from both sides is created, outlining matters of both the relationship and lifestyle choices. For the marriage to finally carry through, there must be at least two other Muslim witnesses. Many hold their weddings at a mosque or at their home, where an imam/qadi formally solemnises the marriage.
                </p>
                <p>
                    In Western society, the idea of polygamy is controversial, however, it is permitted in Islam within certain guidelines. A Muslim man can marry up to four wives, but it must be done with the best intention of each wife in mind, with the consent of the current wives. However, monogamous marriages are still much more common than polygamous marriages. In the case of a marriage being unable to work out, divorce is a permissible, yet highly discouraged option by Allah himself.
                </p>
            </div>,
        img: marriage
    },
    'Death':
    {
        text: <p>
            In Islam, burials are meant to be done on the day of death. However, this cannot always be done due to autopsies, especially in modern society. As for the process of burial, attendees of the procession throw earth onto the grave underground while reciting various Day of Judgement passages from the Qur’an along with bystanders. For the three following days, mourning usually takes place, as it is believed that two angels question the deceased about their lives while still on earth.
           </p>,
        img: death
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
    'Ramadan Fast':
    {
        text:
        <div class="space-y-3">
            <p>
                Occurs during the 9th month in Islamic calendar, which is when the Quran revelation to Muhammad originally began.
                The fasts last for 29-30 and forbids eating, drinking and sex, ultimately building spiritual discipline.
            </p>
        </div>,
        img: ramadan
    },
    'Eid al-Fitr':
    {
        text:
        <div class="space-y-3">
            <p>
                Marks the end of the Ramadan fast on the first day of the tenth month, often celebratory. It represents the breaking of the fast and a time of spiritual renewal and joy. Pracitces include:
            </p>
            <ul class="list-disc list-inside">
                <li>Visiting friends</li>
                <li>Giving to the poor</li>
                <li>Eating a large meal</li>
                <li>Special presents given to children</li>
            </ul>
        </div>,
        img: eid1
    },
    'Eid-al-Adha':
    {
        text:
        <div class="space-y-3">
            <p>
                Known as the "Great Festival of Sacrifice", celebrated on the tenth day of the twelth month. It commemorates Abraham's preparedness to sacrifice Ismael when prompted by God.
            </p>
        </div>,
        img: eid2
    },
    'Milad ul-Nabi':
    {
        text:
        <div class="space-y-3">
            <p>
                Milad-Ul-Nabis is Muhammad's date of birth, on the twelth day of the third month. During this event, month-long celebrations are held.
            </p>
        </div>,
        img: milad
    },
    'Mi\'raj':
    {
        text:
        <div class="space-y-3">
            <p>
                Mi'raj marks the "Night Journey", when Muhammad was taken alongside Gabriel to different levels of heaven after travelling through Jerusalem. It occurs on the 27th of the seventh month, Rajab.
            </p>
        </div>,
        img: miraj
    },
    'Muharram (Shi\'as)':
    {
        text:
        <div class="space-y-3">
            <p>
                Shi'as observe Muharram within the first ten days of the Muslim New Year. It commemorates Ali's son, Husain's martyrdom in the battle of Karbala during 680 CE, as Shi'as believed Ali was the rightful leader at first rather than the other caliphs.
                However
            </p>
        </div>,
        img: muharram
    },
};

function Festivals() {
    let [page, setPage] = useState('Ramadan Fast');

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
    'Sunni':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
                The Sunnis are the largest sect of Islam, with about 85% of all Muslims being Sunni. They originated right from the death of Muhammad and strive to achieve consensus within the Muslim community for justness and equity within society. Aside from Muhammad, Sunnis also follow teachings from Hanafi, Shafi’i, Hanbali and Maliki.
            </p>
        </div>,
        img: sunni
    },
    'Shi\'a':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
                The Shi’ahs are the minority sect in Islam; although their presence is more defined in nations like Iran, they are a minority in Iraq, East Africa, Pakistan and India. Unlike the Sunnis, they believe Ali was Muhammad’s rightful successor as Caliph rather than Abu Bakr. This divide caused Shi’ahs to diverge from Sunnis, creating a political division that developed into a doctrinal one. They also believe that a series of Imams were appointed after the Prophet’s death to lead the Islamic community.The Shi’ahs are the minority sect in Islam; although their presence is more defined in nations like Iran, they are a minority in Iraq, East Africa, Pakistan and India. Unlike the Sunnis, they believe Ali was Muhammad’s rightful successor as Caliph rather than Abu Bakr. This divide caused Shi’ahs to diverge from Sunnis, creating a political division that developed into a doctrinal one. They also believe that a series of Imams were appointed after the Prophet’s death to lead the Islamic community.
            </p>
        </div>,
        img: shia
    },
    'Sufi':
    {
        text:
        <div class="space-y-3 leading-8">
            <p>
                The word ‘Sufi’ likely originated from the Arabic word for wool, ‘suf’. Thus, there is an association between sufi and the ascetic apparel worn by them. However, there is also belief that the word could have originated from the Arabic word for purity, “safa”.
            </p>
        </div>,
        img: sufi
    },
};

function Denominations() {
    let [page, setPage] = useState('Sunni');

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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-85dXjgMiSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                Muhammad's Life
                            </button>
                            <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                                After Muhammad
                            </button>
                        </nav>
                    </div>

                    <div class="ml-3">
                        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
                            <div class="flex flex-row">
                                <div class="w-[45em] space-y-3 text-justify">
                                    <span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Early Life</span>
                                    <p>
                                        Muhammad was born in Makkah in 570 CE. He was only six when his mother died, so he was taken care of by his paternal grandfather Abd al-Mutallib (head of Quraysh tribe, the most respected in Makkah), and later his uncle Abu Talib (a distinguished Quraysh merchant).
                                        As he grew, he developed beliefs that thought idolatry was bad, rooted in superstition and amorality.
                                    </p>
                                    
                                    <p>
                                        He married widow Khadijah when he was 20 (590 CE), she was 15 years older than him.
                                    </p>

                                    <div class="pt-3"/><span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Revelation</span>
                                    <p>
                                        In 610 during Ramadan, Muhammad was meditating on mount Hira when Angel Gabriel appeared to him in a revelation - this is regarded as the beginning of Islam. For the next 23 years, Muhammad received more revelations, which were assembled to create the Qur’an. They led Muhammad to preach in Makkah, where he was hated because the society followed idolatry, which he was against (even his own tribe)
                                    </p>

                                    <p>
                                        In 619, Khadijah (wife) and Abu Talib (uncle caretaker) both died in what is known as the “Year of Sorrow”. As he felt isolated and Makkans became hostile, he emigrated north to Yathrib in Medina, known as hijrah (migration). Before this, however, he experienced “Night Journey” and “Ascension”. Night Journey involved Gabriel riding a winged horse (Buraq) accompanying Muhammad from Makkah to Jerusalem. They both ascended through the seven heavens (Mi’raj)
                                    </p>

                                    <div class="pt-3"/><span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Early Spread</span>
                                    <p>
                                        God instructed Muhammad to move to Yathrib in 622 CE. This is where the Muslim calendar starts, known as hijrah. The city was known as al-Madinah “the city” by locals. Muhammad’s impact was so profound that some even referred to it as Madinah al-Nabi “City of the Prophet.”
                                        Muhammad built a large Muslim community, and soon Madinah was united under the banner of Islam, under Muhammad’s leadership. However, the Quraysh south in Makkah did not like this, as it felt as Islam was coming to eliminate their venerated ancestral tradition. This causes 3 major conflicts on the battlefield:
                                        <div class="pt-3"/><span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Conflict</span>
                                        <div class="pt-2" />
                                        <ul class="list-disc list-inside">
                                            <li>
                                                Badr - Muhammad’s army of 313 defeats Makkah’s army of 1000
                                            </li>
                                            <li>
                                                Makkans return with 3000 and win, but do not push three kilometers into Madinah
                                            </li>
                                            <li>
                                                Makkans return with an army of 10 000, but Muhammad and his men build a trench around Madinah, which stops the Makkans from taking the city due to the trench/hot desert climate.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Up to 630 CE, the rate of conversion to Islam grew, so Muhammad eventually led a group of 10 000 into Makkah (Conquest of Makkah). This time, only a few opposed his return. Muhammad brought up the fact that many Makkans persecuted him, but then forgave all of them on the spot. He appointed a Makkan chief to rule to city and left, not leaving a single soldier.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="vertical-tab-with-border-2" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
                            <div class="w-[45em] space-y-3 text-justify">
                                <div class="pt-3"/><span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Late Life</span>
                                <p>
                                    In 632 CE, Muhammad, accompanied by 140 000 Muslims visited Makkah for his final pilgrimage. He traveled south to Makkah and stopped at Mount Arafat, to deliver his “Farewell Sermon”. He outlined the main ideas and beliefs of Islam in this sermon. He also offered forgiveness for all who had done wrong in the past.
                                </p>
                                <p>
                                    He then returned north to Madinah, where he came down with a fever. Despite leading prayer in mosques, he fell more ill and died in 632, aged 63. After his death, a “caliph” or successor was needed.
                                </p>

                                <div class="pt-3"/><span class="bg-blue-100 text-blue-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Caliphate & Schism</span>
                                <div class="grid grid-flow-row grid-cols-2 text-left gap-y-3 gap-x-3">
                                    <Card3 image={require("../media/islam/quran.jpg")} title="Abu Bakr (Caliph 632-634)" text="Compiled Qur’an, solidified leadership, and suppressed those who saw Muhammad’s death as an opportunity to oppose Islam, continued Muslim expansion."/>
                                    <Card3 image={require("../media/islam/expansion.jpg")} title="Umar (Caliph 634-644)" text="Continued expansion of Islam to Syria, Palestine, Egypt & Persia. He was eventually assasinated, the reason why is disputed."/>
                                    <Card3 image={require("../media/islam/uthman.jpg")} title="Uthman (Caliph 644-656)" text="Expanded west across northern Africa, east to northern India, and to the border of China. He was criticized for having favorites (his relatives), despite it never being proven. However, he was assassinated in the end (believed to be victim of his own kindness)"/>
                                    <Card3 image={require("../media/islam/ali.jpg")} title="Ali (656-661)" text="Assumed leadership of divided community, forced to defend his authority against Umayyad family (first time Muslim rose against Muslim). Assassinated in 661."/>
                                </div>
                                <p>
                                    Unlike the Sunnis, Shi'ites believe Ali was Muhammad’s rightful successor as Caliph rather than Abu Bakr. This divide caused Shi’ahs to diverge from Sunnis, creating a political division that developed into a doctrinal one.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6" />
                    <h1 class="text-4xl font-Unbounded font-bold text-left">Summary</h1>
                <div class="pt-6" />
                <div class="aspect-w-16 aspect-h-9 overflow-clip rounded-xl">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TpcbfxtdoI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <Card3 image={throne} title="1. Attributes of God" text="One all-powerful God as outlined by “the Throne” passage in the Quran. Allah is defined as omniscient, omnipotent and omnipresent."/>
                <Card3 image={righteous} title="2. Righteous Activity" text="Partake in righteous actions only: Righteousness is to be ingrained into the very spiritual, intellectual and physical lives of adherents"/>
                <Card3 image={creation} title="3. Muslim Creation" text="All creation is inherently Muslim, however, Allah has only provided the ability to submit to Him to humans."/>
                <Card3 image={baby} title="4. Babies are born Muslim" text="This includes children, who are born sinless and Muslim. However, they will be able to make their own choice of faith as they age."/>
                <Card3 image={soul} title="5. Soul" text="The body of human beings are vessels of an immaterial soul, which continues to exist after death."/>
                <Card3 image={call} title="6. Call to Salvation" text="The call to salvation is universal; there are no barriers erected based on societal identity/class. Rather, greater importance is placed in religious piety."/>
            </div>
        </Pane>
    );
}

function Practices()
{
    return (
        <Pane>
            <h1 class="text-4xl font-Unbounded font-bold text-left">Practices</h1>
            <div class="grid grid-flow-row gap-5">
                <Card3 image={halal} title="Dietary Law: Halal" text="Halal is a lifestyle, it literally translates to what is lawful or permissible. However, it can be used to refer to foods permissible for Muslims to consume. How animals are treated is considered. Are they given sufficient food/water, are they treated humanely? As Imran Uddin put it, “Halal is not just a slaughtering process, but the whole gamut of life itself”."/>
                <Card3 image={environment} title="Caring for the Environment" text="Based on the central concept of Islam, “Tawhid”, the Unity of God, Muslims are expected to maintain unity with creation. This includes the rest of mankind and Allah’s creation. We are expected to be judged based on how well we maintain balance and unity on the central path, that is, Islam. Other than Tawhid, two other main pillars exist, Khalifah (Trusteeship) and Akhirah (Accountability). These led the prophet Muhammad to say “Whoever plants a tree and diligently looks after it until it matures and bears fruit is rewarded”. Based on these principles, muslims are responsible for the world/environment, the creation of Allah. Rather than having festivals to commemorate harvest/thanksgiving, Muslims live a life of continuous thanks to Allah for his creation. This makes more sense as the Muslim year is 354 days rather than 365, meaning that compared to the sun-based year, Islamic festivals/celebrations would take place at different times every year."/>
            </div>
            <div class="pt-8"/>
            <h1 class="text-4xl font-Unbounded font-bold text-left">5 Pillars</h1>
            <p>
                The core duties/practices of adherents are outlined in the Five Pillars of Islam.
            </p>
            <div class="grid grid-flow-row gap-5">
                <Card title="Shahadah" text="Two facts affirming that there is no god by God (Allah), and Muhammad is a Messenger of God. These two beliefs act as a foundation for all other Islamic beliefs.”."/>
                <Card title="Salat" text="Mandatory prayer five times throughout the day. The times are before dawn, noon, late afternoon, after sunset and after-dark.  The movements and statements uttered are a part of Salat. Before prayers, wudu, a ritual cleansing must be performed. However, Muslims must go through a whole-body cleansing known as ghusl if they have had sex, menstruated, given birth, or had other various bodily discharges."/>
                <Card title="Zakat" text="Sincere almsgiving for the sake and in the name of God. Islamic beliefs outline that 2.5% of surplus income is expected to be given in alms annually."/>
                <Card title="Sawm" text="Mandatory fasting, such as in festivals like Ramadan. During Ramadan, eating, drinking and sex is forbidden from dawn to dusk. It is a worship form, focusing on God’s benevolence while abstaining from personal desires to remain focused and develop spiritual purity. There are appropriate exemptions for those who need it (young children, old & inform, on a journey, etc.) It ends with the one day festival, Eid al-Fitr."/>
                <Card title="Hajj " text="Mandatory pilgrimage to Makkah for those who have the health and means to make it. The last day of hajj commemorates when God asked Abraham to sacrifice Ismael at Mina. Seven pebbles are thrown by each pilgrim at satan, represented by three tall stone pillars."/>
            </div>
        </Pane>
    );
}

function Islam() {
    return (
        <div>
            <div class="h-20"></div>
            <div class="h-96 bg-islam bg-cover bg-center flex justify-center items-center">
                <h1 class="text-center font-Unbounded font-[700] text-8xl text-c2-100 drop-shadow-lg z-50">Islam</h1>
            </div>
            <div class="flex flex-col items-center">
                <div class="mt-5"> <Overview /> </div>
                <div class="pt-0 min-w-[50em]"> <Stats /> </div>
                <div> <Beliefs /> </div>
                <div> <Practices /> </div>
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

export default Islam