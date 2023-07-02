import { useNavigate } from 'react-router-dom';
import { postApi, LEETCODE_API } from '../services/api';
import { useState } from 'react';

const CreateSolutionPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    code: ''
  });

  const handleSubmit = async (e: any) => {  
    e.preventDefault()
    try {
      const response = await postApi(`${LEETCODE_API}/solutions`, {"solution": formState});
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
        ...formState,
        [event.target.name]: event.target.value
    });
};
  return (
    <div className='flex justify-start flex-col relative flex-1 mx-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
          <input 
            name="title" 
            id="title" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="1. Two Sum: Two Pointer"
            onChange={handleChange}
            />
        </div>
        <div className="mb-6">
          <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Code</label>
          <textarea 
            name="code" 
            rows={14}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Write your code here..."
            onChange={handleChange}
          />
        </div>
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Post
          </button>
      </form>
    </div>
  );
}

export default CreateSolutionPage;