import React from 'react';

const AboutUs = () => {
  return (
    <div className=" py-12">
      <div className="max-w-screen-lg mx-auto px-6 lg:px-0">
      <h1 className="text-xl lg:text-3xl font-bold mb-8 text-white bg-[#484848] w-fit mx-auto px-4 py-3 text-center">
        About Us
      </h1>
        
        <section className="mb-8">
          <p className="mt-4 text-gray-700 text-lg">
            Welcome to our GenIdeas blog-sharing platform! We are passionate about providing a space where creativity, knowledge, and inspiration come together. 
            Whether you're a tech enthusiast, a lifestyle guru, or someone with a knack for storytelling, this is the perfect place to share your voice with the world.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-3xl font-semibold text-[#484848]">Our Mission</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Our mission is to empower individuals to express themselves and connect through the power of writing. 
            We aim to make sharing ideas simple, enjoyable, and impactful, enabling a community where diverse perspectives can thrive.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl lg:text-3xl font-semibold text-[#484848]">What We Offer</h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 text-sm">
            <li><strong>Creative Freedom:</strong> Post blogs on topics that matter to you — from technology and lifestyle to science, education, and beyond.</li>
            <li><strong>Ease of Use:</strong> Our user-friendly platform allows you to create, edit, and manage your blogs effortlessly.</li>
            <li><strong>Engagement:</strong> Reach a wide audience, get feedback on your posts, and interact with like-minded individuals.</li>
            <li><strong>Discoverability:</strong> Explore top blogs curated for you, or search for posts based on your interests.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl lg:text-3xl font-semibold text-[#484848]">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mt-4 text-gray-700 text-sm">
            <li><strong>Diverse Topics:</strong> A wide range of categories to ensure there's something for everyone.</li>
            <li><strong>Secure Platform:</strong> We prioritize your privacy and ensure a safe blogging experience.</li>
            <li><strong>Community Driven:</strong> Built for bloggers by bloggers, fostering an inclusive and supportive environment.</li>
            <li><strong>Accessible to All:</strong> Whether you're a beginner or a seasoned writer, our platform is for everyone.</li>
          </ul>
        </section>

        <div className="mt-12 text-center">
          <h3 className="text-xl lg:text-2xl font-semibold text-[#484848]">
            Ready to share your thoughts with the world?
          </h3>
          <p className="mt-4 text-gray-700 text-lg">
            Join our growing community of bloggers and readers today. Together, we can inspire, educate, and connect through the art of blogging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
