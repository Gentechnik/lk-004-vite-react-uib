import gameCards from "../data/media/gameCards.json";

const ContentCardGames = () => {
  return gameCards.map((m) => {
    return (
      <div className="content_card">
        <img src={m.img.src} alt={m.img.alt} title={m.img.title} />
        <div className="content_card_text">
          <h4>{m.gameTitle}</h4>
          <p>{m.description}</p>
        </div>
      </div>
    );
  });
};

export default ContentCardGames;
