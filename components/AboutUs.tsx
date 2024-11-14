import Image from "next/image";
import balcony from "@/assets/balcony.jpg";

export default function AboutUs() {
  return (
    <div className="w-full  h-[60vh] flex items-center gap-5 justify-center">
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className=" text-white h-auto w-auto rounded-3xl">
          <Image
            className="object-contain rounded-3xl"
            width={400}
            src={balcony}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-2xl text-white">
          {" "}
          We career aspirants equal opportunities and exposure as people in
          metro cities or all around the world get! We are determined to
          cultivate an ambiance where individuals can coact to create an
          inclusive environment to devise, grasp and develop solutions. Our
          motive is not only concerned with technical but also cultural
          development. As a team of aspirants we welcome growth as a part of our
          journey. So, here we are, organizing the biggest hackathon of central
          India, with enormous amounts of opportunities and capabilities to
          level up the community reach of the region.
        </p>
      </div>
    </div>
  );
}
