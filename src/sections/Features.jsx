
const Features = ({FeaturesData}) => {
  return (
    <section className="w-full relative bg-white px-20 py-10">

        <section className="relative flex flex-wrap justify-center gap-10">
          {
            FeaturesData.map((f,i) =>{
              return (
                <section key={i} className=" border shadow-2xl shadow-transparent
                border-[#cce7d0] rounded-xl my-4 py-6 flex flex-col items-center
                 hover:shadow-[#e3e6f3] gap-3 
                ">
                  <img src={f.img} alt={f.title} />
                  <p className="text-[#088178] mt-2 py-1 px-3 fond-bold text-[14px]
                   rounded-md bg-[#fdddE4]">{f.title}</p>
                </section>
              )
            })
          }

        </section>
    </section>
  );
};

export default Features;
