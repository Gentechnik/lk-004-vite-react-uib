export type TImage = {
  src: string;
  alt: string;
  title: string;
};

export type TAlbum = {
  bandName: string;
  albumName: string;
  description: string;
  img: TImage;
};

export type TGame = {
  gameTitle: string;
  description: string;
  img: TImage;
};

export type TManga = {
  mangaTitle: string;
  description: string;
  img: TImage;
};
