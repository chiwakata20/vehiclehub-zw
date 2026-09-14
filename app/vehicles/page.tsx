import type { Metadata } from "next";
import { Suspense } from "react";

import { VehicleCatalogue } from "@/components/vehicles/VehicleCatalogue";
import { VehicleSearch } from "@/components/vehicles/VehicleSearch";

export const metadata: Metadata = {
  title: "Browse Vehicles | VehicleHub Zimbabwe",
  description:
    "Browse and search vehicles for sale across Zimbabwe by category, make, location and maximum price.",
};

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
            Zimbabwe vehicle marketplace
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Find a vehicle that fits your life.
          </h1>

          <p className="mb-8 mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Compare quality cars, SUVs, pickups and commercial vehicles
            from sellers across Zimbabwe.
          </p>

          <Suspense
            fallback={
              <div className="h-28 animate-pulse rounded-2xl bg-white/10" />
            }
          >
            <VehicleSearch />
          </Suspense>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <p className="py-12 text-center text-slate-500">
                Loading vehicles...
              </p>
            }
          >
            <VehicleCatalogue />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
