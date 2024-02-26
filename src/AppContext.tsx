import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { TAlbum, TManga, TGame } from "./interfaces.ts";

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
      const _games = response.data;
      setGames(_games);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backendUrl}/music`);
      const _albums = response.data;
      setAlbums(_albums);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${backendUrl}/manga`);
      const _manga = response.data;
      setManga(_manga);
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
