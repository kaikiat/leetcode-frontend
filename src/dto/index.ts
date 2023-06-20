export class LeetcodeSolutionDTO {
  id: number
  title: string
  description: string
  code: string
  createdOn: Date
  modifiedOn: Date
   
  constructor(
    id: number,
    title: string,
    description: string, 
    code: string, 
    createdOn: Date,
    modifiedOn: Date,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.code = code
    this.createdOn = createdOn
    this.modifiedOn = modifiedOn
  }

    getCreatedOn() {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let date = new Date(this.createdOn)
      return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`
    }
  }
  
export default {
  LeetcodeSolutionDTO
}