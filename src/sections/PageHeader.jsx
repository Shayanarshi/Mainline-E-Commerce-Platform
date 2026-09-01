import React from 'react'

const PageHeader = ({ HData }) => {
    return (
        <section className=" relative w-full h-auto ">
            {HData.map((data, i) => {
                return (
                    <div
                        key={i}
                        className="text-white w-full h-[40vh] bg-cover flex flex-col justify-center items-center"

                    >
                        <h3 className="text-[44px] font-bold leading-[2.5rem]">
                            {data.heading}
                        </h3>
                        <p className="text-[15px] font-semibold mt-[15px] mb-[20px] ">
                            {data.desc}
                        </p>
                        <img
                            src={data.img}
                            className=" w-full h-full  absolute -z-10  left-0 bottom-0 top-0 right-0"
                        />
                    </div>
                );
            })}
        </section>
    );
}

export default PageHeader
