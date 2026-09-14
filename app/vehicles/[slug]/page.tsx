import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Fuel,
  Gauge,
  MapPin,
  Settings2,
} from "lucide-react";

import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { vehicles } from "@/data/vehicles";
import { formatPrice } from "@/lib/format-price";

type VehicleDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({
  params,
}: VehicleDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const vehicle = vehicles.find(
    (item) => item.slug === decodeURIComponent(slug),
  );

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | VehicleHub Zimbabwe",
      description: "The requested vehicle could not be found.",
    };
  }

  const vehicleName = [
    vehicle.year,
    vehicle.make,
    vehicle.model,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    title: `${vehicleName} | VehicleHub Zimbabwe`,
    description:
      vehicle.description ||
      `View the price, photographs and specifications of this ${vehicleName} for sale in Zimbabwe.`,
  };
}

export default async function VehicleDetailsPage({
  params,
}: VehicleDetailsPageProps) {
  const { slug } = await params;

  const vehicle = vehicles.find(
    (item) => item.slug === decodeURIComponent(slug),
  );

  if (!vehicle) {
    notFound();
  }

  const vehicleName = [
    vehicle.year,
    vehicle.make,
    vehicle.model,
  ]
    .filter(Boolean)
    .join(" ");

  const galleryImages =
    vehicle.images && vehicle.images.length > 0
      ? vehicle.images
      : [vehicle.image || "/vehicles/placeholder.jpg"];

  const location = vehicle.location
    ? `${vehicle.location}, Zimbabwe`
    : "Location unavailable";

  const mileage =
    typeof vehicle.mileage === "number"
      ? `${vehicle.mileage.toLocaleString("en-US")} km`
      : "Mileage unavailable";

  const description =
    vehicle.description ||
    `This ${vehicleName} is currently available for sale through VehicleHub Zimbabwe. Contact the seller for additional information, inspection arrangements and ownership documentation.`;

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the ${vehicleName} listed on VehicleHub Zimbabwe.`,
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 font-bold text-slate-300 transition hover:text-cyan-400"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to vehicles
          </Link>

          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              {vehicle.bodyType || "Vehicle"}
            </p>

            <h1 className="mt-2 text-3xl font-black text-white sm:text-5xl">
              {vehicleName}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-slate-300">
              <MapPin size={18} aria-hidden="true" />
              {location}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_0.8fr]">
          <VehicleGallery
            images={galleryImages}
            vehicleName={vehicleName}
          />

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            {vehicle.verified && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700">
                <CheckCircle2 size={17} aria-hidden="true" />
                Verified listing
              </div>
            )}

            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Vehicle price
            </p>

            <p className="mt-2 text-4xl font-black text-slate-950">
              {formatPrice(vehicle.price)}
            </p>

            <div className="my-7 grid grid-cols-2 gap-3">
              <VehicleDetail
                icon={<CalendarDays size={19} />}
                label="Year"
                value={String(vehicle.year)}
              />

              <VehicleDetail
                icon={<Gauge size={19} />}
                label="Mileage"
                value={mileage}
              />

              <VehicleDetail
                icon={<Settings2 size={19} />}
                label="Transmission"
                value={vehicle.transmission || "Not specified"}
              />

              <VehicleDetail
                icon={<Fuel size={19} />}
                label="Fuel"
                value={vehicle.fuel || "Not specified"}
              />
            </div>

            <Link
              href={`/contact?vehicle=${encodeURIComponent(vehicleName)}`}
              className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-6 py-4 text-center font-black text-white transition hover:bg-cyan-700"
            >
              Enquire about this vehicle
            </Link>

            <a
              href={`https://wa.me/263000000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-4 text-center font-black text-white transition hover:bg-slate-800"
            >
              Contact seller on WhatsApp
            </a>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
            About this vehicle
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-950">
            Vehicle description
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            {description}
          </p>
        </section>
      </section>
    </main>
  );
}

type VehicleDetailProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function VehicleDetail({
  icon,
  label,
  value,
}: VehicleDetailProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-cyan-700">
        {icon}

        <span className="text-xs font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-black text-slate-950">
        {value}
      </p>
    </div>
  );
}