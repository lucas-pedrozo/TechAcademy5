import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import imageDev from '@/assets/image/lucas.jpg';
import imageDev2 from '@/assets/image/leonado.png';
import logoGit from "@/assets/icons/github.svg"


function About() {

    useEffect(() => {
        AOS.init({ duration: 500 });
    })

    const styleContainer = "flex flex-col min-[700px]:flex-row gap-5 || bg-white/10 backdrop-blur-lg rounded-3xl border-1 border-white/50 || p-2.5 || text-center  min-[700px]:text-start ";

    return (
        <main className="max-w-[1220px] || py-14 px-2.5 m-auto">
            <h2 className="text-center text-4xl font-bold || drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" data-aos="fade-up" >
                Website developers
            </h2>

            <section className='py-15 || flex flex-col gap-5'>
                <div className={`${styleContainer}`} data-aos="fade-up">
                    <img src={imageDev} alt="Lucas Pedrozo" title='Lucas Pedrozo' className='w-72 rounded-2xl m-auto ' />

                    <div>
                        <h3 className='text-3xl font-bold || pb-2.5'>Lucas Pedrozo | Developer Front-End</h3>
                        <p className='text-[14px]'>Trabalho como Freelancer em Edição de Vídeos, Motion Designer e Técnico Agropecuário. Atualmente estou estudando programação com o curso de TADS em campo mourão, meu destino final de nessa área é o Front-End.
                            Tenho uma formação em Técnico Agropecuário, 18 cursos na Área do audiovisual, Formado em Técnico de manutenção de celulares e hardware e estou realizando minha Graduação em TADS.
                        </p>

                        <div className=' flex justify-center min-[700px]:justify-start || pt-10'>

                            <a href="https://github.com/lucas-pedrozo/TechAcademy5.git" className="flex items-center gap-1.5 || px-6 py-2.5 rounded-full || font-semibold || shadow-[0_0_8px_rgba(22,186,203,0.4)] hover:shadow-[0_0_10px_rgba(22,186,203,1)] transition duration-300"
                                style={{ backgroundColor: '#6900e2', backgroundImage: 'linear-gradient(135deg, #6900e2 0%, #00e2bd 100%)' }}>
                                <img src={logoGit} alt="github" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${styleContainer}`} data-aos="fade-up">
                    <img src={imageDev2} alt="Lucas Pedrozo" title='Lucas Pedrozo' className='w-72 rounded-2xl m-auto' />

                    <div>
                        <h3 className='text-3xl font-bold || pb-2.5'>Leonardo Nunes | Developer Back-End</h3>
                        <p className='text-[14px]'>Olá, Sou Leonardo, também conhecido como SrVertex.
                            Desenvolvedor Junior com foco em WEB e desenvolvimento Java. Minha jornada inicia em 2019 com desenvolvimento de conteúdo de MODS para jogos, tendo nesse hobbie despertado o interesse pela área de programação e hoje assim sigo. Nessa área desapertei diversas competências, como Photoshop, CorelDRAW, Blender, Autodesk Maya, SolidWorks, Cinema4D, KeyShot, Substance Painter, Unreal, entre outras</p>

                        <div className='flex justify-center min-[700px]:justify-start || pt-10'>

                            <a href="https://github.com/lucas-pedrozo/TechAcademy5.git" className="flex items-center gap-1.5 || px-6 py-2.5 rounded-full || font-semibold || shadow-[0_0_8px_rgba(22,186,203,0.4)] hover:shadow-[0_0_10px_rgba(22,186,203,1)] transition duration-300"
                                style={{ backgroundColor: '#6900e2', backgroundImage: 'linear-gradient(135deg, #6900e2 0%, #00e2bd 100%)' }}>
                                <img src={logoGit} alt="github" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;