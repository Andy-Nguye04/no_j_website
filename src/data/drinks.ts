export interface Drink {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  image: string;
  number: string;
  zine: string;
}

export const DRINKS: Drink[] = [
  {
    id: "jelly-fam",
    name: "Jelly Fam",
    subtitle: "Ube Creamtop Matcha Latte",
    price: "$4.50",
    description: "OOB",
    image: "/jelly-fam.png",
    number: "01",
    zine: "NO_J1"
  },
  {
    id: "linsanity",
    name: "Linsanity",
    subtitle: "Jasmine Milk Matcha",
    price: "$4.00",
    description: "The Harvard Hurricane",
    image: "/linsanity.png",
    number: "02",
    zine: "NO_J1"
  },
  {
    id: "green-giant",
    name: "Green Giant",
    subtitle: "Matcha Latte",
    price: "$3.50",
    description: "It's Green",
    image: "/green-giant.png",
    number: "03",
    zine: "NO_J1"
  },
  {
    id: "shaqilicious",
    name: "Shaqilicious",
    subtitle: "Hojicha Latte",
    price: "$3.50",
    description: "The Chocolate Ice",
    image: "/shaqilicious.png",
    number: "04",
    zine: "NO_J1"
  }
];
