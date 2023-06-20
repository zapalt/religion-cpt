import { Link } from 'react-router-dom';

function NavbarElement({ name, img, link }) {
    return (
        <Link className="btn" to={"religion-cpt" + link} class="
        py-1 px-5 rounded-full border-2 border-transparent hover:border-c1-400/20
        ease-out-expo duration-[0.4s]
        hover:scale-[1.05 hover:text-c1-400 
        active:scale-[0.95] 
        flex flex-row items-center gap-4
        text-c1-300 font-Unbounded
        ">
            {img}
            {name}
        </Link>
    );
}

function Navbar() {
    return (
        <span class="fixed w-full top-0 flex flex-nowrap h-20 bg-c1-100/90 backdrop-blur-md shadow-xl shadow-c1-400/10 z-50">
            <div class="flex gap-4 flex-nowrap p-4 mr-auto">
                <NavbarElement class="w-[4rem] justify-self-start"
                    name={" "}
                    img={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" /></svg>}
                    link={"/"}
                >
                </NavbarElement>
                <NavbarElement name={"Judaism"} link={"/Judaism"}></NavbarElement>
                <NavbarElement name={"Christianity"} link={"/Christianity"}></NavbarElement>
                <NavbarElement name={"Islam"} link={"/Islam"}></NavbarElement>
            </div>
            <span class='flex items-center pl-3 text-c1-400'>
                <h1 class="p-2rtext-white font-Unbounded text-base text-right pr-10">World Religions<br></br>Guide</h1>
            </span>
        </span>
    );
}

export default Navbar;