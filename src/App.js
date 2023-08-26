
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/Home";

export default function App() {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        </Routes>
    </div>
  );
};
