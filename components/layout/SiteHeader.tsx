"use client";
import Link from "next/link"; import {Menu,X,Heart,CarFront,MessageCircle} from "lucide-react"; import {useState} from "react"; import {navigation} from "@/data/navigation";

export function SiteHeader(){const[open,setOpen]=useState(false);
    return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><Link href="/" className="flex items-center gap-2.5" aria-label="VehicleHub Zimbabwe home">
                   <span className="grid size-10 place-items-center rounded-xl bg-cyan-400 text-slate-950"><CarFront size={23}/></span> 
                   <span className="text-xl font-black tracking-tight text-slate-950">Chikwangwani<span className="text-cyan-600 ">Motors</span></span>
                   </Link><nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{navigation.map(i=><Link key={i.href} href={i.href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">{i.label}</Link>)}</nav>
                     <div className="hidden items-center gap-2 lg:flex"><Link href="/saved" className="grid size-10 place-items-center rounded-full text-slate-600 hover:bg-slate-100" aria-label="Saved vehicles"><Heart size={19}/></Link><a href="https://wa.me/263785375445" className="inline-flex h-11 items-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white hover:bg-slate-800"><MessageCircle size={17}/> WhatsApp us</a></div>
                       <button onClick={()=>setOpen(!open)} className="grid size-11 place-items-center rounded-xl bg-slate-100 lg:hidden" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">{navigation.map(i=><Link onClick={()=>setOpen(false)} key={i.href} href={i.href} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100">{i.label}</Link>)}</nav>}</header>}
