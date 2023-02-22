import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// abrir site
function closeWelcomeScreen() {
  const welcomeScreen = document.querySelector('.welcome-screen');
  welcomeScreen.remove();
}

function handleStartButtonClick() {
  closeWelcomeScreen();
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", handleStartButtonClick);

setTimeout(closeWelcomeScreen, 100000); // remove a tela de boas-vindas após x seg



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
