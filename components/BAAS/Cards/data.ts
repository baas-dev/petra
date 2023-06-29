export interface Album {
  title: string
  designation: string
  cover: string
}

export const listenNowAlbums: Album[] = [
  {
    title: "2023 Morgage Approval Tips",
    designation: "Most Recent Post",
    cover:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/165372df-f258-40e6-d609-f239669e4100/public",
  },
  {
    title: "How To Get A Mortgage",
    designation: "Pinned Video",
    cover:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/475dc5bb-a720-4657-f78d-063191dedd00/public",
  },
  {
    title: "Top Rated Mortgage Lender",
    designation: "Leave A Review",
    cover:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/ad8b4d83-191c-4607-93f9-afe25676b000/public",
  },
  {
    title: "Merits",
    designation: "Our Awards & Recognitions",
    cover:
      "https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/8e031626-4a0d-4add-3a65-8b0cd7f50b00/public",
  },
]

export const madeForYouAlbums: Album[] = [
  {
    title: "Thinking Components",
    designation: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
  },
  {
    title: "Functional Fury",
    designation: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
  },
  {
    title: "React Rendezvous",
    designation: "Ethan Byte",
    cover:
      "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
  },
  {
    title: "Stateful Symphony",
    designation: "Beth Binary",
    cover:
      "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
  },
  {
    title: "Async Awakenings",
    designation: "Nina Netcode",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
  },
  {
    title: "The Art of Reusability",
    designation: "Lena Logic",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
  },
]

export type Playlist = (typeof playlists)[number]

export const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top designations",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
]
