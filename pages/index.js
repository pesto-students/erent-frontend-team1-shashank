
import Login from "@components/Login";
import MainBanner from "./Home/MainBanner"
import LatestPropertySection from "./Home/LatestProperty/LatestProperty";
import WhyChooseSection from './Home/WhyChooseSection/WhyChooseSection'
export default function Home() {
    return (
        <>
            <MainBanner />
            <LatestPropertySection />
            <WhyChooseSection />
        </>
    );
}
