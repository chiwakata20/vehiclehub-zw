import Link from "next/link";
import {
  CarFront,
  Crown,
  Fuel,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

type VehicleCategory = {
  name: string;
  description: string;
  icon: LucideIcon;
};

const categories: VehicleCategory[] = [
  {
    name: "SUV",
    description:
      "Spacious vehicles for families, long journeys and difficult roads.",
    icon: CarFront,
  },
  {
    name: "PICKUP TRUCKS",
    description:
      "Reliable pickup trucks for business, farming and personal use.",
    icon: Truck,
  },
  {
    name: "FUEL SAVERS",
    description:
      "Economical vehicles designed to help reduce your fuel expenses.",
    icon: Fuel,
  },
  {
    name: "COMMERCIAL",
    description:
      "Practical vehicles for transport, deliveries and business operations.",
    icon: ShieldCheck,
  },
  {
    name: "LUXURY",
    description:
      "Premium vehicles offering comfort, performance and modern technology.",
    icon: Crown,
  },
];

export function VehicleCategories() {
  return (
    <section
      className="bg-slate-50 py-16 lg:py-24"
      aria-labelledby="vehicle-categories-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Browse by category
          </p>

          <h2
            id="vehicle-categories-heading"
            className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl"
          >
            Find the right vehicle for your needs
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Select a category to view all available vehicles
            in that category.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            const categoryUrl =
              `/vehicles?category=${encodeURIComponent(category.name)}`;

            return (
              <Link
                key={category.name}
                href={categoryUrl}
                aria-label={`Browse ${category.name} vehicles`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition-colors group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-950 transition-colors group-hover:text-cyan-700">
                  {category.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

                <span className="mt-5 inline-flex items-center text-sm font-bold text-cyan-700">
                  View vehicles
                  <span
                    aria-hidden="true"
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}