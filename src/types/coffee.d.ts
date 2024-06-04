interface ICoffee {
  id: string
  name: string
  description: string
  roasted: "Light Roasted" | "Medium Roasted" | "Dark Roasted"
  imagelink_square: any // Ideally, replace `any` with the correct type for an image require.
  imagelink_portrait: any // Replace `any` with the correct type.
  ingredients: string
  special_ingredient?: string // Marked as optional because it might not be present for all coffee objects.
  prices: Array<{ size: "S" | "M" | "L"; price: string; currency: string }>
  average_rating: number
  ratings_count: string
  favourite: boolean
  type: "Coffee"
  index: number
}
interface IBeans {
  id: string
  name: string
  description: string
  roasted: "Light Roasted" | "Medium Roasted" | "Dark Roasted"
  imagelink_square: any // Ideally, replace `any` with the correct type for an image require.
  imagelink_portrait: any // Replace `any` with the correct type.
  ingredients: string
  special_ingredient?: string // Marked as optional because it might not be present for all coffee objects.
  prices: Array<{ size: "S" | "M" | "L"; price: string; currency: string }>
  average_rating: number
  ratings_count: string
  favourite: boolean
  type: "Bean"
  index: number
}
