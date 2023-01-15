import AmericanoPicture from './../assets/coffee/coffee-americano-espresso.svg'
import ArabicPicture from './../assets/coffee/coffee-arabic.svg'
import CapuccinoPicture from './../assets/coffee/coffee-capuccino.svg'
import CreamyEspressoPicture from './../assets/coffee/coffee-creamy-espresso.svg'
import CubanoPicture from './../assets/coffee/coffee-cubano.svg'
import HawaiianPicture from './../assets/coffee/coffee-hawaiian.svg'
import HotChocolatePicture from './../assets/coffee/coffee-hot-chocolate.svg'
import IcedEspressoPicture from './../assets/coffee/coffee-iced-espresso.svg'
import IrishPicture from './../assets/coffee/coffee-irish.svg'
import LattePicture from './../assets/coffee/coffee-latte.svg'
import MacchiatoPicture from './../assets/coffee/coffee-macchiato.svg'
import MocaccinoPicture from './../assets/coffee/coffee-mocaccino.svg'
import TraditionalEspressoPicture from './../assets/coffee/coffee-traditional-espresso.svg'
import WithMilkPicture from './../assets/coffee/coffee-with-milk.svg'

import { ProductsRepositoryData } from '../components/ProductCard'

export const PRODUCTS_REPOSITORY: ProductsRepositoryData = [
  {
    picture: TraditionalEspressoPicture,
    tags: ['Traditional'],
    title: 'Traditional Espresso',
    description: 'Traditional coffee made from boiling water and ground beans',
    price: 9.9,
  },
  {
    picture: AmericanoPicture,
    tags: ['Traditional'],
    title: 'Americano Espresso',
    description: 'Dilluted expresso, less intense than the traditional one',
    price: 8,
  },
  {
    picture: CreamyEspressoPicture,
    tags: ['Traditional'],
    title: 'Creamy Expresso',
    description: 'Traditional creamy coffee with creamy foam',
    price: 9.9,
  },
  {
    picture: IcedEspressoPicture,
    tags: ['Traditional', 'Iced'],
    title: 'Iced Espresso',
    description: 'Beverage prepared with espresso coffee and ice cubes',
    price: 9,
  },
  {
    picture: WithMilkPicture,
    tags: ['Traditional', 'With Milk'],
    title: 'Coffee with Milk',
    description: 'Equal parts of traditional espresso with steamed milk',
    price: 10.9,
  },
  {
    picture: LattePicture,
    tags: ['Traditional', 'With Milk'],
    title: 'Latte',
    description: 'A dose of espresso coffee with double parts milk and foam',
    price: 11.9,
  },
  {
    picture: CapuccinoPicture,
    tags: ['Traditional', 'With Milk'],
    title: 'Capuccino',
    description:
      'Beverage with cinammon with equal parts coffee, milk and foam',
    price: 11.9,
  },
  {
    picture: MacchiatoPicture,
    tags: ['Traditional', 'With Milk'],
    title: 'Macchiato',
    description: 'Espresso coffee mixed with hot milk and foam',
    price: 9.9,
  },
  {
    picture: MocaccinoPicture,
    tags: ['Traditional', 'With Milk'],
    title: 'Mocaccino',
    description: 'Espresso coffee with chocolate syrup, milk and foam',
    price: 9.9,
  },
  {
    picture: HotChocolatePicture,
    tags: ['Especial', 'With milk'],
    title: 'Hot chocolate',
    description:
      'Beverage made with chocolate dissolved in hot milk and coffee',
    price: 10,
  },
  {
    picture: CubanoPicture,
    tags: ['Especial', 'Alcoholic', 'iced'],
    title: 'Cubano',
    description: 'Iced espresso drink with rum, cream and mint',
    price: 12.9,
  },
  {
    picture: HawaiianPicture,
    tags: ['Especial'],
    title: 'Hawaiian',
    description: 'Sweet beverage prepared with coffee and coconut milk',
    price: 10.9,
  },
  {
    picture: ArabicPicture,
    tags: ['Especial'],
    title: 'Arabic',
    description: 'Beverage prepared with Arabic coffee beans and spices',
    price: 11.9,
  },
  {
    picture: IrishPicture,
    tags: ['Especial', 'Alcoholic'],
    title: 'Irish',
    description:
      'Beverage based on coffee, Irish whiskey, sugar and whipped cream',
    price: 12.9,
  },
]
