import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
<div className="fixed top-0 left-0 z-40 w-28 h-screen flex flex-col justify-evenly pt-4 pb-4 px-5 text-lg backdrop-blur bg-neutral-900/30">
<Link href="/"><i className="fi fi-rr-user"></i></Link>
        <h1 className='me-5'>Contato</h1>
   <Link href="/login">     <div className='flex'>
        <Image className='rounded-full me-4'
      src="/avatar.jpg"
      width={30}
      height={30}
      alt="Picture of the author"
    />
            <h1>Perfil</h1>
        </div></Link>
        
</div>
    )
}