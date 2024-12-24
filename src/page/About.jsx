const About = () => {
  return (
    <div className="about-us-page bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-orange-400 text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          Discover our journey and passion for pizza.
        </p>
      </header>

      {/* History Section */}
      <section className="history-section bg-white py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-gray-700 text-lg leading-7">
            Pizza Heaven was founded in 1985 with a simple dream: to bring the
            joy of authentic, delicious pizzas to the world. Starting as a small
            family-owned pizzeria in Flavor Town, USA, we quickly became a local
            favorite thanks to our commitment to quality and tradition. Over the
            years, we've grown to become a global brand, but our values remain
            the same. Every pizza we make is a testament to our dedication to
            excellence and our passion for creating unforgettable culinary
            experiences.
          </p>
          <p className="text-gray-700 text-lg leading-7 mt-4">
            From our signature handmade crusts to our freshly sourced toppings,
            we ensure that every bite is a celebration of flavor. Join us on our
            journey as we continue to share our love for pizza with communities
            around the globe.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section py-10 bg-gray-100">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To deliver happiness through the world's best pizzas, crafted with
              love and the finest ingredients, while fostering a sense of
              community and joy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the most beloved pizza brand worldwide, inspiring smiles and
              creating moments of connection through our exceptional food and
              service.
            </p>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="cta-section bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-400 mb-6">
            Be part of our story and share the love for the world's best pizzas.
          </p>
          <button className="bg-orange-400 py-3 px-5 rounded-lg text-white font-bold hover:bg-orange-500 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
