import React from "react";

const Newsletter = () => {
    const emailHandler = (e) => {
        e.preventDefault();
        alert("Thanks for connecting to the newsletter")

    }
    return (
        <section className="newsletter px-[80px] py-[40px] m-[2.5rem] bg-[url(/assets/home-page/newsletter-bg.png)] bg-center bg-[#041e42] bg-no-repeat">
            <div className="news flex flex-wrap justify-between items-center static">
                <div className="text-white">
                    <h3 className="font-bold text-[25px]">Sign Up For Newsletter</h3>
                    <p className="font-bold text-[15px]">
                        Get E-mail updates our latest shop and
                        <span className="text-yellow-500">Special Offers</span>
                    </p>
                </div>
                <div className="">
                    <input
                        type="text"
                        placeholder="Enter your Email Id"
                        className="newsletter-input input w-[20vw] max-h-[2.5rem] px-5 py-2 rounded-l text-white border "
                    />
                    <button
                        onClick={emailHandler}
                        className="text-white text-[1rem] max-h-[2.5rem] font-bold bg-[#088178] px-5 py-2 rounded-r">
                        Sign-up
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;