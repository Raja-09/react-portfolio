import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Mywork from './components/Mywork';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='mywork' element={<Mywork />} />
      </Routes>
    </>
  );
}

export default App;
