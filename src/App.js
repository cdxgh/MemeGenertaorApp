
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/Home";
import EditPage from './Pages/Edit';

export default function App() {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Edit" element={<EditPage/>} />
        </Routes>
    </div>
  );
};
