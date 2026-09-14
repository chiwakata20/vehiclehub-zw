import Link from "next/link"; import {ArrowRight} from "lucide-react";
export function SellerCta(){
    return <section className="px-4 py-16 sm:px-6">
             <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-cyan-400 px-6 py-12 sm:px-12">
                <div className="absolute -right-16 -top-16 size-64 rounded-full border-45px border-white/20"/>
                <div className="relative max-w-2xl">
                    <p className="font-black uppercase tracking-wider text-slate-700">Reach serious importers</p>
                     <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Turn your dream car into reality with our trusted vehicle import service</h2>
                     <p className="mt-4 max-w-xl text-slate-700">Import quality vehicles with confidence and enjoy reliable delivery across Zimbabwe.</p>
                     <Link href="/vehicle-imports" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-bold text-white">Lear More <ArrowRight size={18}/></Link>
                     </div>
                     </div>
            </section>}
