import Link from "next/link";
import { ImExit } from "react-icons/im";

export default function Githubapi() {
    return (
        <div className="container p-10 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
            <div className="flex justify-center flex-col items-center gap-y-2 shadow-xl bg-slate-400 p-5 rounded-xl">
                <Link href="/projetos">
                    <div className="text-4xl text-slate-600 hover:text-orange-100 ease-in duration-1000">
                        <ImExit />
                    </div>
                </Link>
                <a
                    className="items-center flex flex-col"
                    href="https://main.d2vudolrq1gmq2.amplifyapp.com/"
                >
                    <div className="w-64 text-slate-800">
                        <h2 className="text-2xl text-center">Github API</h2>
                        <p className="text-justify mb-2">
                            Buscador de usuários do Github, que fornece os 10
                            repositórios mais recentes utilizando a API do
                            Github.
                        </p>
                    </div>
                    <img
                        className="rounded-3xl shadow-xl w-52 md:w-60 xl:w-64"
                        src="https://i.ibb.co/VC2pRfF/github-2.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}
