import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Home from './components/Home';
import store from './redux/store';
import DisplayActives from './components/stocksCategory/actives/displayActives';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            <Route path="stocks/actives" element={<DisplayActives />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
