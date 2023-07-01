import Link from "next/link";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {


  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="footer  items-center p-4 mt-10 bg-[#08299B] text-neutral-content">
      <div className="items-center grid-flow-col gap-3">
      <Link href="/" className="flex justify-center items-center">
              <h2 className="pl-2 text-xl text-bold font-extrabold	">Care finder</h2>
            </Link>
      </div>
                    <p>Copyright © {year} - All right reserved</p>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://www.linkedin.com/in/johnhenry-chibueze-b01ba41b3/">
          <AiOutlineLinkedin className="w-7 h-7 hover:text-slate-400" />
        </Link>
        <Link href="https://github.com/chibuezej">
          <AiOutlineGithub className="w-7 h-7 hover:text-slate-400" />
        </Link>
        <Link href="https://twitter.com/Merilesjohn">
          <AiOutlineTwitter className="w-7 h-7 hover:text-blue-400" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
