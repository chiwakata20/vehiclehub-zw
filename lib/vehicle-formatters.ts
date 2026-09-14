export function formatPrice(price?: number): string {
  if (typeof price !== "number") {
    return "Price on request";
  }

  return `US$${price.toLocaleString("en-US")}`;
}

export function formatMileage(mileage?: number): string {
  if (typeof mileage !== "number") {
    return "Mileage unavailable";
  }

  return `${mileage.toLocaleString("en-US")} km`;
}

export function displayValue(
  value: string | undefined,
  fallback = "Not specified",
): string {
  const cleanedValue = value?.trim();

  return cleanedValue || fallback;
}