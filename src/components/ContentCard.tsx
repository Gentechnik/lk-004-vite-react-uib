import musicCards from "../data/media/musicCards.json";

const ContentCard = () => {
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
};

export default ContentCard;
