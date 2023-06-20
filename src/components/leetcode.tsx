
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { LeetcodeSolutionDTO } from '../dto';

type LeetCodeProps = {
  solution: LeetcodeSolutionDTO
}

const Leetcode = ({solution} : LeetCodeProps) => {
  // let codeString = `impl Solution {
  //     pub fn can_make_arithmetic_progression(mut arr: Vec<i32>) -> bool {
  //         let mut sorted_arr = arr.clone();
  //         sorted_arr.sort_unstable();
  //         let diff = sorted_arr[1] - sorted_arr[0];
          
  //         sorted_arr
  //             .iter()
  //             .zip(sorted_arr.iter().skip(1))
  //             .all(|(&a, &b)| b - a == diff)
  //     }
  //   }`;
  return (
    <div className='items-center bg-white shadow-none rounded-lg overflow-hidden m-10 cursor-pointer'>
      <div>
        <hr style = {{'color':'rgb(226 232 240)'}}/>
        <div className='text-xl text-black font-semibold pl-3 pt-3 pb-3 text-center'>
          {solution.getCreatedOn()} - {solution.title}
        </div>
        <hr style = {{'color':'rgb(226 232 240)'}}/>
          <div className = 'ml-10'>
            <h1 className='text-2xl text-bold py-5'>Complexity</h1>
            <ul className="list-disc ml-8">
              <li>Time complexity: O(nlogn)</li>
              <li>Space complexity: O(logn)</li>
            </ul>
            <h1 className='text-2xl pt-5 pb-3'>Code</h1>
          </div>
          <div className='p-2'>
            <SyntaxHighlighter 
              language="rust" 
              style={monoBlue} 
              showLineNumbers={true}
            >
              {solution.code}
            </SyntaxHighlighter>
          </div>
          <div className = 'ml-2 mb-5'>
            <span
              className = 'mb-3 mt-1 mr-1 font-i text-sm font-light border-slate-200 border-r-gray-900 px-5 py-1'
              style = {{'backgroundColor':'rgb(234, 238, 243)'}}
            >
              rust
            </span>
            <span
              className = 'mb-3 mt-1 mr-1 font-i text-sm font-light border-slate-200 border-r-gray-900 px-5 py-1'
              style = {{'backgroundColor':'rgb(234, 238, 243)'}}
            >
              leetcode
            </span>
          </div>
        <div/>
      </div>
    </div>
  );
}

export default Leetcode;