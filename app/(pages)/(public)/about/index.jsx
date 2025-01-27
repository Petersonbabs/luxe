import Samuel from "@/public/illustrations/samuel-adewale.png";
import Ibukun from "@/public/illustrations/Olamide_Gabriel.png";
import Michael from "@/public/illustrations/Michael_Oparachi.png";
import Aisha from "@/public/illustrations/Aisha_Abubakar.png";
import Image from "next/image";

export default function AboutPageComponent() {
  return (
    <div className="pt-[70px] container">
      <h1 className="lbd-h1 text-center mb-4">Our Story</h1>
      <p>
        luxe by dnbl envisions a world where Nigerian elegance and heritage are
        celebrated globally through premium fashion. We aim to bridge cultures
        with exquisite products embodying Nigeria's vibrant traditions and
        sophisticated craftsmanship. Our goal is to inspire pride and connection
        among the Nigerian diaspora and fashion enthusiasts worldwide, making
        our brand synonymous with quality, community, and cultural excellence.
      </p>

      {/* OUR TEAM */}
      <section className="mt-16">
        <h1 className="lbd-h1 text-center">Our Team</h1>
        <section className="my-8 grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
          {/* first */}
          <div className="relative h-[400px] border bg-white">
            <Image
              src={Samuel}
              alt="Samuel adeyemi"
              className="h-full object-cover"
            />
            <div className="w-[90%] absolute bottom-6 left-[50%] translate-x-[-50%] m-auto border bg-d6 p-4 z-40">
              <h3 className="text-xl">Samuel Adeyemi</h3>
              <span>Role/Position.</span>
            </div>
          </div>
          {/* second */}
          <div className="relative h-[400px] border bg-white">
            <Image
              src={Ibukun}
              alt="Samuel adeyemi"
              className="h-full object-cover"
            />
            <div className="w-[90%] absolute bottom-6 left-[50%] translate-x-[-50%] m-auto border bg-d6 p-4 z-40">
              <h3 className="text-xl">Ibukun Oderinde</h3>
              <span>Role/Position.</span>
            </div>
          </div>
          {/* third */}
          <div className="relative h-[400px] border bg-white">
            <Image
              src={Michael}
              alt="Samuel adeyemi"
              className="h-full object-cover"
            />
            <div className="w-[90%] absolute bottom-6 left-[50%] translate-x-[-50%] m-auto border bg-d6 p-4 z-40">
              <h3 className="text-xl">Michael Oparachi</h3>
              <span>Role/Position.</span>
            </div>
          </div>
          {/* fourth */}
          <div className="relative h-[400px] border bg-white">
            <Image
              src={Aisha}
              alt="Samuel adeyemi"
              className="h-full object-cover"
            />
            <div className="w-[90%] absolute bottom-6 left-[50%] translate-x-[-50%] m-auto border bg-d6 p-4 z-40">
              <h3 className="text-xl">Aisha Abubakar</h3>
              <span>Role/Position.</span>
            </div>
          </div>
        </section>
      </section>

      {/* MISSION & VISSION */}
      <section className="grid md:grid-cols-2 mt-16 gap-8">
        <div>
          <h1 className="lbd-h1">Our Vision</h1>
          <div className="p-8 bg-white mt-4 rounded-tr-[4rem] rounded-bl-[4rem]">
            <p>
              Our journey began with a vision to connect the Nigerian diaspora
              with their roots through premium-quality products and services.
              Our brand is a testament to the rich cultural heritage and
              elegance of Nigeria.
            </p>
            <p>
              Inspired by the vibrant traditions and sophisticated craftsmanship
              of our homeland, we aim to bring a piece of Nigeria to you, no
              matter where you are in the world.
            </p>
          </div>
        </div>
        <div>
          <h1 className="lbd-h1">Our Values</h1>
          <div className="p-8 bg-white mt-4 rounded-tr-[4rem] rounded-bl-[4rem]">
            <p className="mb-2 text-lg">At the heart of our brand are our core values:</p>
            <ul className="list-disc">
              <li>
                <b className="font-extrabold underline">Quality</b>: We are committed to offering only the finest products
                that meet the highest standards of craftsmanship.
              </li>
              <li>
                <b className="font-extrabold underline">Community</b>: We believe in the power of community and aim to
                create a space where the Nigerian diaspora can connect, share,
                and support each other.
              </li>
              <li>
                 <b className="font-extrabold underline">Cultural Pride</b>: We celebrate our heritage and are dedicated to
                promoting and preserving the rich traditions of Nigeria.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex justify-between bg-white p-8 mt-16  flex-col sm:flex-row gap-4 items-center">
        <div>
          <p className="text-lg">Call Us +2349139135953</p>
        </div>

        <span className="">Or</span>

        <div>
          <p className="text-lg">Chat Us Up +2349011614592</p>
        </div>
      </section>
    </div>
  );
}
