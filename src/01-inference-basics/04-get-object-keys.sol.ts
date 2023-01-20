import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

// typeof will return a reference to the typo of a variable or an object property
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
type FrameworkSpecs = typeof testingFrameworks;

// keyof returns a union of the given object types's keys
// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator
type TestingFramework = keyof FrameworkSpecs;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
