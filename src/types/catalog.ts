
export type Brand = "honda" | "yamaha";
export type HondaModel = "vario" | "beat" | "scoopy" | "pcx";
export type YamahaModel = "nmax" | "aerox" | "xmax";
export type Model = HondaModel | YamahaModel;

export type PartFamily =
  | "baut-cvt" | "baut-kaliper" | "disc-rotor" | "engine-cover"
  | "body-fairing" | "as-roda" | "banjo-bolt" | "reservoir-cap"
  | "valve-cap" | "nuts";

export type Compatibility = {
  brand: Brand;
  model: Model;
  generation?: "125-old" | "125-new" | "150" | "160";
  years?: [number, number];
};

export type Variant = {
  sku: string;
  thread: "M5" | "M6" | "M8" | string;
  length?: number;
  head?: "hex" | "torx" | "button" | "countersunk" | string;
  color?: "gold" | "bronze" | "purple" | "blue" | "rainbow" | string;
  grade?: "G5" | "G2" | string;
  price: number;
  stock: number;
};

export type CatalogProduct = {
  id: string;
  title: string;
  slug: string;
  partFamily: PartFamily;
  images: string[];
  description: string;
  variants: Variant[];
  compatibility: Compatibility[];
  isActive: boolean;
};
