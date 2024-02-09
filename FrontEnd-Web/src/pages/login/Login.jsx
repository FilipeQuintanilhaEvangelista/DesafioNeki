import { useState, useEffect } from "react";
import "./login.scss";
import logoNeki from "../../assets/Logo-Neki.png";
import show from "../../assets/show.png";
import hide from "../../assets/hide.png";
import { useNavigate, Navigate } from "react-router-dom";
import { getUsers, postLogin } from "../../service/api";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginSalvo = localStorage.getItem("login");
    if (loginSalvo) {
      setLogin(loginSalvo.split(" ")[0]);
      setPassword(loginSalvo.split(" ")[1]);
      setRememberPassword(true);
    }
  }, []);

  const userLogged = localStorage.getItem("userLogged");

  if (userLogged) {
    return <Navigate to="/home" />;
  }

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberPasswordChange = () => {
    setRememberPassword(!rememberPassword);
    if (!rememberPassword) {
      localStorage.setItem("login", login.trim() + " " + password);
    } else {
      localStorage.removeItem("login");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 

    if (login !== "" || password !== "") {
      try {
        const response = await postLogin(login.trim(), password);

        const token = response.data.token
        localStorage.setItem("token", token);

      } catch (error) {
        console.log(error);
        alert("Credenciais Incorretas!")
      } finally {
        const acessToken = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${acessToken}`,
          },
        };
        try {
          const resposta = await getUsers(config);
          const userLogged = resposta.data.find(
            (user) => user.username === login.trim()
          );
          localStorage.setItem("userLogged", JSON.stringify(userLogged));
          navigate("/home");
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      alert("Preencha todos os campos");
    }
  };

  const goToRegister = () => {
    navigate("/cadastro");
  };

  return (
    <main>
      <section className="main-container">
        <div className="left-column">
          <img className="logo" src={logoNeki} alt="Logo-Neki" />
        </div>
        <div className="middle-line"></div>
        <div className="right-column">
          <h2 className="title">Login</h2>
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
            <div className="lembrar-senha">
              <input
                id="lembrar"
                type="checkbox"
                checked={rememberPassword}
                onChange={handleRememberPasswordChange}
              />
              <label htmlFor="lembrar">Lembrar senha</label>
            </div>
            <button
              className="login-button"
              type="button"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </form>
          <button className="register-button" onClick={goToRegister}>
            Não possui conta? Cadastrar-se
          </button>
        </div>
      </section>
    </main>
  );
}

export default Login;
