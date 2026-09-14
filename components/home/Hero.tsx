import Link from "next/link"; import {ShieldCheck,ArrowRight} from "lucide-react"; import {VehicleSearch} from "@/components/vehicles/VehicleSearch";
export function Hero(){
       return <section className="relative overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 opacity-40">
                    <img src="https://avatars.mds.yandex.net/get-autoru-vos/9772983/b48d6291d7a6e1fb5ae050e0989de11a/1200x900" alt="" className="h-full w-full object-cover"/></div>
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#020617_5%,rgba(2,6,23,.88)_48%,rgba(2,6,23,.3))]"/>
                    <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
                        <div className="max-w-3xl">
                            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-300 backdrop-blur">
                              <ShieldCheck size={17}/> Trusted vehicles across Zimbabwe</p><h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Your next vehicle.<br/><span className="text-cyan-400">Found with confidence.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Browse verified cars, SUVs, pickups and commercial vehicles from sellers in Harare and across Zimbabwe.</p>
                              <div className="mt-8 flex flex-wrap gap-3"><Link href="/vehicles" className="inline-flex h-12 items-center gap-2 rounded-xl bg-cyan-400 px-6 font-extrabold text-slate-950 hover:bg-cyan-300">Browse vehicles <ArrowRight size={18}/></Link>
                                </div></div>
                                <div className="mt-12"><VehicleSearch/>
                                </div>
                                </div>
                </section>}
