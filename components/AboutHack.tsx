"use client";
import { Parallax } from "react-scroll-parallax";
import "./Header.css";

export default function AboutHack() {
  return (
    <Parallax speed={-10}>
      <div
        className="w-11/12 m-auto h-[90vh] items-center rounded-2xl"
        id="Handler-css"
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-20">
          <p className="font-semibold text-2xl text-white">
            Awadh Hacks is an exciting 24-hour hackathon held in Lucknow,
            Uttar Pradesh, India. This intense, time-bound event invites
            participants to ideate, build, and present innovative solutions to a
            panel of judges, all within a single day. AwadhHacks is designed to
            inspire creativity, collaboration, and innovation among
            participants. It’s a unique opportunity to showcase your skills,
            connect with like-minded peers, and potentially earn prizes and
            recognition for your work. Throughout the hackathon, teams will
            collaborate to tackle real-world challenges, creating impactful
            solutions that demonstrate both technical skills and practical
            thinking. Join AwadhHacks to push the boundaries of your
            imagination, technical expertise, and problem-solving abilities and
            to make a real difference with your ideas!
          </p>
        </div>
      </div>
    </Parallax>
  );
}
