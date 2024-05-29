import { z } from "zod";

export const AddressEarthFormSchema = z.object({
  cep: z.number().min(9).max(9),
  logradouro: z.string().min(10),
  numero: z.number().min(1),
  bairro: z.string().min(10),
  estado: z.string().min(10),
  cidade: z.string().min(10),
  pais: z.string().min(10),
});

export type AddressEarthSchemaType = z.infer<typeof AddressEarthFormSchema>;

export const AddressMarsFormSchema = z.object({
  localName: z.string().min(6),
  lote: z.number().min(4).max(4),
});

export type AddressMarsSchemaType = z.infer<typeof AddressMarsFormSchema>;
