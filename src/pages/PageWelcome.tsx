export const PageWelcome = () => {
  return (
    <>
      <main>
        <section className="welcome_page_heading">
          <h1>Hi and welcome, to my first shot at a React Page!</h1>
          <p>down below are some of the Projects I worked on up until now</p>
        </section>
        <section className="welcome_page_container">
          <div className="welcome_page_item">
            <p>Item 1</p>
            <img src="https://placehold.co/600x400" alt="Placeholder image" />
          </div>
          <div className="welcome_page_item">
            <p>Item 2</p>
            <img src="https://placehold.co/600x400" alt="Placeholder image" />
          </div>
          <div className="welcome_page_item">
            <p>Item 3</p>
            <img src="https://placehold.co/600x400" alt="Placeholder image" />
          </div>
        </section>
      </main>
    </>
  );
};
