import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */

// we first map the values of keys to records that contain both the key and value
type ToObject<T> = {
  [K in keyof T]: Record<K, T[K]>;
};

/* 
  type TestToObject = {
  id: Record<"id", string>;
  email: Record<"email", string>;
  username: Record<"username", string>;
} */
type TestToObject = ToObject<Attributes>;

// then we use an indexed access type to get an union of values back
type MutuallyExclusive<T> = ToObject<T>[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
