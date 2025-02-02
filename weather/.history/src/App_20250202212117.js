import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKkdXNNFFa1-4FsQcjI8E_aZM8s8kmT_w",
  authDomain: "weather-main-8dd19.firebaseapp.com",
  projectId: "weather-main-8dd19",
  storageBucket: "weather-main-8dd19.firebasestorage.app",
  messagingSenderId: "910210359089",
  appId: "1:910210359089:web:8a7302aeede7d1d900da10",
  measurementId: "G-06BLT9BKE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
