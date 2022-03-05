import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './screens/DetailPage';
import Homepage from './screens/Homepage';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/booking/:id' element={<DetailPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
