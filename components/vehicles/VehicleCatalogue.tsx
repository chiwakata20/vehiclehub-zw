"use client";

import { useSearchParams } from "next/navigation";

import { vehicles } from "@/data/vehicles";
import { filterVehicles } from "@/lib/filter-vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export function VehicleCatalogue() {
  const searchParams = useSearchParams();

  const filteredVehicles = filterVehicles(vehicles, {
    category: searchParams.get("category") ?? "",
    make: searchParams.get("make") ?? "",
    location: searchParams.get("location") ?? "",
    maxPrice: searchParams.get("maxPrice") ?? "",
  });

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-950">
          Available vehicles
        </h2>

        <p className="mt-2 text-slate-600" aria-live="polite">
          {filteredVehicles.length === 1
            ? "1 vehicle found"
            : `${filteredVehicles.length} vehicles found`}
        </p>
      </div>

      {filteredVehicles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center">
          <h2 className="text-2xl font-black text-slate-950">
            No matching vehicles found
          </h2>

          <p className="mt-3 text-slate-600">
            Change one or more filters and search again.
          </p>
        </div>
      )}
    </div>
  );
}