/* eslint-disable @next/next/no-img-element */
import BannerForm from "./BannerForm";
import { BannerImage } from "./../style";

const MainBanner = () => {
    return (
        <>
            <BannerImage>
                <div className="bannerContainer">
                    <img
                        src="https://res.cloudinary.com/ruhanrk/image/upload/v1661063131/eRent/home-2-main-parallax_b7lxfi.png"
                        alt="home banner"
                        width={751}
                        height={415}
                    />

                    <BannerForm />
                </div>
            </BannerImage>
        </>
    );
};

export default MainBanner;
