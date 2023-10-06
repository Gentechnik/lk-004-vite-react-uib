import { BsFillArrowUpCircleFill } from "react-icons/bs";
import ContentCardMusic from "../components/ContentCardMusic";
export const PageMedia = () => {
  return (
    <>
      <main className="media_page">
        <h2>
          This is an overview of media I enjoyed over the years and generally
          can recommend.
        </h2>
        <section className="media_page_music" id="media_music_link">
          <div className="media_page_headings">
            <a href="#media_music_link">MUSIC</a>
            <a href="#media_games_link">GAMES</a>
            <a href="#media_manga_link">MANGA</a>
            <div>
              <a href="#">
                <BsFillArrowUpCircleFill />
              </a>
            </div>
          </div>
          {/* <div className="content_card">
            <img
              src="images/music/runners-high-pillows.jpg"
              alt="Cover of the Album 'Runners High' from the Pillows"
              title="Cover of the Album 'Runners High' from the Pillows"
            />
            <div className="content_card_text">
              <h4>the Pillows - Runners High</h4>
              <p>
                Runners High is an album released by the Pillows on January 22,
                1999. It was the last album to feature guest bassist, Tatsuya
                Kashima. Several songs from the record were later featured in
                the anime OVA series FLCL by Gainax.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/music/gorillaz-demon-days.png"
              alt="Cover of the Album 'Demon Days' from the Gorillaz"
              title="Cover of the Album 'Demon Days' from the Gorillaz"
            />
            <div className="content_card_text">
              <h4>Gorillaz - Demon Days</h4>
              <p>
                Demon Days is the second studio album by British virtual band
                Gorillaz. It was first released on 11 May 2005 in Japan and on
                23 May 2005 in the United Kingdom by Parlophone and in the
                United States by Virgin Records.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/music/joji-nectar.png"
              alt="Cover of the Album 'Nectar' from Joji"
              title="Cover of the Album 'Nectar' from Joji"
            />
            <div className="content_card_text">
              <h4>Joji - Nectar</h4>
              <p>
                Nectar is the second studio album by Japanese singer-songwriter
                Joji, released on 25 September 2020 via 88rising.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/music/nier-replicant-ost.jpg"
              alt="Cover of the Original Soundtrack of the Game 'Nier Replicant'"
              title="Cover of the Original Soundtrack of the Game 'Nier Replicant'"
            />
            <div className="content_card_text">
              <h4>NieR Gestalt & Replicant - Videogame OST</h4>
              <p>
                NieR Gestalt & Replicant Original Soundtrack Soundtrack album by
                Keigo Hoashi, Keiichi Okabe, and SQUARE ENIX MUSIC.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/music/oliver-tree-life-goes-on.jpg"
              alt="Cover of the Album 'Ugly is Beautiful' from Oliver Tree"
              title="Cover of the Album 'Ugly is Beautiful' from Oliver Tree"
            />
            <div className="content_card_text">
              <h4>Oliver Tree - Ugly Is Beautiful</h4>
              <p>
                Ugly Is Beautiful is the debut major-label studio album by
                American singer-songwriter Oliver Tree.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/music/made-in-abyss.png"
              alt="Cover of the Original Soundtrack of the Series 'Made in Abyss'"
              title="Cover of the Original Soundtrack of the Series 'Made in Abyss'"
            />
            <div className="content_card_text">
              <h4>Made in Abyss - Anime OST</h4>
              <p>
                A young girl finds and befriends a humanoid robot and descends
                with him into the titular Abyss in search of her mother.
              </p>
            </div>
          </div> */}
          {ContentCardMusic()}
        </section>
        <section className="media_page_games" id="media_games_link">
          <div className="media_page_headings">
            <a href="#media_music_link">MUSIC</a>
            <a href="#media_games_link">GAMES</a>
            <a href="#media_manga_link">MANGA</a>
          </div>
          <div className="content_card">
            <img
              src="images/games/bioshock.jpg"
              alt="Cover of the Game 'Bioshock"
              title="Cover of the Game 'Bioshock"
            />
            <div className="content_card_text">
              <h4>Bioshock</h4>
              <p>
                In 1960, a lone survivor of a plane crash named Jack discovers
                an abandoned underwater utopia, only to find out that the
                mystery behind its creation is much more sinister than he first
                believed.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/games/inscryption.jpg"
              alt="Cover of the Game 'Inscryption'"
              title="Cover of the Game 'Inscryption'"
            />
            <div className="content_card_text">
              <h4>Inscryption</h4>
              <p>
                Inscryption is an inky black card-based odyssey that blends the
                deckbuilding roguelike, escape-room style puzzles, and
                psychological horror into a blood-laced smoothie. Darker still
                are the secrets inscrybed upon the cards...
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/games/monster-hunter-rise.png"
              alt="Cover of the game 'Monsterhunter Rise"
              title="Cover of the game 'Monsterhunter Rise"
            />
            <div className="content_card_text">
              <h4>Monsterhunter Rise</h4>
              <p>
                As with previous Monster Hunter titles, Monster Hunter Rise has
                the player take the role of a Hunter, tasked with slaying or
                capturing large monsters using a variety of weapons, tools, and
                environmental features to damage and weaken them while surviving
                their attacks.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/games/nier-replicant.jpg"
              alt="Cover from the game 'NieR Replicant ver.1.22474487139...'"
              title="Cover from the game 'NieR Replicant ver.1.22474487139...'"
            />
            <div className="content_card_text">
              <h4>NieR Replicant ver.1.22474487139...</h4>
              <p>
                Set in the year 3465, the game follows Nier as he tries to save
                his sister Yonah from a fatal disease known as the Black Scrawl.
                Fighting alongside him are the magical book Grimoire Weiss, the
                possessed foul mouth Kainé and the cursed immortal child Emil
                who petrifies people.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/games/discroom.png"
              alt="Cover of the Game 'Discroom'"
              title="Cover of the Game 'Discroom'"
            />
            <div className="content_card_text">
              <h4>Discroom</h4>
              <p>
                Disc Room is a 2020 action puzzle video game in which the player
                navigates a series of labyrinthine rooms while avoiding bullet
                hell-style projectiles. Each room has its own patterns but is
                not predictable between rooms.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/games/battlebit-remastered.png"
              alt="Cover from the Game 'Battle Bit Remastered'"
              title="Cover from the Game 'Battle Bit Remastered'"
            />
            <div className="content_card_text">
              <h4>Battle Bit Remastered</h4>
              <p>
                BattleBit Remastered is a low-poly, massive multiplayer FPS,
                supporting 254 players per server. Battle on a near-fully
                destructible map with various vehicles!
              </p>
            </div>
          </div>
        </section>
        <section className="media_page_manga" id="media_manga_link">
          <div className="media_page_headings">
            <a href="#media_music_link">MUSIC</a>
            <a href="#media_games_link">GAMES</a>
            <a href="#media_manga_link">MANGA</a>
          </div>
          <div className="content_card">
            <img
              src="images/manga/a-silent-voice.jpg"
              alt="Cover of the Manga 'A Silent Voice' from Yoshitoki Ōima"
              title="Cover of the Manga 'A Silent Voice' from Yoshitoki Ōima"
            />
            <div className="content_card_text">
              <h4>A Silent Voice</h4>
              <p>
                A deaf elementary school girl, Shoko Nishimiya, upon
                transferring, meets a boy named Shoya Ishida in her new class.
                Shoya, who is not deaf, leads the class in bullying Shoko,
                because she is deaf. As the bullying continues, the class starts
                to bully Shoya for bullying Shoko.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/manga/blame-manga.jpg"
              alt="Cover of the Manga 'BLAME!' from  by Tsutomu Nihei"
              title="Cover of the Manga 'BLAME!' from  by Tsutomu Nihei"
            />
            <div className="content_card_text">
              <h4>Blame!</h4>
              <p>
                In the distant future, civilization has fully integrated with
                cybertechnology, resulting in automated cities. A virus causes
                these automated systems to malfunction, sending humanity to the
                brink of extinction as their own defenses turn on them.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/manga/one-punch-man.png"
              alt="first Manga Panel of the Webmanga 'One-Punch Man' from ONE"
              title="first Manga Panel of the Webmanga 'One-Punch Man' from ONE"
            />
            <div className="content_card_text">
              <h4>One-Punch Man</h4>
              <p>
                Saitama, the protagonist, is an exceptionally powerful hero who
                easily defeats the monsters or other villains with a single
                punch. However, due to his overwhelming strength, Saitama has
                become bored with his powers and is constantly trying to find
                stronger opponents who can fight him.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/manga/soul-eater.jpg"
              alt="Cover of the Manga 'Soul Eater' from Atsushi Ohkubo"
              title="Cover of the Manga 'Soul Eater' from Atsushi Ohkubo"
            />
            <div className="content_card_text">
              <h4>Soul Eater</h4>
              <p>
                Soul Eater is about a group of students who attend a school for
                aspiring demon hunters, Shibusen. The story follows Maka, an
                scythe weilder and her partner, Soul, who transforms into the
                scythe she uses. Each hunter is paired with a partner who can
                turn into a weapon, and the two must fight in unison.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/manga/sun-ken-rock.jpg"
              alt="Cover of the 'Manga Sun-Ken Rock' from Boichi"
              title="Cover of the 'Manga Sun-Ken Rock' from Boichi"
            />
            <div className="content_card_text">
              <h4>Sun-Ken Rock</h4>
              <p>
                The story revolves around Ken (the main protagonist), a man from
                an upper-class family that was orphaned young due to his
                family's involvement with the Yakuza; he became a highschool
                delinquent known for fighting. The only thing that motivates him
                to take action is through his romantic affections for a
                classmate, Yumi.
              </p>
            </div>
          </div>
          <div className="content_card">
            <img
              src="images/manga/tokyo-ghoul.jpg"
              alt="Cover of the Manga 'Tokyo Ghoul' from Sui Ishida"
              title="Cover of the Manga 'Tokyo Ghoul' from Sui Ishida"
            />
            <div className="content_card_text">
              <h4>Tokyo Ghoul</h4>
              <p>
                Tokyo Ghoul is the story of Ken Kaneki, a bibliophile college
                student who finds himself lucky enough to score a date with a
                hot girl. Unfortunately, that girl turns out to be a
                flesh-eating monster, and the date ends with her harvesting him
                for his meat.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
