export interface IProduct {
  ID: string
  Name: string
  Description: string
  Price: number
  Image: string
  SecondaryImages: [
    {
      ID: string
      Image: string
    }
  ]
}
