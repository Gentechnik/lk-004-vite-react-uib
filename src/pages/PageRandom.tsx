import MyButtonComponent from "../components/MyButton";
import PageTopButton from "../components/PageTopButton";

export const PageRandom = () => {
  return (
    <>
      <main className="randomizer_page">
        <MyButtonComponent />
        {/* <EditableMembers /> */}
        <PageTopButton />
      </main>
    </>
  );
};
