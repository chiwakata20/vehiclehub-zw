import Link from "next/link"; import {CarFront,MapPin,Phone,Mail} from "lucide-react";




export function SiteFooter(){
    return <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8"><div>
            <div className="mb-5 flex items-center gap-2 text-xl font-black text-white"><CarFront className="text-cyan-400"/> VehicleHub</div>
            <p className="max-w-xs text-sm leading-7 text-slate-400">Helping Zimbabweans find quality vehicles from trusted sellers with clearer information and faster contact.</p>
            </div>
            <FooterColumn title="Explore" links={[["Browse vehicles","/vehicles"],["Sell your car","/sell"],["Saved vehicles","/saved"]]}/>
            <FooterColumn title="Company" links={[["About us","/about"],["Contact","/contact"],["Buyer safety","/buyer-safety"]]}/><div>
                <h3 className="mb-5 font-bold text-white">Get in touch</h3>
                <div className="space-y-4 text-sm">
                    <p className="flex gap-3"><MapPin size={18} className="text-cyan-400"/>Harare, Zimbabwe</p>
                    <p className="flex gap-3"><Phone size={18} className="text-cyan-400"/>+263 78 537 5445</p>
                    <p className="flex gap-3"><Mail size={18} className="text-cyan-400"/>chiwakatakevin@gmail.com</p>
                    
                </div>
                </div>
                </div>
            <div className="border-t border-slate-800 px-4 py-6 text-center text-sm text-slate-500">© 2026 VehicleHub Zimbabwe. All rights reserved.</div>
            </footer>}






function FooterColumn({title,links}:{title:string;links:string[][]}){return <div><h3 className="mb-5 font-bold text-white">{title}</h3><div className="space-y-3">{links.map(([label, href])=><Link key={`${label}-${href}`} href={href} className="block text-sm text-slate-400 hover:text-cyan-400">{label}</Link>)}</div></div>}
