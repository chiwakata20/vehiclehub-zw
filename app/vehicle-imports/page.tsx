import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CarFront,
  CheckCircle2,
  FileCheck2,
  Search,
  ShieldCheck,
  Ship,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vehicle Import Services | VehicleHub Zimbabwe",
  description:
    "Get assistance sourcing, inspecting, shipping and importing quality vehicles into Zimbabwe.",
};

const services = [
  {
    title: "Vehicle sourcing",
    description:
      "We find vehicles that match your preferred make, model, year and budget.",
    icon: Search,
  },
  {
    title: "Pre-shipment inspection",
    description:
      "We help verify the vehicle's condition, mileage and documentation before shipment.",
    icon: ShieldCheck,
  },
  {
    title: "Shipping coordination",
    description:
      "We guide you through shipping arrangements and provide progress updates.",
    icon: Ship,
  },
  {
    title: "Documentation support",
    description:
      "Get help understanding the documents required for importing and clearing your vehicle.",
    icon: FileCheck2,
  },
];

const steps = [
  {
    number: "01",
    title: "Submit your request",
    description:
      "Tell us your preferred vehicle, budget and contact details.",
  },
  {
    number: "02",
    title: "Receive suitable options",
    description:
      "We identify available vehicles that match your requirements.",
  },
  {
    number: "03",
    title: "Approve your vehicle",
    description:
      "Review the vehicle information, condition and estimated costs.",
  },
  {
    number: "04",
    title: "Shipping and delivery",
    description:
      "We coordinate shipping and guide you through the vehicle collection process.",
  },
];

export default function VehicleImportsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.2),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
              <CarFront size={17} aria-hidden="true" />
              Vehicle import services
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Import your ideal vehicle with confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We help Zimbabwean buyers source, inspect, ship and import
              quality vehicles while keeping the process clear and
              manageable.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/vehicle-imports/request"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-400"
              >
                Request a vehicle
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Speak to our team
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-cyan-400" size={30} />
              <h2 className="text-2xl font-black text-white">
                Import assistance you can trust
              </h2>
            </div>

            <ul className="mt-7 space-y-4">
              {[
                "Vehicle options matched to your budget",
                "Condition and document verification support",
                "Clear estimated cost breakdown",
                "Shipping progress communication",
                "Guidance for Zimbabwean buyers",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-emerald-400"
                    size={19}
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              Our services
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Support throughout your import journey
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our team helps simplify the process from selecting a
              vehicle to preparing for its arrival in Zimbabwe.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Four simple steps
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-slate-50 p-6"
              >
                <span className="text-3xl font-black text-cyan-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-black text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-slate-950">
              <Calculator size={22} aria-hidden="true" />

              <p className="font-bold uppercase tracking-wider">
                Start your import request
              </p>
            </div>

            <h2 className="mt-3 max-w-3xl text-3xl font-black text-slate-950">
              Tell us the vehicle you need and your available budget.
            </h2>
          </div>

          <Link
            href="/vehicle-imports/request"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800"
          >
            Request a quotation
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}