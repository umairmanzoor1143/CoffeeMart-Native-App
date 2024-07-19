// Assuming CoffeeData and BeansData have the correct values for roasted
import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { resetters } from '../';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import CoffeeData from '../../data/CoffeeData';
import BeansData from '../../data/BeansData';

interface ICoffee {
  id: string;
  name: string;
  description: string;
  roasted: 'Light Roasted' | 'Medium Roasted' | 'Dark Roasted';
  imagelink_square: any; // Replace `any` with the correct type for an image require.
  imagelink_portrait: any; // Replace `any` with the correct type.
  ingredients: string;
  special_ingredient?: string; // Marked as optional because it might not be present for all coffee objects.
  prices: Array<{ size: 'S' | 'M' | 'L'; price: string; currency: string }>;
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: 'Coffee';
  index: number;
}

interface IBeans {
  id: string;
  name: string;
  description: string;
  roasted: 'Light Roasted' | 'Medium Roasted' | 'Dark Roasted';
  imagelink_square: any; // Replace `any` with the correct type for an image require.
  imagelink_portrait: any; // Replace `any` with the correct type.
  ingredients: string;
  special_ingredient?: string; // Marked as optional because it might not be present for all coffee objects.
  prices: Array<{ size: 'S' | 'M' | 'L'; price: string; currency: string }>;
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: 'Bean';
  index: number;
}

type State = {
  coffeeList: Partial<ICoffee[]>;
  beansList: Partial<IBeans[]>;
  cartPrice: number;
  favoriteList: Partial<ICoffee[]>;
  oderHistoryList: Partial<ICoffee[]>;
};

type Actions = {};

const INITIAL_STATE: State = {
  coffeeList: CoffeeData as Partial<ICoffee[]>,
  beansList: BeansData as Partial<IBeans[]>,
  cartPrice: 0,
  favoriteList: [],
  oderHistoryList: [],
};

const useStoreBase = create<State & Actions>()(
  devtools(
    immer<State & Actions>((set, get) => {
      return {
        ...INITIAL_STATE,
      };
    }),
  ),
);

export const useCollectionCoffeeStore = createSelectorHooks<State & Actions>(useStoreBase);
