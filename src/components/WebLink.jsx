import web from '../assets/web.png';
import { AiTwotoneSave } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const WebLink = (props) => {
  const { title, link, description } = props;
  return (
    <div className="max-w-md px-4 py-2 border-[4px] border-solid border-[#1d2a35] backgroundShadow duration-300 my-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <img src={web} alt="Web link image" className="w-12 h-12" />
          <h3 className="text-3xl underline font-semibold">{title}</h3>
        </div>
        <div>
          <AiTwotoneSave size={35} className="cursor-pointer" />
        </div>
      </div>
      <Link
        to={link}
        target="_blank"
        className="font-semibold mt-5 underline cursor-pointer"
      >
        {link}
      </Link>

      {description && (
        <p className="text-lg md:text-xl my-2 md:my-6">{description}</p>
      )}
    </div>
  );
};

export default WebLink;
