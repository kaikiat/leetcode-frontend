import Leetcode from '../components/leetcode';
import { useFetchSolutions } from '../services/api';

const LeetcodePage = () => {
  const { data, isLoading, error } = useFetchSolutions()  
  return (
    <div>
    <div>
      {/* {data.map((solution, id) => <Leetcode solution={solution} key={id}/>)} */}
      {[...data].reverse().map((solution, id) => <Leetcode solution={solution} key={id}/>)}
    </div>
    <div className="w-100 justify-between flex mt-6">
      <div>
        <a href='/' className="flex items-center group w-fit">
          <div className="rotate-180 mr-3 w-10 h-10 rounded-full border-2 border-[#e6e9ee] flex items-center justify-center group-hover:border-[#000] transition-all duration-300 ease-in-out">
            {/* <img src="/build/thin-arrow-JHI6MXDS.svg" alt="arrow" className="w-6 h-6 !my-0 translate-x-0 group-hover:translate-x-1 transition-all duration-500 ease-in-out" loading="lazy"/> */}
          </div>
          <div>Back</div>
        </a>
      </div>
    </div>
    </div>
  );
}

export default LeetcodePage;