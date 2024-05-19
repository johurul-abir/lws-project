import "./Button.scss";
import { FiExternalLink } from "react-icons/fi";
const Button = ({ children }) => {
  return (
    <button>
      {" "}
      <FiExternalLink /> {children}
    </button>
  );
};

export default Button;
