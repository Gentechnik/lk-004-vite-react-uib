import { ContentCardCategory } from "./Interfaces";
import musicCards from "../data/media/musicCards.json";
import gameCards from "../data/media/gameCards.json";
import mangaCards from "../data/media/mangaCards.json";

const ContentCard: React.FC<ContentCardCategory> = ({ category }) => {
  const contentCard = () => {
    switch (category) {
      case "music":
        return musicCards.map((m) => {
          return (
            <div className="content_card">
              <img src={m.img.src} alt={m.img.alt} title={m.img.title} />
              <div className="content_card_text">
                <h4>
                  {m.bandName} - {m.albumName}
                </h4>
                <p>{m.description}</p>
              </div>
            </div>
          );
        });
      case "games":
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
      case "manga":
        return mangaCards.map((m) => {
          return (
            <div className="content_card">
              <img src={m.img.src} alt={m.img.alt} title={m.img.title} />
              <div className="content_card_text">
                <h4>{m.mangaTitle}</h4>
                <p>{m.description}</p>
              </div>
            </div>
          );
        });
      default:
        return null;
    }
  };
  return contentCard();
};

export default ContentCard;
