import logo from '../assets/logo-1.png';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const currentDate = new Date();

  const options = {
    weekday: 'short', // Abbreviated day of the week (e.g., "Thu")
    month: 'short', // Abbreviated month name (e.g., "May")
    day: 'numeric', // Numeric day of the month (e.g., "9")
    year: 'numeric', // Full year (e.g., "2022")
  };

  const formattedDate = currentDate.toLocaleDateString('en-us', options);

  return (
    <header className="fixed w-full h-[70px] z-50 p-2 bg-[#bfc9caeb] shadow-md">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            width={55}
            className="border-2 border-slate-700 rounded-full"
          />
          <nav>
            <ul className="flex items-center mx-8 gap-4">
              <Link to="/">Home</Link>
              <li>
                <a href="#">Files</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="border-2 border-slate-600 py-2 px-3 mx-2 rounded-2xl outline-none bg-transparent"
            placeholder="Search for Blog Post"
          />
          <button className="bg-[#34495E] text-white p-2 rounded-full">
            <FiSearch size={20} />
          </button>

          <div className="hidden sm:block font-semibold text-lg ml-3">
            {formattedDate}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
