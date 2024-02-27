import { ContentCardCategory } from "./Interfaces";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const ContentCard: React.FC<ContentCardCategory> = ({ category }) => {
  const { albums, games, manga } = useContext(AppContext);

  const contentCard = () => {
    switch (category) {
      case "music":
        return albums.map((m) => {
          return (
            <div className="content_card" key={m._id}>
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
        return games.map((m) => {
          return (
            <div className="content_card" key={m._id}>
              <img src={m.img.src} alt={m.img.alt} title={m.img.title} />
              <div className="content_card_text">
                <h4>{m.gameTitle}</h4>
                <p>{m.description}</p>
              </div>
            </div>
          );
        });
      case "manga":
        return manga.map((m) => {
          return (
            <div className="content_card" key={m._id}>
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
