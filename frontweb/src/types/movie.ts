import { Review } from './review';

export type Movie = {
  id: number;
  title: string;
  subTitle: string;
  synopsis: string;
  year: number;
  reviews: Review[];
};
