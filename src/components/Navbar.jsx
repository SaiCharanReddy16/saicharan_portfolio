import logo from "../assets/SC_logo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    {/* <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/saicharan16/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
        <FaLinkedin />
        </a>
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
    </div>  */}
  </nav>
  );
};

export default Navbar;



// import logo from "../assets/SC_logo.png";

// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="logo" />
//       </div>
//       <div className="flex items-center justify-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/saicharan16/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/SaiCharanReddy16" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//           <FaGithub />
//         </a>
//         <a 
//           href="https://drive.google.com/file/d/1rYsMn0U6Yx38PdG6_BuSlGJ-oV2-_IVb/view?usp=sharing" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#007BFF', color: '#FFF', borderRadius: '0.25rem', textDecoration: 'none' }}
//         >
//           Resume
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import logo from "../assets/SC_logo.png";

// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="logo" />
//       </div>
//       <div className="flex items-center justify-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/saicharan16/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/SaiCharanReddy16" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
//           <FaGithub />
//         </a>
//         <a 
//           href="https://drive.google.com/file/d/1rYsMn0U6Yx38PdG6_BuSlGJ-oV2-_IVb/view?usp=sharing" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#007BFF', color: '#FFF', borderRadius: '0.25rem', textDecoration: 'none' }}
//         >
//           Resume
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
