"use client";
import { Parallax } from "react-scroll-parallax";

export default function AboutHack() {
  return (
    <Parallax speed={-10}>
      <div className="w-11/12 m-auto bg-pattern h-[90vh] items-center rounded-2xl">
        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-20">
          <p className="font-semibold text-2xl text-white">
            HackTheSpace is an exciting 24-hour event that takes place in
            Bhilai, India. It is a time-limited event that encourages
            participants to brainstorm, develop, and present their ideas to a
            panel of judges. This event is designed to foster creativity,
            collaboration, and innovation among participants. It offers an
            excellent opportunity for participants to showcase their skills,
            network with peers, and potentially win prizes and recognition for
            their work. During the event, participants will work in teams to
            develop innovative ideas that can solve real-world problems. They
            will be encouraged to use their creativity, technical skills, and
            critical thinking abilities to develop solutions that are both
            practical and effective
          </p>
        </div>
      </div>
    </Parallax>
  );
}
