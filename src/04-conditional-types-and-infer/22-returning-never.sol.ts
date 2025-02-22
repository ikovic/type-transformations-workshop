import { Equal, Expect } from "../helpers/type-utils";

// could have tested for a union between the valid inputs first and returned never early
type YouSayGoodbyeAndISayHello<T> = T extends "hello"
  ? "goodbye"
  : T extends "goodbye"
  ? "hello"
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>
];
