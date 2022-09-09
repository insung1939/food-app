import { color } from '../types/color'

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
