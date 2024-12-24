import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <header className="bg-orange-400 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">We&apos;d love to hear from you!</p>
      </header>

      <div className="flex">
        {/* Map Section */}
        <section className="map-section my-10 flex-1">
          <div className="container mx-auto px-5">
            <h2 className="text-2xl font-bold text-center mb-6">Find Us</h2>
            <MapContainer
              center={[40.73061, -73.935242]}
              zoom={12}
              style={{ width: "100%", height: "400px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[40.73061, -73.935242]}>
                <Popup>
                  Pizza Heaven <br /> 123 Pizza Street, Flavor Town, USA
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className=" bg-white py-10 flex-1">
          <div className="container mx-auto px-5">
            <h2 className="text-2xl font-bold text-center mb-6">
              Get In Touch
            </h2>
            <form className="max-w-xl mx-auto space-y-5">
              <div>
                <label className="block font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                  placeholder="Your message here..."
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Subscription Section */}
      <section className="subscribe-section bg-gray-900 text-white py-10">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 mb-6">
            Stay updated with our latest offers and news!
          </p>
          <form className="max-w-md mx-auto flex space-x-3">
            <input
              type="email"
              className="flex-1 border-2 border-gray-500 rounded-lg p-3 focus:outline-none focus:border-orange-400"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-orange-400 text-white py-3 px-5 rounded-lg font-bold hover:bg-orange-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
