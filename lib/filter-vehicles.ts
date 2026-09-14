import type { Vehicle } from "@/types/vehicle";

export type VehicleSearchFilters = {
  category?: string | string[];
  make?: string | string[];
  location?: string | string[];
  maxPrice?: string | string[];
};

function getFilterValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function normalize(value?: string) {
  return value?.trim().toLowerCase() ?? "";
}

export function filterVehicles(
  vehicles: Vehicle[],
  filters: VehicleSearchFilters,
): Vehicle[] {
  const selectedCategory = normalize(
    getFilterValue(filters.category),
  );

  const selectedMake = normalize(
    getFilterValue(filters.make),
  );

  const selectedLocation = normalize(
    getFilterValue(filters.location),
  );

  const maxPriceValue = getFilterValue(filters.maxPrice);
  const parsedMaxPrice = Number(maxPriceValue);

  const hasValidMaxPrice =
    maxPriceValue !== "" &&
    Number.isFinite(parsedMaxPrice) &&
    parsedMaxPrice >= 0;

  return vehicles.filter((vehicle) => {
    const matchesCategory =
      !selectedCategory ||
      vehicle.categories?.some(
        (category) =>
          normalize(category) === selectedCategory,
      );

    const matchesMake =
      !selectedMake ||
      normalize(vehicle.make) === selectedMake;

    const matchesLocation =
      !selectedLocation ||
      normalize(vehicle.location) === selectedLocation;

    const matchesPrice =
      !hasValidMaxPrice ||
      (typeof vehicle.price === "number" &&
        vehicle.price <= parsedMaxPrice);

    return (
      matchesCategory &&
      matchesMake &&
      matchesLocation &&
      matchesPrice
    );
  });
}