//color
import { color } from '../styles/color'

//common functions

export const getGradeBg = (grade: string | undefined) => {
  switch (grade) {
    case 'A+':
      return color.green
    case 'A':
      return color.yellowGreen
    case 'A-':
      return color.boldYellow
    case 'B+':
      return color.yellow
    case 'B':
      return color.orange
    case 'B-':
      return color.boldOrange
    case 'C':
      return color.red
    default:
      break
  }
}

export const getNutritionName = (word: string) => {
  switch (word) {
    case 'carbs':
      return '탄수화물'
    case 'protein':
      return '단백질'
    case 'fat':
      return '지방'
    case 'natrium':
      return '나트륨'
    default:
      break
  }
}
