import { Member } from "../components/Interfaces";
import MyButtonComponent from "../components/MyButton";
import memberList from "../data/memberList.json";
import { randomizer, randomPick } from "../components/Randomizer";

export const PageRandomizer = () => {
  const randomIndex = randomizer(memberList);
  const randomMember = randomPick(memberList, randomIndex);

  return (
    <>
      <main className="randomizer_page">
        <MyButtonComponent />
      </main>
    </>
  );
};
