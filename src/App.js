import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Home from './components/Home';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
