export interface LeetcodeSolutionResponse {
  solutions: LeetcodeSolution[];
}
export interface CreateLeetcodeSolutionResponse {
  solution: LeetcodeSolution;
}
export interface LeetcodeSolution{
  id: number
  title: string
  description: string
  code: string
  created_on: string
  modified_on: string
}