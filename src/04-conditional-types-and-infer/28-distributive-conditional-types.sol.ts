import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// generics need to be used since they distribute the union, meaning that they compare it on the member basis
// if we just used extends without a generic it would compare union to union and they are not the same since orange is there too
type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
