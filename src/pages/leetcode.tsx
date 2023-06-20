import Header from '../components/header';
import Leetcode from '../components/leetcode';
import { useFetchSolutions } from '../services/api';

const LeetcodePage = () => {
  const { data, isLoading, error } = useFetchSolutions();
  return (
    <div>
    <Header/>
    <div>
      {data.map((solution) => <Leetcode solution={solution}/>)}
    </div>
    </div>
  );
}

export default LeetcodePage;