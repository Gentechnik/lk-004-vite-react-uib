import { Member } from "../components/Interfaces";

export const randomizer = (array: Member[]) => {
  return Math.floor(Math.random() * array.length);
};
export const randomPick = (array: Member[], number: number) => {
  return array[number];
};
