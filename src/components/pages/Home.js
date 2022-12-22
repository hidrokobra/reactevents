import React from 'react';
import '../CSS/formularios.css';
import '../CSS/index.css';

export default function Home() {
  return (
    <>
        <div>
          <br /> <br />
          <table>
            <tr>
              <td colSpan={2}>
                <img src="https://i.imgur.com/F1YozVZ.png" class="pera" />
                <h1 class="title1">A way to organice your schedule!</h1>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <img src="https://i.imgur.com/F1YozVZ.png" class="pera2" />
                <h1 class="title2">A way to organice your schedule!</h1>
              </td>
              <td>
                <img src="https://i.imgur.com/F1YozVZ.png" class="pera2" />
                <h1 class="title2">A way to organice your schedule!</h1>
              </td>
            </tr>
          </table>
        </div>
    </>
  );
};
