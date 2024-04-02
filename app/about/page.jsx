import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Our Story
        </h1>
        <Image
          src="/assets/about.jpg"
          width={600}
          height={600}
          alt="about us"
          className="rounded-md"
        />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-gray-50 pt-4 font-bold ">
          Welcome to DevDive, your ultimate destination for tech enthusiasts,
          developers, and learners alike 💻
        </p>

        <p className="max-w-[600px] text-center text-gray-600 dark:text-gray-50 pt-4">
          At DevDive, we're passionate about exploring the latest trends,
          insights, and innovations in the ever-evolving world of technology.
          Whether you're a seasoned developer seeking inspiration or a curious
          beginner eager to dive into the world of coding, our platform offers a
          wealth of resources, tutorials, and articles to fuel your journey.
          Join us as we embark on a deep dive into the fascinating realms of
          software development, cybersecurity, AI, and more. Let's navigate the
          tech landscape together at DevDive!
        </p>
        <Image
          src="/assets/signature.png"
          width={300}
          height={300}
          alt="tech pulse"
        />
      </div>
    </div>
  );
};

export default page;
