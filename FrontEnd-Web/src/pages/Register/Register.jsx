import { useState } from "react";
import logoNeki from "../../assets/Logo-Neki.png";
import show from "../../assets/show.png";
import hide from "../../assets/hide.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../login/login.scss";
import { registerUser } from "../../service/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async () => {
    if (login === "" || password === "" || confirmPassword === "") {
      alert("Preencha todos os campos");
    } else {
      if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return 0;
      }
      try {
        const response = await registerUser(login.trim(), password);
        console.log(response.data);
        toast.success("Cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
        setLogin("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const returnToLogin = () => {
    navigate("/");
  };

  return (
    <main>
      <ToastContainer />
      <section className="main-container">
        <div className="left-column">
          <img className="logo" src={logoNeki} alt="Logo-Neki" />
        </div>
        <div className="middle-line"></div>
        <div className="right-column">
          <h2 className="title">Cadastro</h2>
          <form>
            <div className="login-container">
              <input
                id="login"
                type="text"
                value={login}
                onChange={handleLoginChange}
                placeholder="Login"
              />
            </div>
            <div className="senha-container">
              <input
                id="senha"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className="show-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? hide : show} alt="" />
              </button>
            </div>
            <div className="senha-container">
              <input
                id="confirmar-senha"
                placeholder="Confirme a Senha"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button
                className="show-password"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? hide : show} alt="" />
              </button>
            </div>
            <button
              className="login-button"
              type="button"
              onClick={handleRegister}
            >
              Salvar
            </button>
          </form>
          <button className="register-button" onClick={returnToLogin}>
            Voltar para o login
          </button>
        </div>
      </section>
    </main>
  );
}

export default Register;
