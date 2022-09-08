import { IFoodList } from '../types/foodList'

type IFoodInfoProps = {
  foodData: IFoodList
  onClick: () => void
}

export default function FoodInfo({ foodData }: IFoodInfoProps) {
  return <div style={{ color: 'red' }}>{foodData.brand}</div>
}
