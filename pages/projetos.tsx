import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Projetos() {
    return (
        <div className="container p-10 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
            <div className="flex justify-center flex-col items-center gap-y-6 shadow-black shadow-md border-slate-300 border-4 bg-slate-400 p-5 rounded-xl">
                <Link href="/">
                    <div className="text-4xl text-slate-600 hover:text-orange-100 ease-in duration-1000">
                        <FaHome />
                    </div>
                </Link>
                <h1 className="text-2xl text-center font-bold text-slate-700">
                    Projetos utilizando APIs diversas para buscar dados e
                    elaboração de layouts responsivos e modernos.
                </h1>
                <Link href="/pokeapi" className="w-3/4 sm:w-1/2">
                    <h1 className="text-center rounded-full ease-in duration-1000 hover:text-stone-700 hover:bg-slate-300 text-3xl p-3 bg-slate-600 text-slate-400">
                        POKÉDEX
                    </h1>
                </Link>
                <Link href="/githubapi" className="w-3/4 sm:w-1/2">
                    <h1 className="text-center rounded-full ease-in duration-1000 hover:text-stone-700 hover:bg-slate-300 text-3xl p-3 bg-slate-600 text-slate-400">
                        GITHUB
                    </h1>
                </Link>
                <Link href="/blogapi" className="w-3/4 sm:w-1/2">
                    <h1 className="text-center rounded-full ease-in duration-1000 hover:text-stone-700 hover:bg-slate-300 text-3xl p-3 bg-slate-600 text-slate-400">
                        BLOG
                    </h1>
                </Link>
            </div>
        </div>
    );
}