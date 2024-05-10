import { FiGithub } from 'react-icons/fi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { LuGlobe } from 'react-icons/lu';

import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <div className="max-w-[25rem] bg-[#E5E7E9] border-2 border-slate-800 p-4 flex flex-col rounded">
      <p className="text-lg pb-3">
        Hey! 👋 My name is Natnael. I’m a web developer who enjoys design work,
        too.
      </p>
      <h2 className="my-2 text-3xl font-bold">Let’s Connect</h2>
      <div className="flex flex-col gap-4 my-3 mx-2">
        <Link className="flex items-center gap-2">
          <FiGithub size={25} />
          <p className="text-lg underline">GitHub</p>
        </Link>
        <Link className="flex items-center gap-2">
          <PiLinkedinLogoBold size={25} />
          <p className="text-lg underline">LinkedIn</p>
        </Link>
        <Link className="flex items-center gap-2">
          <LuGlobe size={25} />
          <p className="text-lg underline">Portfolio Website</p>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
