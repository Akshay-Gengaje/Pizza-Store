const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* Column 1 */}
        <div>
          <h3 className="text-orange-400 text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Welcome to Pizzala, where we serve the tastiest and best pizzas in
            the world! With a legacy of excellence, our pizzas are crafted with
            love and the finest ingredients.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-orange-400 text-xl font-bold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                Order Now
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-orange-400 text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-400">
            <strong>Email:</strong> info@Pizzala.com
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> 123 Pizza Street, Flavor Town, USA
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-5 text-center text-gray-500">
        <p>&copy; 2024 Pizzala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
