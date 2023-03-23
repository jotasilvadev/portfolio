import Link from "next/link";
import { ImExit } from "react-icons/im"

export default function Pokeapi() {
    return (
        <div className="container p-10 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
            <div className="flex justify-center flex-col items-center gap-y-2 shadow-black shadow-md border-slate-300 border-4 bg-slate-400 p-5 rounded-xl">
                <Link href="/projetos">
                    <div className="text-4xl text-slate-600 hover:text-orange-100 ease-in duration-1000">
                        <ImExit />
                    </div>
                </Link>
                <a
                    className="flex flex-col gap-y-2"
                    href="https://main.d3dwmzmm1q71g2.amplifyapp.com/"
                >
                    <div className="w-64 text-slate-800">
                        <h2 className="text-2xl font-bold text-slate-700 text-center">
                            Pokédex
                        </h2>
                        <p className="text-justify">
                            Projeto realizado com React e consumindo a Poke Api
                            para criação de uma pokédex.
                        </p>
                    </div>
                    <img
                        className="rounded-3xl shadow-xl w-64"
                        src="https://i.ibb.co/XszHbVd/pokedex.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}
