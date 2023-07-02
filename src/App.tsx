import { Routes, Route } from 'react-router-dom';
// import Footer from './components/footer';
import Header from './components/header';
import LeetcodePage from './pages/leetcode';
import Page404 from './pages/page404';
import CreatePage from './pages/create';

function App() {
  return (
    <div 
      className = "flex flex-col justify-start m-auto min-h-screen w-full max-w-6xl px-3 relative"
    >
    <Header/>
    <Routes>
      <Route path='/' element={ <LeetcodePage/> } />
      <Route path='/leetcode' element={ <LeetcodePage/> } />
      <Route path='/new' element={ <CreatePage/> } />
      <Route path="*" element={<Page404 />} />
    </Routes>
    {/* <Footer/> */}
  </div>
  );
}

export default App;
