'use client'
import Image from 'next/image'
import Header from './components/header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='absolute -z-50'>
        <Image src="/images/peakybanner.png"
        width={1920}
        height={1080}
        alt='banner parasite'></Image>
      </div>
    <main className="flex flex-col p-14 ms-16 overflow-hidden">
    <section>
      
      <div className='flex justify-between z-50'>
        <h1 className='font-bold text-3xl z-50'>Bem vindo, Usuário</h1>
        <h1 className='font-bold text-3xl z-50 text-red-600'>PedroFlix</h1>
      </div>
      <div className='z-50 mt-80 w-1/3 flex flex-col gap-3'>
        <h1 className='text-4xl'>Peaky Blinders</h1>
        <div className='flex gap-3'>
          <div className='flex'>
          <img src="/images/starred.png" width="20px"></img>
          <img src="/images/starred.png" width="20px"></img>
          <img src="/images/starred.png" width="20px"></img>
          <img src="/images/starred.png" width="20px"></img>
          <img src="/images/starw.png" width="20px"></img>
          </div>
          
          <span>16</span>
          <span>4 Temporadas</span>
        </div>
        <span>Uma notória gangue da Inglaterra de 1919 ascende no submundo liderada pelo cruel Tommy Shelby, um criminoso disposto a subir na vida a qualquer preço.</span>
        <div className='gap-2 flex'>
          <button className='bg-red-600 px-3 py-1 hover:bg-red-700'>Assistir</button>
          <button>Adicionar na lista</button>
        </div>
      </div>
      <h1 className='mb-2 text-2xl mt-10 z-50 font-bold'>Lançamentos da Semana</h1>
      <div className='flex gap-5 flex-row z-50 overflow-x-scroll p-5 transition-all'>

          <Image
          className='transition-all z-50 hover:scale-110 shrink-0'
          width={176}
          height={288}
          alt="a"
          src="/images/poster1.jpg"
          ></Image>
       
          <Image
          className='transition-all hover:scale-110 shrink-0'
          width={176}
          height={288}
          alt="a"
          src="/images/poster2.jpg"
          ></Image>
        
        <Image
          className='transition-all hover:scale-110 shrink-0'
          width={176}
          height={288}
          alt="a"
          src="/images/poster3.jpg"
          ></Image>
        <div className='bg-slate-500 w-44 h-72 shrink-0'></div>
        <div className='bg-white w-44 h-72 shrink-0'></div>
        <div className='bg-slate-500 w-44 h-72 shrink-0'></div>
        <div className='bg-white w-44 h-72 shrink-0'></div>
        <div className='bg-slate-500 w-44 h-72 shrink-0'></div>
        <div className='bg-white w-44 h-72 shrink-0'></div>
      </div>
      <h1 className='mb-2 mt-10 text-2xl font-bold'>Lançamentos da Semana</h1>
      <div className='flex gap-5 flex-row overflow-x-scroll p-5 transition-all'>

          <Image
          className='transition-all hover:scale-110 shrink-0'
          width={176}
          height={288}
          alt="a"
          src="/images/poster1.jpg"
          ></Image>
       
          <Image
          className='transition-all hover:scale-110 shrink-0'
          width={176}
          height={288}
          alt="a"
          src="/images/poster2.jpg"
          ></Image>
        
        <Image
          className='transition-all hover:scale-110 shrink-0'
          width={176}
          height={288}
          alt="a"
          src="/images/poster3.jpg"
          ></Image>
        <div className='bg-slate-500 w-44 h-72 shrink-0'></div>
        <div className='bg-white w-44 h-72 shrink-0'></div>
        <div className='bg-slate-500 w-44 h-72 shrink-0'></div>
        <div className='bg-white w-44 h-72 shrink-0'></div>
        <div className='bg-slate-500 w-44 h-72 shrink-0'></div>
        <div className='bg-white w-44 h-72 shrink-0'></div>
      </div>

      
    </section>
    </main>
    </>
  )
}
