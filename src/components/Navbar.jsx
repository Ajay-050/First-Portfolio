
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="font-bold pl-2 text-5xl text-white">AK.<span className="text-xl text-gray-500">codes</span>
                </h1>
            </div>
            <div className="m-10 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ajay-kumar-772923280/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-700"/>
                </a>
                <a href="https://github.com/Ajay-050" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-blue-700"/>
                </a>
                <a href="https://x.com/AjayKum27273128" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter className="hover:text-blue-700"/>
                </a>
                <a href="https://www.instagram.com/ajaykumar_050/?next=%2F" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-blue-700"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;