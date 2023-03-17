import { Value } from "ts-toolbelt/out/Misc/JSON/Value";
import { Equal, Expect } from "../helpers/type-utils";

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type ValuesAsStrings = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
};

type TransformedFruit = ValuesAsStrings[keyof ValuesAsStrings];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >
];
