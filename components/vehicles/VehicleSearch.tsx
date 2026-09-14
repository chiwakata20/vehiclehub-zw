"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const vehicleCategories = [
  "SUV",
  "PICKUP TRUCKS",
  "FUEL SAVERS",
  "COMMERCIAL",
  "LUXURY",
];

const makes = [
  "Toyota",
  "Honda",
  "Nissan",
  "Mazda",
  "Mercedes-Benz",
  "BMW",
  "Ford",
  "Isuzu",
  "Mitsubishi",
  "Subaru",
  "Suzuki",
  "Hyundai",
  "Kia",
  "Volkswagen",
];

const locations = [
  "Harare",
  "Bulawayo",
  "Mutare",
  "Gweru",
  "Masvingo",
  "Kwekwe",
  "Kadoma",
  "Chitungwiza",
  "Victoria Falls",
];

const priceOptions = [
  { label: "Any price", value: "" },
  { label: "Up to US$3,000", value: "3000" },
  { label: "Up to US$6,500", value: "6500" },
  { label: "Up to US$8,500", value: "8500" },
  { label: "Up to US$10,000", value: "10000" },
  { label: "Up to US$18,500", value: "18500" },
  { label: "Up to US$38,000", value: "38000" },
  { label: "Up to US$78,000", value: "78000" },
  { label: "Up to US$100,000", value: "100000" },
];

export function VehicleSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Keep the form synchronized with the current URL.
  useEffect(() => {
    setCategory(searchParams.get("category") ?? "");
    setMake(searchParams.get("make") ?? "");
    setLocation(searchParams.get("location") ?? "");
    setMaxPrice(searchParams.get("maxPrice") ?? "");
  }, [searchParams]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (category) {
      params.set("category", category);
    }

    if (make) {
      params.set("make", make);
    }

    if (location) {
      params.set("location", location);
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    }

    const queryString = params.toString();

    router.push(
      queryString ? `/vehicles?${queryString}` : "/vehicles",
    );
  }

  function handleClear() {
    setCategory("");
    setMake("");
    setLocation("");
    setMaxPrice("");

    router.push("/vehicles");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-4 text-slate-950 shadow-2xl"
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">
        <SearchField
          label="Category"
          value={category}
          onChange={setCategory}
          options={vehicleCategories}
          emptyLabel="All categories"
        />

        <SearchField
          label="Make"
          value={make}
          onChange={setMake}
          options={makes}
          emptyLabel="Any make"
        />

        <SearchField
          label="Location"
          value={location}
          onChange={setLocation}
          options={locations}
          emptyLabel="Any location"
        />

        <label className="rounded-xl bg-slate-50 px-4 py-2">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
            Maximum price
          </span>

          <select
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            className="mt-1 w-full cursor-pointer bg-transparent font-bold outline-none"
            aria-label="Maximum price"
          >
            {priceOptions.map((option) => (
              <option key={option.value || "any"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 font-extrabold text-white transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          <Search size={19} aria-hidden="true" />
          Search
        </button>
      </div>

      {pathname === "/vehicles" && searchParams.toString() && (
        <button
          type="button"
          onClick={handleClear}
          className="mt-4 text-sm font-bold text-slate-600 transition hover:text-cyan-700"
        >
          Clear all filters
        </button>
      )}
    </form>
  );
}

type SearchFieldProps = {
  label: string;
  value: string;
  options: string[];
  emptyLabel: string;
  onChange: (value: string) => void;
};

function SearchField({
  label,
  value,
  options,
  emptyLabel,
  onChange,
}: SearchFieldProps) {
  return (
    <label className="rounded-xl bg-slate-50 px-4 py-2">
      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full cursor-pointer bg-transparent font-bold outline-none"
        aria-label={label}
      >
        <option value="">{emptyLabel}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}