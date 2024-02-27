import { z } from "zod";

const isObjectId = (value: string): boolean => /^[a-fA-F0-9]{24}$/.test(value);

export const ObjectIdSchema = z
  .string()
  .refine(isObjectId, { message: "Invalid ObjectId" })
  .optional();

export const ImageSchema = z.object({
  src: z
    .string()
    .refine((value) => value.endsWith(".png") || value.endsWith(".jpg"), {
      message: "Image src must end with '.png' or '.jpg'",
    }),
  alt: z.string(),
  title: z.string(),
});
export type TImage = z.infer<typeof ImageSchema>;

export const AlbumSchema = z.object({
  _id: ObjectIdSchema,
  bandName: z.string(),
  albumName: z.string(),
  description: z.string(),
  img: ImageSchema,
});
export type TAlbum = z.infer<typeof AlbumSchema>;

export const GameSchema = z.object({
  _id: ObjectIdSchema,
  gameTitle: z.string(),
  description: z.string(),
  img: ImageSchema,
});
export type TGame = z.infer<typeof GameSchema>;

export const MangaSchema = z.object({
  _id: ObjectIdSchema,
  mangaTitle: z.string(),
  description: z.string(),
  img: ImageSchema,
});
export type TManga = z.infer<typeof MangaSchema>;
