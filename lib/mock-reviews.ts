export type Review = { name: string; city: string; rating: number; text: string; verified: boolean; photo?: string }

export const reviews: Review[] = [
  { name: 'Ayesha K.', city: 'Lahore', rating: 5, text: 'The Noor drapes beautifully and arrived carefully packed.', verified: true },
  { name: 'Mariam R.', city: 'Karachi', rating: 5, text: 'The quality feels so considered. I will be ordering again.', verified: true },
  { name: 'Sana H.', city: 'Islamabad', rating: 5, text: 'A perfect fit, and the exchange process was effortless.', verified: true },
  { name: 'Iqra F.', city: 'Faisalabad', rating: 4, text: 'The fabric is soft, breathable and exactly as pictured.', verified: true },
  { name: 'Hiba A.', city: 'Lahore', rating: 5, text: 'My Eid outfit was understated and beautiful.', verified: true },
  { name: 'Zainab M.', city: 'Karachi', rating: 5, text: 'Beautiful craftsmanship and thoughtful packaging.', verified: true },
]

export const productReviews = reviews.slice(0, 3)
export const reviewAverage = 4.8
