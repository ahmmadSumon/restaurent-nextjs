import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/40 text-gray-300">
      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">YourShop</h2>
          <p className="text-gray-400">
            Your one-stop destination for quality products and excellent service.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">123 Main Street, Dinajpur, Bangladesh</p>
          <p className="text-gray-400">Phone: +880 1751 260010</p>
          <p className="text-gray-400">Email: info@yourshop.com</p>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12A10 10 0 1 0 2 12a10 10 0 0 0 20 0zm-5.25-1.5H16v-1.75c0-.66.34-1 1-1h1v-2h-1.5c-2.34 0-3.5 1.16-3.5 3.5v2H12v2.5h2.5V21H16v-5.5h2l.5-2.5z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.92c-.77.34-1.6.57-2.48.67a4.31 4.31 0 0 0 1.88-2.37c-.84.5-1.77.86-2.75 1.06a4.3 4.3 0 0 0-7.31 3.91c-3.57-.18-6.73-1.88-8.85-4.46a4.27 4.27 0 0 0-.58 2.16 4.3 4.3 0 0 0 1.9 3.58 4.3 4.3 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.44 4.22 4.3 4.3 0 0 1-1.94.07 4.3 4.3 0 0 0 4.02 3 8.63 8.63 0 0 1-5.34 1.84A8.5 8.5 0 0 1 2 18.36a12.2 12.2 0 0 0 6.63 1.94c7.95 0 12.3-6.6 12.3-12.31 0-.19-.01-.38-.02-.56A8.82 8.82 0 0 0 22 5.92z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.16c3.2 0 3.584.013 4.85.07 1.366.063 2.633.373 3.608 1.348.975.975 1.285 2.242 1.348 3.608.057 1.266.07 1.65.07 4.85s-.013 3.584-.07 4.85c-.063 1.366-.373 2.633-1.348 3.608-.975.975-2.242 1.285-3.608 1.348-1.266.057-1.65.07-4.85.07s-3.584-.013-4.85-.07c-1.366-.063-2.633-.373-3.608-1.348-.975-.975-1.285-2.242-1.348-3.608C2.173 15.584 2.16 15.2 2.16 12s.013-3.584.07-4.85c.063-1.366.373-2.633 1.348-3.608.975-.975 2.242-1.285 3.608-1.348C8.416 2.173 8.8 2.16 12 2.16zm0 1.86c-3.145 0-3.51.012-4.75.068-1.013.045-1.56.213-1.926.579-.366.366-.534.913-.579 1.926-.056 1.24-.068 1.605-.068 4.75s.012 3.51.068 4.75c.045 1.013.213 1.56.579 1.926.366.366.913.534 1.926.579 1.24.056 1.605.068 4.75.068s3.51-.012 4.75-.068c1.013-.045 1.56-.213 1.926-.579.366-.366.534-.913.579-1.926.056-1.24.068-1.605.068-4.75s-.012-3.51-.068-4.75c-.045-1.013-.213-1.56-.579-1.926-.366-.366-.913-.534-1.926-.579-1.24-.056-1.605-.068-4.75-.068zM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zM17.9 5.6a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} YourShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
