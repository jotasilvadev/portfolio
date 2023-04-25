import Link from "next/link";
import { ImExit } from "react-icons/im";

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
                    href="https://main.dsqkke435l193.amplifyapp.com/"
                    target="_blank"
                >
                    <div className="w-64 text-slate-800">
                        <h2 className="text-2xl font-bold text-slate-700 text-center">
                            Cat Blog
                        </h2>
                        <p className="text-justify">
                            Projeto realizado como teste técnico. Essa aplicação
                            é uma front-end desenvolvida para interagir com uma
                            API RESTful que exibe posts de um blog e seus
                            comentários, além do nome e contato dos escritores
                            do blog.
                        </p>
                    </div>
                    <img
                        className="rounded-3xl shadow-xl w-64"
                        src="https://i.ibb.co/Z20hWWJ/Screenshot-1.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}
