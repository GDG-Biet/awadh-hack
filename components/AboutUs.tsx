import Image from "next/image";
import balcony from "@/Assets/balcony.jpg";

export default function AboutUs() {
  return (
    <div className="w-full  h-[100vh] flex items-center gap-5 justify-center">
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
        <p className="text-xl text-white">
          {" "}
          We are a team of passionate career aspirants committed to creating
          equal opportunities and providing the same level of exposure to
          individuals in Lucknow as those in metro cities and beyond. At
          AwadhHacks, our mission is to cultivate an inclusive and collaborative
          environment where participants can come together to ideate, learn, and
          innovate. Our vision goes beyond just technical development; we aim to
          foster both technical and cultural growth, building a community
          that thrives on diversity and creativity. As aspirants ourselves, we
          value growth as an integral part of our journey, and we are dedicated
          to leveling up the reach and impact of our region's tech community.
          This year, we are thrilled to bring you one of India's largest
          hackathons—AwadhHacks. With countless opportunities, resources, and
          connections, we aim to empower participants to showcase their skills,
          explore their potential, and contribute to real-world solutions. Join
          us in this journey as we work together to elevate our community and
          create a lasting impact!"
        </p>
      </div>
    </div>
  );
}
