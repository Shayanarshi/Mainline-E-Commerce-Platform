import React from "react";
import googleStore from "/assets/home-page/google-play.jpeg"
import appStore from "/assets/home-page/app-store.jpeg"
import paymentCards from "/assets/home-page/payment-cards.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer w-full relative bg-white px-[5rem] py-[2.5rem] flex flex-wrap justify-between">
            <div>
                <img src="./images/home-page/logo.png" alt="" />
                <h3 className="font-bold text-[20px] py-2">Contact</h3>
                <div className="text-[#465b52] space-y-[8px] text-[13px] mb-5">
                     <p>
                     <strong>Address:</strong> Arshi Manzil, Street 31, Hyderabad, India
                    </p>
                     <p>
               <strong>Phone:</strong> +91 8406024234
                     </p>
                    <p>
                      <strong>Hours:</strong> 10:00 - 17:00, Mon - Sat
                    </p>
                </div>
           <p className="font-semibold mb-2">Follow Us</p>

<div className="flex gap-4 text-xl">
    <a
        href="#"
        className="hover:text-[#088178] transition-colors"
        aria-label="Facebook"
    >
        <FontAwesomeIcon icon={faFacebookF} />
    </a>

    <a
        href="#"
        className="hover:text-[#088178] transition-colors"
        aria-label="Instagram"
    >
        <FontAwesomeIcon icon={faInstagram} />
    </a>

    <a
        href="#"
        className="hover:text-[#088178] transition-colors"
        aria-label="Twitter"
    >
        <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a
        href="https://www.linkedin.com/in/shayanarshi/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#088178] transition-colors"
        aria-label="LinkedIn"
    >
        <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
</div>

                
                




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