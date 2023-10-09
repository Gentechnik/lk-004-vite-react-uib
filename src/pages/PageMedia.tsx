import MediaNavLinks from "../components/MediaNavLinks";
import PageTopButton from "../components/PageTopButton";
import ContentCard from "../components/ContentCard";
export const PageMedia = () => {
  return (
    <>
      <main className="media_page">
        <h2>
          This is an overview of media I enjoyed over the years and generally
          can recommend.
        </h2>
        <section className="media_page_music" id="media_music_link">
          <MediaNavLinks />
          <PageTopButton />
          <ContentCard category="music" />
        </section>
        <section className="media_page_games" id="media_games_link">
          <MediaNavLinks />
          <ContentCard category="games" />
        </section>
        <section className="media_page_manga" id="media_manga_link">
          <MediaNavLinks />
          <ContentCard category="manga" />
        </section>
      </main>
    </>
  );
};
