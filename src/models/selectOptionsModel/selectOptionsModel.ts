import { Modality, Perk, Company, Seniority, Category } from '@/models/FilterBaseModels';
export interface SelectOptionsModel {
  category?: Category[];
  seniority?: Seniority[];
  company?: Company[];
  perks?: Perk[];
  modality?: Modality[];
}