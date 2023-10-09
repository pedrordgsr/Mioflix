'use client'
import Image from 'next/image'
import Header from './components/header'

export default function Home() {
  return (
    <main className="flex flex-col p-14 ms-24 overflow-hidden">
    <section>
      <h1 className='mb-2 text-2xl font-bold'>Lançamentos da Semana</h1>
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
  )
}
