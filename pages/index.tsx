import Head from 'next/head'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
      <div className="container p-10 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
          <Head>
              <title>Jotasilvadev Portfólio</title>
              <meta
                  name="description"
                  content="Portfólio de João Silva | Jotasilvadev"
              />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex justify-center flex-col items-center gap-y-6 shadow-xl bg-slate-400 p-5 rounded-xl">
              <img
                  src="https://i.ibb.co/6Yz5jmv/Whats-App-Image-2023-03-20-at-22-49-41.jpg"
                  alt="Foto João Paulo da Silva"
                  className="w-64 h-64 p-2 object-cover rounded-full"
              />
              <h1 className="p-2 text-4xl text-center text-slate-100">
                  João Silva
              </h1>
              <h2 className="p-2 text-3xl text-center text-slate-200">
                  Desenvolvedor Front-End
              </h2>
              <div className="p-2 flex text-5xl gap-x-8 text-slate-600">
                  <a
                      className="hover:opacity-25 ease-in duration-200"
                      href="https://github.com/jotasilvadev"
                  >
                      <FaGithub />
                  </a>
                  <a
                      className="hover:opacity-25 ease-in duration-200"
                      href="https://www.linkedin.com/in/jotasilvadev/"
                  >
                      <FaLinkedin />
                  </a>
                  <a
                      className="hover:opacity-25 ease-in duration-200"
                      href="https://discord.com/users/Jotasilva#8909"
                  >
                      <FaDiscord />
                  </a>
              </div>
              <Link href="/projetos">
                  <p className="text-3xl ease-in duration-200 bg-slate-200 py-2 px-5 hover:bg-slate-300  rounded-xl shadow-lg text-slate-500">
                      Projetos
                  </p>
              </Link>
          </div>
      </div>
  );
}
