export type VehicleCategory =
  | "SUV"
  | "PICKUP TRUCKS"
  | "FUEL SAVERS"
  | "COMMERCIAL"
  | "LUXURY";

export type Vehicle = {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  location?: string;
  image?: string;
  images?: string[];
  description?: string;
  mileage?: number;
  transmission?: string;
  fuel?: string;
  bodyType?: string;
  suvType?: string;
  featured?: boolean;
  verified?: boolean;

  categories: VehicleCategory[];
};