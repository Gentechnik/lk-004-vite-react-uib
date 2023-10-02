import { Member } from "../components/Interfaces";
import MyButtonComponent from "../components/MyButton";

const memberList: Member[] = [
  { firstName: "Johnny", lastName: "Walker" },
  { firstName: "Francis", lastName: "Kelly" },
  { firstName: "Daniel", lastName: "Hopkins" },
  { firstName: "Juan", lastName: "Tate" },
  { firstName: "Polly", lastName: "Hunt" },
  { firstName: "Marguerite", lastName: "Hines" },
  { firstName: "Lula", lastName: "Turner" },
];
const randomizer = (array: Member[]) => {
  return Math.floor(Math.random() * array.length);
};
const randomPick = (array: Member[], number: number) => {
  return array[number];
};

export const PageRandomizer = () => {
  const randomIndex = randomizer(memberList);
  const randomMember = randomPick(memberList, randomIndex);

  return (
    <>
      <h4>
        This is a test: {randomMember.firstName} {randomMember.lastName}
      </h4>
      <MyButtonComponent />
    </>
  );
};
