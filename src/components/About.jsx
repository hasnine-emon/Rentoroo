import React from "react";
import Title from "./Title";
import { assets } from "../assets/data";
const About = () => {
  return (
    <section className="max-padd-container py:16 xl:py-28 !pt-36">
      {/* container */}
      <div className="flex items-center flex-col lg:flex-row gap-12">
        {/* info left side */}
        <div className="flex-[5]">
          
            <Title
              title1={"Your Trusted Real Estate Partner"}
              title2={"Helping You Every Step of the Way"}
              paraStyles={"hidden"}
            />
            <p className="mb-10 mt-5">
              Find reliable car with trasparent pricing ,verified
              inspecttions,flexible pickup and delivery options ,24/7 hourse
              rental or buying exprience.
            </p>
            <div className='grid gap-6 md:grid-cols-2' >
              <div className='p-4 rounded-xl bg-primaryOne'>
                <h5>Quick Service</h5>
                <p className="text-sm mt-2">
                  Choose from economy to luxury models, regularly maintained and
                  verified, giving you reliable performance and the perfect car
                  for every trip.
                </p>
              </div>

              <div className='p-4 rounded-xl bg-primaryTwo'>
                <h5>Transparent Pricing</h5>
                <p className="text-sm mt-2">
                  Upfront rates with no hidden fees, clear breakdowns for
                  insurance and extras, so pricing stays predictable and easy to
                  understand before booking.
                </p>
              </div>

              <div className='p-4 rounded-xl bg-primaryTwo'>
                <h5>24/7 Support</h5>
                <p className="text-sm mt-2">
                  Around the clock customer support via chat and phone,
                  resolving issues quickly and helping with changes, extensions,
                  or roadside assistance anytime you need.
                </p>
              </div>

              <div className='p-4 rounded-xl bg-primaryOne'>
                <h5>Wide Vehicle Selection</h5>
                <p className="text-sm mt-2">
                  Book in seconds with instant confirmations and flexible pickup
                  options, so you get on the road fast without waiting or
                  hassles.
                </p>
              </div>
            </div>
          
        </div>

        {/* info right side */}
        <div className="flex-[5] flex gap-7">

          <div className="relative flex justify-end mb-8">
            <img src={assets.about1} alt="aboutImg" className="rounded-2xl" />
          </div>

          <div className="relative flex justify-end mt-8">
            <img src={assets.about2} alt="aboutImg2" className="rounded-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
