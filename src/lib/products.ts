export type Product = {
  sku: string;
  name: string;
  shortName: string;
  spec: string;
  price: number;
  category: string;
};

export const PRODUCTS: Product[] = [
  {
    sku: "GHST-NET-01",
    shortName: "Ghost Net Jacket",
    name: '"Ghost Net" Tactical Shell',
    spec: "Recycled marine net fabric with concealed Faraday-lined chest pocket. Engineered to drop your signal the moment you zip up.",
    price: 685,
    category: "Outerwear",
  },
  {
    sku: "FRG-CHN-02",
    shortName: "Faraday Cargo",
    name: '"Faraday" Recycled Chain Cargo',
    spec: "Heavyweight recycled denim woven with conductive chain-link mesh. Hidden hip pocket blocks all incoming pings seamlessly.",
    price: 540,
    category: "Bottoms",
  },
  {
    sku: "SLK-MYL-03",
    shortName: "DND Utility Bag",
    name: '"DND" Mycelium Utility Bag',
    spec: "Premium organic mushroom leather accented with hardware reclaimed from luxury e-waste. Instantly mimics network issues when devices are housed inside.",
    price: 420,
    category: "Accessories",
  },
  {
    sku: "WST-ALB-04",
    shortName: "Phone Died Cargo",
    name: '"Phone Died" Cargo System',
    spec: "High-grade tactical weave crafted from upcycled coastal fibers. Deep, technical concealed pockets. For moving through coordinates entirely undetected.",
    price: 595,
    category: "Bottoms",
  },
];

export function getProduct(sku: string) {
  return PRODUCTS.find((p) => p.sku === sku);
}
