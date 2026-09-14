"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Fuel,
  Gauge,
  Heart,
  MapPin,
} from "lucide-react";

import { useSavedVehicles } from "@/hooks/useSavedVehicles";
import { formatPrice } from "@/lib/format-price";
import type { Vehicle } from "@/types/vehicle";

type VehicleCardProps = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const { isSaved, toggle } = useSavedVehicles();

  const saved = isSaved(vehicle.id);

  const vehicleName = [
    vehicle.year,
    vehicle.make,
    vehicle.model,
  ]
    .filter(Boolean)
    .join(" ");

  const mileage =
    typeof vehicle.mileage === "number"
      ? `${vehicle.mileage.toLocaleString("en-US")} km`
      : "Mileage unavailable";

  const location = vehicle.location
    ? `${vehicle.location}, Zimbabwe`
    : "Location unavailable";

  const transmission =
    vehicle.transmission || "Not specified";

  const fuel = vehicle.fuel || "Not specified";

  const bodyType = vehicle.bodyType || "Vehicle";

  const image =
    vehicle.image || "/vehicles/placeholder.jpg";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={vehicleName || "Vehicle for sale"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {vehicle.featured && (
            <span className="rounded-lg bg-cyan-400 px-2.5 py-1 text-xs font-black text-slate-950">
              FEATURED
            </span>
          )}

          {vehicle.verified && (
            <span className="flex items-center gap-1 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-emerald-700">
              <CheckCircle2 size={13} aria-hidden="true" />
              VERIFIED
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(vehicle.id)}
          aria-label={
            saved
              ? `Remove ${vehicleName} from saved vehicles`
              : `Save ${vehicleName}`
          }
          aria-pressed={saved}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/95 shadow transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <Heart
            size={19}
            aria-hidden="true"
            className={
              saved
                ? "fill-rose-500 text-rose-500"
                : "text-slate-700"
            }
          />
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
            {bodyType}
          </p>

          <h3 className="mt-1 text-lg font-black text-slate-950">
            {vehicleName || "Vehicle details unavailable"}
          </h3>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} aria-hidden="true" />
          {location}
        </p>

        <div className="my-4 grid grid-cols-1 gap-3 border-y border-slate-100 py-3 text-xs font-semibold text-slate-600 sm:grid-cols-3">
          <span className="flex items-center gap-1">
            <Gauge size={15} aria-hidden="true" />
            {mileage}
          </span>

          <span className="flex items-center">
            {transmission}
          </span>

          <span className="flex items-center gap-1">
            <Fuel size={14} aria-hidden="true" />
            {fuel}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <strong className="text-xl font-black text-slate-950">
            {formatPrice(vehicle.price)}
          </strong>

          <Link
            href={`/vehicles/${vehicle.slug}`}
            aria-label={`View details for ${vehicleName}`}
            className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}