
export default function NavBar() {
    return (
      <>
        <nav className="bg-blue-600 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold">
                  MyBrand
                </a>
              </div>
  
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200">
                  Home
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  About
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  Services
                </a>
                <a href="#" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </div>
  

              <div className="md:hidden">
                <button
                  className="text-white hover:text-blue-200 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
    