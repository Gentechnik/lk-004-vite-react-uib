import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  TAlbum,
  TManga,
  TGame,
  GameSchema,
  AlbumSchema,
  MangaSchema,
} from "./interfaces.ts";

interface IAppContext {
  games: TGame[];
  albums: TAlbum[];
  manga: TManga[];
}

interface IAppProvider {
  children: React.ReactNode;
}
export const backendUrl = import.meta.env.VITE_API_URL;
export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [games, setGames] = useState<TGame[]>([]);
  const [albums, setAlbums] = useState<TAlbum[]>([]);
  const [manga, setManga] = useState<TManga[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backendUrl}/games`);
      const _games = [];
      for (const _game of response.data) {
        const parseResult = GameSchema.safeParse(_game);
        if (parseResult.success) {
          _games.push(parseResult.data);
        } else {
          console.log(`LOG ENTRY: bad game object (${JSON.stringify(_game)})`);
        }
      }
      setGames(_games);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backendUrl}/music`);
      const _albums = [];
      for (const _album of response.data) {
        const parseResult = AlbumSchema.safeParse(_album);
        if (parseResult.success) {
          _albums.push(parseResult.data);
        } else {
          console.log(
            `LOG ENTRY: bad album object (${JSON.stringify(_album)})`
          );
        }
      }
      setAlbums(_albums);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backendUrl}/manga`);
      const _mangas = [];
      for (const _manga of response.data) {
        const parseResult = MangaSchema.safeParse(_manga);
        if (parseResult.success) {
          _mangas.push(parseResult.data);
        } else {
          console.log(
            `LOG ENTRY: bad manga object (${JSON.stringify(_manga)})`
          );
        }
      }
      setManga(_mangas);
    })();
  }, []);

  // console.log(games);
  // console.log(albums);
  // console.log(manga);

  return (
    <AppContext.Provider value={{ games, albums, manga }}>
      {children}
    </AppContext.Provider>
  );
};
