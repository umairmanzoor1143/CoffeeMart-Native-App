import { createSelectorHooks } from "auto-zustand-selectors-hook"
import { resetters } from "../"
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import CoffeeData from "../../data/CoffeeData"
import BeansData from "../../data/BeansData"

type State = {
  coffeeList: Partial<ICoffee>
  beansList: Partial<IBeans>
  cartPrice: number
  favoriteList: Partial<ICoffee>
  oderHistoryList: Partial<ICoffee>
}
type Actions = {}
const INITIAL_STATE = {
  coffeeList: CoffeeData,
  beansList: BeansData,
  cartPrice: 0,
  favoriteList: [],
  oderHistoryList: [],
}
const useStoreBase = create<State & Actions>()(
  devtools(
    immer<State & Actions>((set, get) => {
      return {
        ...INITIAL_STATE,
        selectCollectionItem: (props) => {
          set((prev) => {
            prev.selectedItem = props
          })
        },
      }
    })
  )
)

export const useCollectionCoffeeStore = createSelectorHooks<State & Actions>(
  useStoreBase
)
