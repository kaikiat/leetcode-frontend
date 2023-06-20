import { Routes, Route } from 'react-router-dom';
import LeetcodePage from './pages/leetcode';
import WorkInProgressPage from './pages/wip';
import Page404 from './pages/page404';

function App() {
  return (
    <div 
      className = "flex flex-col justify-start m-auto min-h-screen w-full max-w-6xl relative"
    >
    <Routes>
      <Route path='/' element={ <LeetcodePage/> } />
      <Route path='/leetcode' element={ <LeetcodePage/> } />
      <Route path='/dapp' element={ <WorkInProgressPage/> } />
      <Route path='/new' element={ <WorkInProgressPage/> } />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </div>
  );
}

export default App;
