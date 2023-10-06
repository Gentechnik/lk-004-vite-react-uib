import ContentCard from "../components/ContentCardMusic";
import MyButtonComponent from "../components/MyButton";

export const PageRandom = () => {
  return (
    <>
      <main className="randomizer_page">
        <MyButtonComponent />
        {/* <EditableMembers /> */}
        <ContentCard />
      </main>
    </>
  );
};
