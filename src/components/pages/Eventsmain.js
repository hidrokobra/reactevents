import React from 'react';
import '../CSS/formularios.css';
import '../CSS/index.css';

const Eventsmain = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div class="login">
        <img src="https://i.imgur.com/F1YozVZ.png" class="pera" />
          <div class="formulario">
            <form>
                <label for="fname"  id="email">E-mail</label><br />
                <input type="text" id="femail" name="usuario" placeholder="example@mail.com" />       
                <br />
                <label for="fname" id="password">Password</label><br />
                <input type="password" id="fpassword" name="contrasena" placeholder="**********" />
                <label for="fname"  id="languaje">Language</label>
                <select id="idioma" name="idioma" onChange="Idioma()">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                </select>
            </form>
            <br />
            <label class="manzana" id="rememberme">Remember me
                <input type="checkbox" />
                <span class="checkbonito"></span>
            </label>
            <br />
            <input type="submit" value="Login" onclick="Login()" />
            <br />
            <h2 class="linea"><span id="other">Login with</span></h2>
            <br />
            <center>
                <img src="https://i.imgur.com/ZyhMKBO.png" />
                <img src="https://i.imgur.com/Gh3eTe8.png" />
                <img src="https://i.imgur.com/TsRroTk.png" />
            </center>
          </div>
          </div>
      </header>
    </div>
  );
};
  
export default Eventsmain;