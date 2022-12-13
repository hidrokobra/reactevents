import React from 'react';
import '../CSS/idiomas.css';

function Selectlanguage() {

  function handleClick() {
      console.log("a");
      document.body.style.backgroundColor = "#f3f3f3";
      document.body.style.backgroundImage = "url('https://i.imgur.com/e2rSzxX.png')";
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div class="animate1"><button class="button-lang" role="button" onClick={handleClick}>English</button></div>
        <div class="animate2"><button class="button-lang" role="button">Español</button></div>
        <div class="animate3"><button class="button-lang" role="button">Francais</button></div>
      </header>
    </div>
  );
}

export default Selectlanguage;