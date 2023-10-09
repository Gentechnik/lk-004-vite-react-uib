import PageTopButton from "../components/PageTopButton";
import { WelcomePageCards } from "../components/WelcomePageCards";

export const PageWelcome = () => {
  return (
    <>
      <main className="welcome_page">
        <section className="welcome_page_heading">
          <h1>Hi and welcome, to my first shot at a React Page!</h1>
          <p>down below are some of the Projects I worked on up until now</p>
        </section>
        <section className="welcome_page_container">
          <WelcomePageCards />
        </section>
        <PageTopButton />
      </main>
    </>
  );
};
