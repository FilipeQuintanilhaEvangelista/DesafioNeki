import "./header.scss";
import logoutIcon from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userLogged = localStorage.getItem("userLogged");
  const arrayUser = JSON.parse(userLogged);

  const logout = () =>{
    localStorage.removeItem("userLogged");
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header>
      <img
        className="logo-header"
        src="https://neki-it.com.br/wp-content/uploads/2022/02/LogoRodape-1-1024x376.png"
        alt="neki-logo"
      />
      <h2>
        Olá, {arrayUser.username}!
      </h2>
      <button onClick={() => logout()} className="logout-button">
        <img src={logoutIcon} alt="logout-icon" />
      </button>
    </header>
  );
};

export default Header;
