import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsObjects = {
  [K in keyof Values]: [K, Values[K]];
};

type ValuesAsUnionOfTuples = ValuesAsObjects[keyof ValuesAsObjects];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
