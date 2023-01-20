import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

type Fruits = typeof fruits;
// arrays are indexed by numbers
type AppleOrBanana = Fruits[0 | 1];
// again indexed access type - array index is a number, so if we use a number to index the array we get back the union of all the possible values
type Fruit = Fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
