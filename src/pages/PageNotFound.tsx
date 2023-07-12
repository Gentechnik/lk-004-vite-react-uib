import rickRoll from "../../public/images/never-gonna.gif";
export const PageNotFound = () => {
  return (
    <>
      <main className="page_not_found">
        <div className="rick_roll">
          <img src={rickRoll} alt="" />
        </div>
      </main>
    </>
  );
};
