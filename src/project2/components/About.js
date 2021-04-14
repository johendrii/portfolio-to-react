import { Link } from "react-router-dom";
import logo from "./img/johendri.jpg";

const About = () => {
  return (
    <div>
      <img src={logo} className="logo" alt="" />
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
