import PageTopButton from "../components/PageTopButton";

export const PageWelcome = () => {
  return (
    <>
      <main className="welcome_page">
        <section className="welcome_page_heading">
          <h1>Hi and welcome, to my first shot at a React Page!</h1>
          <p>down below are some of the Projects I worked on up until now</p>
        </section>
        <section className="welcome_page_container">
          <div className="welcome_page_item">
            <a href="https://gentechnik.github.io/cautious-umbrella/">
              My First HTML/CSS Site
            </a>
            <p>
              This Site was created by me towards the end of my
              Orientationcourse.
            </p>
            <img
              src="images/my-first-html-css-site.png"
              alt="Image of my first HMTL/CSS Site"
            />
          </div>
          <div className="welcome_page_item">
            <a href="#">New Project #1</a>
            <p>Coming Soon!</p>
            <img src="images/placeholder.png" alt="Placeholder image" />
          </div>
          <div className="welcome_page_item">
            <a href="#">New Project #2</a>
            <p>Coming Soon!</p>
            <img src="images/placeholder.png" alt="Placeholder image" />
          </div>
        </section>
        <PageTopButton />
      </main>
    </>
  );
};
