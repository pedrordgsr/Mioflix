import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
<div className="fixed top-0 left-0 z-40 w-16 h-screen flex flex-col justify-evenly pt-4 pb-4 px-5 text-lg backdrop-blur bg-neutral-900/30">
<Link href="/"><img src="/images/home.png"></img></Link>
<Link href="/"><img src="/images/menu.png"></img></Link>        
   <Link href="/login">     <div className='flex'>
        <Image className='rounded-full me-4'
      src="/avatar.jpg"
      width={32}
      height={32}
      alt="Picture of the author"
    />
        </div></Link>
        
</div>
    )
}