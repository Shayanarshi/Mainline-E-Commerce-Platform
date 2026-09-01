import Features from "./Features"

import img1 from "/assets/home-page/features/free-shipping.png"
import img2 from "/assets/home-page/features/happy-sell.png"
import img3 from "/assets/home-page/features/online-order.png"
import img4 from "/assets/home-page/features/promotions.png"
import img5 from "/assets/home-page/features/save-money.png"
import img6 from "/assets/home-page/features/support.png"

const FeaturesDetails = () => {
    const data = [
        {
            img: img1,
            title: "Online Order",
        },
        {
            img: img2,
            title: "Happy Sell",
        },
        {
            img: img3,
            title: "Free shipping",
        },
        {
            img: img4,
            title: "Promotions",
        },
        {
            img: img5,
            title: "Save Money",
        },
        {
            img: img6,
            title: "Support",
        },
    ];

    return <Features FeaturesData={data} />;
};

export default FeaturesDetails
