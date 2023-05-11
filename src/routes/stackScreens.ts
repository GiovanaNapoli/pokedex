import { Home, Details } from "../screens";

export type ScreensStacksTypes = {
  name: string;
  screen: () => JSX.Element
}

const stacks: ScreensStacksTypes[] = [
  {
    name: 'home',
    screen: Home
  },
  {
    name: 'details',
    screen: Details
  },
]

export { stacks };