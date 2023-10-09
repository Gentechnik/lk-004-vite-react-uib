import WelcomePage from "../data/welcomePage.json";
export const WelcomePageCards = () => {
  return WelcomePage.map((m) => {
    return (
      <div className="welcome_page_item">
        <a href={m.link}>{m.linktext}</a>
        <p>{m.textBox}</p>

        <img src={m.img.src} alt={m.img.alt} title={m.img.title} />
      </div>
    );
  });
};
