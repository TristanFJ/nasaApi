export class Picture {
  constructor(data){
    this.imgUrl = data.hdurl
    this.date = data.date
    this.title = data.title
    this.description = data.explanation
  }
}