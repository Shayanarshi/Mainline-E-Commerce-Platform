import React from "react";
import googleStore from "/assets/home-page/google-play.jpeg"
import appStore from "/assets/home-page/app-store.jpeg"
import paymentCards from "/assets/home-page/payment-cards.png"


const Footer = () => {
    return (
        <footer className="footer w-full relative bg-white px-[5rem] py-[2.5rem] flex flex-wrap justify-between">
            <div>
                <img src="./images/home-page/logo.png" alt="" />
                <h3 className="font-bold text-[20px] py-2">Contact</h3>
                <div className="text-[#465b52] space-y-[8px] text-[13px] mb-5">
                    <p>
                        <strong>Address:</strong> 562 Wellington Road, Street 32, San
                        Francisco
                    </p>
                    <p>
                        <strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 678
                    </p>
                    <p>
                        <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
                    </p>
                </div>
                <p className="font-semibold mb-2">Follow US</p>
                <div>--social media icons--</div>
            </div>

            <div className="font-semibold">
                <h3 className="font-bold text-[20px] pb-4">About</h3>
                <ul className="space-y-2">
                    <li className="hover:text-[#088178]">
                        <a href="">About Us</a>
                    </li>
                    <li className="hover:text-[#088178]">
                        <a href="">Delivery Information</a>
                    </li>
                    <li className="hover:text-[#088178]">
                        <a href="">Privacy Policy</a>
                    </li>
                    <li className="hover:text-[#088178]">
                        <a href="">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="font-semibold">
                <h3 className="font-bold text-[20px] pb-4">My Account</h3>
                <ul className="space-y-2">
                    <li className="hover:text-[#088178]">
                        <a href="">Sign In</a>
                    </li>
                    <li className="hover:text-[#088178]">
                        <a href="">View Cart</a>
                    </li>
                    <li>
                        <a href="">My Wishlist</a>
                    </li>
                    <li className="hover:text-[#088178]">
                        <a href="">Track My Order</a>
                    </li>
                    <li className="hover:text-[#088178]">
                        <a href="">Help</a>
                    </li>
                </ul>
            </div>

            <div className="space-y-3">
                <h3 className="font-bold">Install App</h3>
                <p className="text-[#5d6f67]">From App Store or Google Play Store</p>
                <div className="flex gap-[10px]">
                    <img
                        src={appStore}
                        alt=""
                        width="130px"
                        className="border border-[#269088] rounded-md"
                    />
                    <img
                        src={googleStore}
                        alt=""
                        width="130px"
                        className="border border-[#269088] rounded-md"
                    />
                </div>
                <p className="text-[#5d6f67]">Secure Payment gateway</p>
                <div>
                    <img src={paymentCards} alt="" />
                </div>
            </div>

            <div className="w-[100%] text-center my-5">
                <p>&copy; Shayan Arshi</p>
            </div>
        </footer>
    );
};

export default Footer;