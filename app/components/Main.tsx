import React from "react";
import reviewBG from "../../public/Updated Assets/Review-Banner@2x.png";
import Image from "next/image";
import Link from "next/link";
import MedicalCardEvents from "./MedicalCardEvents";

const Main = () => {
  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center pt-5 px-5 lg:px-0 max-w-screen-lg">
        {/* Tagline  */}
        <section id="header">
          <h3 className="font-normal">Utah&apos;s Cannabis Community</h3>
        </section>
        {/* -Tagline  */}
        {/* Event Cards  */}
        <section className="w-full">
          <h2 className="text-center">Upcoming Utah Medical Card Events</h2>
            <MedicalCardEvents />
        </section>
        {/* -Event Cards  */}
        {/* Things to know  */}
        <section>
          <h3>Things to know before your appointment</h3>
          <div>** things to know checklist **</div>
        </section>
        {/* -Things to know  */}
        {/* Leaf Nation Banner Ad  */}
        <section className="w-full">
          <Image
            src="/MockBannerAd@2x.png"
            width={1181}
            height={286}
            sizes="100vw"
            alt="Leaf Nation. Now keeping Utah fresh."
          />
          <p className="text-right">Ad</p>
        </section>
        {/* -Leaf Nation Banner Ad  */}
        {/* Medical Cards Section  */}
        <section className="flex flex-col lg:flex-row gap-x-10 justify-center items-start">
          <div className="mb-5 lg:mb-0">
            <Image
              src="/Consultation@2x.png"
              width={640}
              height={553}
              sizes="100vw"
              alt="Image of a medical professional giving a consultation to a client."
            />
          </div>
          <div className="w-full lg:w-7/12 pt:5">
            <h2>Utah Medical Cards</h2>
            <p>
              A medical cannabis card, also known as a medical mari-juana card,
              is a state-issued identification card that allows qualified
              patients to legally purchase and use medical cannabis for the
              treatment of specific medical conditions. In Utah, a card is
              required to access and purchase medi- cal cannabis products from
              state-licensed dispensaries. Having a medical card does not allow
              you to possess any cannabis product but only the products you
              purchased under your PAT (Medical Card ID number).
            </p>
          </div>
        </section>
        {/* -Medical Cards Section  */}
        {/* Review Banner */}
        <section
          className="w-full"
          style={{
            backgroundImage: `url(${reviewBG.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "100%",
            height: "181px",
          }}
        >
          <div>
            <p>We&apos;d love to hear from you!</p>
            <button>Review us here!</button>
          </div>
        </section>
        {/* -Review Banner */}
        {/* FAQs */}
        <section className="w-full">
          <h2>FAQs...</h2>
          <ul id="faqs">
            <li>
              <Link href="#">
                If I don&apos;t qualify, do i still have to pay the QMP?
              </Link>
            </li>
            <li>
              <Link href="#">
                What are Utah&apos;s qualifying medical conditions?
              </Link>
            </li>
            <li>
              <Link href="#">
                Is documentation required to prove you have a medical condition?
              </Link>
            </li>
            <li>
              <Link href="#">
                If I have a medical cannabis card, can I consume in public?
              </Link>
            </li>
            <li>
              <Link href="#">
                What are the eligiblity requirements for a Utah medical cannabis
                card?
              </Link>
            </li>
            <li>
              <Link href="#">
                What is the complete cost to get a medical cannabis card?
              </Link>
            </li>
            <li>
              <Link href="#">How long does it take to receive your card?</Link>
            </li>
            <li>
              <Link href="#">
                Where can I purchase medical cannabis in Utah?
              </Link>
            </li>
            <li>
              <Link href="#">
                Can I grow my own cannabis plants with a medical cannabis card?
              </Link>
            </li>
            <li>
              <Link href="#">How long is a medical cannabis card valid?</Link>
            </li>
            <li>
              <Link href="#">
                Is my personal information confidential when applying for a
                medical cannabis card?
              </Link>
            </li>
          </ul>
        </section>
        {/* -FAQs */}
        {/* Utah Medical Cannabis Pharmacies */}
        <section className="w-full">
          <h2>Utah Medical Cannabis Pharmacies</h2>
          <div>
            <ul>
              <li>** pharmacy contact components **</li>
            </ul>
          </div>
        </section>
        {/* -Utah Medical Cannabis Pharmacies */}
        {/* About Us and Contact */}
        <section className="flex flex-col lg:flex-row gap-x-10 justify-center items-center">
          <div className="w-full lg:w-7/12">
            <div className="mb-10">
              <h2>About Utah Grown</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam- corper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore.
              </p>
            </div>
            <div>
              <h2>Utah Grown Office</h2>
              <h4>730 State Street</h4>
              <h4>Salt Lake City, Utah 84111</h4>
            </div>
          </div>
          <div id="normalizePlantImg">
            <Image
              src="/NormalizeItUtah@2x.png"
              width={663}
              height={893}
              sizes="50vw"
              alt="Image a plant growing from two pots that is in the shape of the state of Utah with hashtag: #NormalizeIt"
            />
          </div>
        </section>
        {/* -About Us and Contact */}
      </main>
    </>
  );
};

export default Main;
