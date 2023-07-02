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
    </div>
  );
}

export default LeetcodePage;