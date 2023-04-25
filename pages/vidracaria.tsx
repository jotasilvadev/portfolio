import Link from "next/link";
import { ImExit } from "react-icons/im";

export default function Githubapi() {
    return (
        <div className="container p-10 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
            <div className="flex justify-center flex-col items-center gap-y-2 shadow-black shadow-md border-slate-300 border-4 bg-slate-400 p-5 rounded-xl">
                <Link href="/projetos">
                    <div className="text-4xl text-slate-600 hover:text-orange-100 ease-in duration-1000">
                        <ImExit />
                    </div>
                </Link>
                <a
                    className="items-center flex flex-col"
                    href="https://www.silviovidracaria.com/"
                    target="_blank"
                >
                    <div className="w-64 text-slate-800">
                        <h2 className="text-2xl font-bold text-slate-700 text-center">
                            Silvio Vidraçaria
                        </h2>
                        <p className="text-justify mb-2">
                            Site para a empresa Silvio Vidraçaria, realizado
                            utilizando NEXT.js e Tailwind, hospedagem e domínio
                            realizados no AWS, otimização do SEO e consulta no
                            google search engine, além de anúncios no google
                            ads.
                        </p>
                    </div>
                    <img
                        className="rounded-3xl shadow-xl w-52 md:w-60 xl:w-64"
                        src="https://i.ibb.co/zhkkNRh/silviovidracaria.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}