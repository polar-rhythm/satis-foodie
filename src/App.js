
import './App.css';
import Home from './components/Home';
import Order from './components/Order';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Order" element={<Order/>}/>
      </Routes>
  );
}

export default App;
