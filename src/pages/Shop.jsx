import React from 'react'
import PageHeader from '../sections/PageHeader'
import ShopBg from "/assets/home-page/shop-intro-bg.jpg";
import ShopAllProducts from '../sections/ShopAllProducts';

const Shop = () => {
    const headerData = [
            {
                img: ShopBg,
                heading: "#Shop",
                desc: "Save more with coupons & up to 70% off!",
            },
        ];
  return (
    <article className='pt-[10vh]'>
        <PageHeader HData={headerData}/>
        <section className="flex flex-wrap justify-center gap-10">
                        <ShopAllProducts />
                    </section>
    </article>
  )
}

export default Shop
