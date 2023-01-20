import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type DataDefaults = typeof fakeDataDefaults;

// we used indexed access types to do this
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
export type StringType = DataDefaults["String"];
export type IntType = DataDefaults["Int"];
export type FloatType = DataDefaults["Float"];
export type BooleanType = DataDefaults["Boolean"];
export type IDType = DataDefaults["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
