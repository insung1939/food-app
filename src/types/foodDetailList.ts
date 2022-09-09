export interface INutritionRatio {
  name: string
  ratio: number
  recommended: number
  diff: number
}

export interface INutritionFacts {
  name: string
  ratio: number
  amount: string
  recommended_amount: string
}

export interface IFoodDetailList {
  id: number
  name: string
  brand: string
  price: number
  url: string
  image_url: string
  nutrients_ratio: INutritionRatio[]
  nutrition_grade: string
  nutrition_facts: INutritionFacts[]
}
