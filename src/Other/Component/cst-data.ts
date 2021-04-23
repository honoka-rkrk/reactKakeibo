import { string } from 'yup';
import { number } from 'yup/lib/locale';

export interface Cols {
  name: string;
  width: number;
  style: string;
}

export interface ItemMeta {
  itemNo: number;
  itemName: string | null;
  intLen: number;
  decLen: number;
  min: number;
  max: number;
}

export type writeDetailMeta = {
  memo: string;
  outcome: number;
} & ItemMeta;


