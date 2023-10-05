export type SearchResult = {
  meta: {
    CurrentPage: number
    Limit: number
    TotalHits: number
    TotalPages: number
  }
  results: Array<FAQResult | ResourceResult | ArticleResult>
}

export type FAQResult = {
  ID: string
  Question: string
  Answer: string
  Source: "faqs"
}
export type ResourceResult = {
  ID: string
  Title: string
  Description: string
  Link: string
  Source: "resources"
}

export type ArticleResult = {
  ID: string
  Title: string
  Description: string
  Source: "articles"
}
