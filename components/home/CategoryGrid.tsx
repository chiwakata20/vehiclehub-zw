import Link from "next/link"; import {Car,Truck,BriefcaseBusiness,Leaf,Sparkles} from "lucide-react";
const categories=[
    ["SUVs",Car],
    ["Pickup trucks",Truck],
    ["Fuel savers",Leaf],
    ["Commercial",BriefcaseBusiness],
    ["Luxury",Sparkles]
];





export function CategoryGrid(){
    return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between"><div>
            <p className="eyebrow">Find your fit</p>
            <h2 className="section-title">Shop by category</h2>
            </div>
            <Link href="/vehicles" className="hidden text-sm font-bold text-cyan-700 sm:block">
            View all vehicles →
            </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">{categories.map(([name,Icon])=><Link key={name as string} href={`/vehicles?type=${name}`} className="group flex min-h-28 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 hover:border-cyan-400 hover:bg-cyan-50">
              <Icon className="text-cyan-600"/><strong className="text-slate-900">{name as string}</strong></Link>)}</div>
              </section>}
