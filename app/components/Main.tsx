import React from "react";
import reviewBG from "../../public/Updated Assets/Review-Banner@2x.png";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <main className="pt-6 flex flex-col items-center justify-center w-3/4">
        {/* Tagline  */}
        <section>
          <h3>Utah&apos;s Cannabis Community</h3>
        </section>
        {/* -Tagline  */}
        {/* Event Cards  */}
        <section>
          <h1>Upcoming Utah Medical Card Events</h1>
          <div>** event card components **</div>
        </section>
        {/* -Event Cards  */}
        {/* Things to know  */}
        <section>
          <h2>Things to know before your appointment</h2>
          <div>** things to know checklist **</div>
        </section>
        {/* -Things to know  */}
        {/* Leaf Nation Banner Ad  */}
        <section className="w-full">
          <Image
            src="/MockBannerAd@2x.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Leaf Nation. Keeping Utah Fresh."
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <p className="text-right">Ad</p>
        </section>
        {/* -Leaf Nation Banner Ad  */}
        {/* Medical Cards Section  */}
        <section className="flex flex-row gap-x-10">
          <Image
            src="/Consultation@2x.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Leaf Nation. Keeping Utah Fresh."
            style={{
              width: "52%",
              height: "auto",
            }}
          />
          <div>
            <h1>Utah Medical Cards</h1>
            <p>
              A medical cannabis card, also known as a medical mari- juana card,
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
            //   width: "100%",
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
        <section>
          <h1>FAQs...</h1>
          <ul>
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
        <section>
          <h1>Utah Medical Cannabis Pharmacies</h1>
          <div>
            <ul>
              <li>** pharmacy contact components **</li>
            </ul>
          </div>
        </section>
        {/* -Utah Medical Cannabis Pharmacies */}
      </main>
      {/* Full-width sectional */}
      <section className="w-full flex flex-row gap-x-10 items-center justify-center">
        <div className="">
          <div>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              cumque harum eos consectetur quod repudiandae autem itaque, atque
              corporis fugiat necessitatibus iure sed non consequatur ratione
              voluptas maxime dolorum expedita?
            </p>
          </div>
          <div>
            <h1>Utah Grown Office</h1>
            <h2>730 State Street</h2>
            <h2>Salt Lake City, Utah 84111</h2>
          </div>
        </div>
        <Image
            src="/NormalizeItUtah@2x.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Image a plant growing from two pots that is in the shape of the state of Utah with hashtag: #NormalizeIt"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
      </section>
    </>
  );
};

export default Main;
