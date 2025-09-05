export type Variant = { name: string; price: number; stock: number };
export type Product = {
  id: string; title: string; slug: string;
  category: "Baut" | "Part Custom" | "Recolor";
  images: string[]; colors?: string[];
  variants?: Variant[]; description: string; isActive: boolean;
};
