import CoinPriceTracker from "@/components/CoinPriceTracker";
import HomeHero from "@/components/Hero/arbswap/Hero";
import CustomArbSwapNavbar from "@/components/Navbar/ArbSwap/ArbSwapNavbar";
import Statistic from "@/components/Statistic";

const ArbSwapHomePage = () => {
    return (
        <div className="bg-linear-gradient-arbswap">
            <CustomArbSwapNavbar />
            <HomeHero/>
            <CoinPriceTracker/>
            <Statistic/>
        </div>
    )
}

export default ArbSwapHomePage;