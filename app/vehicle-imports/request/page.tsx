import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { ImportRequestForm } from "@/components/imports/ImportRequestForm";

export const metadata: Metadata = {
  title: "Request a Vehicle Import | VehicleHub Zimbabwe",
  description:
    "Submit your vehicle requirements and receive assistance importing a vehicle into Zimbabwe.",
};

export default function ImportRequestPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Link
            href="/vehicle-imports"
            className="inline-flex items-center gap-2 font-bold text-slate-300 hover:text-cyan-400"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Import services
          </Link>

          <div className="mt-7 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Vehicle import request
            </p>

            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Tell us which vehicle you want to import.
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Provide your vehicle preferences and budget. We will use
              the information to identify suitable options.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <ImportRequestForm />

        <aside className="h-fit rounded-3xl bg-cyan-50 p-6 lg:sticky lg:top-24">
          <ShieldCheck
            className="text-cyan-700"
            size={32}
            aria-hidden="true"
          />

          <h2 className="mt-4 text-xl font-black text-slate-950">
            Before making payment
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>Confirm the full vehicle specification.</li>
            <li>Review inspection and condition information.</li>
            <li>Request a complete estimated cost breakdown.</li>
            <li>Verify all payment instructions.</li>
            <li>Keep copies of receipts and agreements.</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}