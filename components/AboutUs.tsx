import Image from "next/image";
import balcony from "@/Assets/balcony.jpg";

export default function AboutUs() {
  return (
    <div className="w-full  h-[100vh] flex md:flex-row flex-col items-center gap-5 justify-center">
        <div className=" text-white h-auto w-auto rounded-3xl">
          <Image
            className="object-contain rounded-3xl"
            width={400}
            src={balcony}
            alt=""
          ></Image>
        </div>
      <div className="md:w-1/2 w-5/6">
        <p className="md:text-xl text-sm text-justify  text-white">
          We are a team of passionate career aspirants committed to creating
          equal opportunities and providing the same level of exposure to
          individuals in Lucknow as those in metro cities and beyond. At
          AwadhHacks, our mission is to cultivate an inclusive and collaborative
          environment where participants can come together to ideate, learn, and
          innovate. Our vision goes beyond just technical development; we aim to
          foster both technical and cultural growth, building a community
          that thrives on diversity and creativity.
          {/* <br/><br/>
          This year, we are thrilled to bring you one of India's largest
          hackathons—AwadhHacks. With countless opportunities, resources, and
          connections, we aim to empower participants to showcase their skills,
          explore their potential, and contribute to real-world solutions. Join
          us in this journey as we work together to elevate our community and
          create a lasting impact! */}
        </p>
      </div>
    </div>
  );
}
