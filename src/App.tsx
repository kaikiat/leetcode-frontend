import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LeetcodePage from './pages/Leetcode';
import WorkInProgressPage from './pages/Wip';
import Page404 from './pages/Page404';
import CreateSolutionPage from './pages/CreateSolution';

function App() {
  return (
    <div 
      className = "flex flex-col justify-start m-auto min-h-screen w-full max-w-6xl px-3 relative"
    >
    <Header/>
    <Routes>
      <Route path='/' element={ <LeetcodePage/> } />
      <Route path='/leetcode' element={ <LeetcodePage/> } />
      {/* <Route path='/dapp' element={ <WorkInProgressPage/> } /> */}
      <Route path='/new' element={ <CreateSolutionPage/> } />
      <Route path="*" element={<Page404 />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
