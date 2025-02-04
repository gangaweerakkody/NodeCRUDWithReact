

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Student from './Student';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Student/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
