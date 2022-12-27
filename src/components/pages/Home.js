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
                <h1 class="title1">Don't get lost on your shedule events!</h1>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <img src="https://i.imgur.com/k1kYO8J.png" class="pera2" />
                <h1 class="title2">Organice your time properly</h1>
              </td>
              <td>
                <img src="https://i.imgur.com/F1YozVZ.png" class="pera2" />
                <h1 class="title2">Get notifications via email or google calendar!</h1>
              </td>
            </tr>
          </table>
        </div>
    </>
  );
};
