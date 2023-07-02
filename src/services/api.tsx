import { useState, useEffect } from 'react';
import axios from 'axios';
import { LeetcodeSolutionResponse, LeetcodeSolution } from '../types';
import { LeetcodeSolutionDTO } from '../dto';

const LEETCODE_API: string = process.env.REACT_APP_IS_PRODUCTION === 'false' ? 
    'http://127.0.0.1:8080/api' : 'https://rust.ntuasr.com/api';

const fetchApi = async <T,>(url :string) : Promise<T> => {
  const response = await axios.get(url)
  return response.data
}

const useFetchSolutions = () => {
  const [data, setData] = useState<LeetcodeSolutionDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi<LeetcodeSolutionResponse>(`${LEETCODE_API}/solutions`);
        setData(response.solutions.map((solution: LeetcodeSolution) => {
          return new LeetcodeSolutionDTO(
            solution.id,
            solution.title,
            solution.description,
            solution.code,
            new Date(solution.created_on),
            new Date(solution.modified_on),
          )
        }))
        setIsLoading(false)
      } catch (error) { 
        if (axios.isAxiosError(error)) {
          setError(error)
        }
        setIsLoading(false)
        }
    };

    fetchData()
  }, [])

  return { data, isLoading, error }
}

const postApi = async <T,U>(url :string, data: U) : Promise<T> => {
  const response = await axios.post(url, data)
  return response.data
}

export {
  LEETCODE_API,
  useFetchSolutions,
  postApi,
}


