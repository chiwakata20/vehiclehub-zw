import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  CarFront,
  ClipboardCheck,
  FileCheck2,
  KeyRound,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  TriangleAlert,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buyer Safety | VehicleHub Zimbabwe",
  description:
    "Learn how to inspect, verify and safely purchase a vehicle in Zimbabwe.",
};

const safetySteps = [
  {
    icon: UserCheck,
    title: "Verify the seller",
    description:
      "Confirm the seller’s full name, identification, phone number and physical address before making any payment.",
  },
  {
    icon: FileCheck2,
    title: "Check ownership documents",
    description:
      "Request the original vehicle registration book and confirm that the chassis and engine numbers match the vehicle.",
  },
  {
    icon: SearchCheck,
    title: "Inspect the vehicle",
    description:
      "Use a trusted mechanic to inspect the engine, suspension, transmission, bodywork, tyres and electrical systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirm the vehicle history",
    description:
      "Ask about accidents, repairs, mileage, import history and previous ownership before agreeing to buy.",
  },
  {
    icon: KeyRound,
    title: "Take a test drive",
    description:
      "Test the vehicle under safe conditions and check its braking, steering, acceleration, warning lights and handling.",
  },
  {
    icon: ShieldCheck,
    title: "Use a written agreement",
    description:
      "Record the vehicle details, agreed price, payment terms and information for both parties in a signed sale agreement.",
  },
];

const warningSigns = [
  "The seller refuses to meet at a safe, verifiable location.",
  "The price is unusually low compared with similar vehicles.",
  "The seller pressures you to pay immediately.",
  "The vehicle registration details do not match the vehicle.",
  "The seller refuses to allow an independent inspection.",
  "You are asked to pay into an unrelated person’s account.",
  "The seller only provides copied or unclear documents.",
  "The mileage or condition appears inconsistent with the description.",
];

export default function BuyerSafetyPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <ShieldCheck className="h-4 w-4" />
              Vehicle buyer protection
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Buy your next vehicle with confidence
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Follow these practical safety checks before purchasing a vehicle
              from a private seller, dealer or importer in Zimbabwe.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/vehicles"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                <CarFront className="h-5 w-5" />
                Browse vehicles
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-wider text-cyan-600">
            Before you pay
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Essential vehicle safety checks
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Never rely only on photographs, social-media messages or verbal
            promises. Verify the seller, vehicle and documents personally.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {safetySteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-amber-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <TriangleAlert className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-950">
              Warning signs to watch for
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Stop the transaction and investigate further if anything feels
              suspicious or cannot be independently verified.
            </p>
          </div>

          <ul className="space-y-4">
            {warningSigns.map((warning) => (
              <li
                key={warning}
                className="flex gap-3 rounded-xl border border-amber-200 bg-white p-4"
              >
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <span className="text-slate-700">{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cyan-600 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-black">
            Found a vehicle you are interested in?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-cyan-50">
            Ask questions, arrange an inspection and verify the documents before
            making a financial commitment.
          </p>

          <Link
            href="/vehicles"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-cyan-700 transition hover:bg-slate-100"
          >
            View available vehicles
          </Link>
        </div>
      </section>
    </main>
  );
}