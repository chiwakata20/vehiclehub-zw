import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { TrustSection } from "@/components/home/TrustSection";
import { PopularBrands } from "@/components/home/PopularBrands";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SellerCta } from "@/components/home/SellerCta";
import { VehicleCategories } from "@/components/home/VehicleCategories";
export default function HomePage(){
    return <>
    <Hero/>
    {/* <CategoryGrid/> */}
    <VehicleCategories/>
    <FeaturedVehicles/>
    <TrustSection/>
    <PopularBrands/>
    <HowItWorks/>
    <SellerCta/>
    </>
    ;}
