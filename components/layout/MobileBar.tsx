import Link from "next/link"; import {Home,Search,CirclePlus,Heart} from "lucide-react";


export function MobileBar(){
     return <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-slate-200 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
              <MobileItem href="/" label="Home" icon={<Home/>}/>
              <MobileItem href="/vehicles" label="Search" icon={<Search/>}/>
              <MobileItem href="/sell" label="Sell" icon={<CirclePlus/>}/>
              <MobileItem href="/saved" label="Saved" icon={<Heart/>}/>
              </nav>}


function MobileItem({href,label,icon}:{href:string;label:string;icon:React.ReactNode}){return <Link href={href} className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-slate-600 [&_svg]:size-5">{icon}{label}</Link>}
