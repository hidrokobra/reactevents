import React from 'react';
import '../CSS/formularios.css';

export default function Createevent() {
  return (
    <>
      <div class="newevent">
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
        </div>
      </div>
    </>
  );
}