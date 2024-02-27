import { z } from "zod";

export const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
});
export type TImage = z.infer<typeof ImageSchema>;

export const AlbumSchema = z.object({
  bandName: z.string(),
  albumName: z.string(),
  description: z.string(),
  img: ImageSchema,
});
export type TAlbum = z.infer<typeof AlbumSchema>;

export const GameSchema = z.object({
  gameTitle: z.string(),
  description: z.string(),
  img: ImageSchema,
});
export type TGame = z.infer<typeof GameSchema>;

export const MangaSchema = z.object({
  mangaTitle: z.string(),
  description: z.string(),
  img: ImageSchema,
});
export type TManga = z.infer<typeof MangaSchema>;
