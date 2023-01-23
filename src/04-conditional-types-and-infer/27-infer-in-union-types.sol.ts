import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// a union could be used in combination with infer to make this less verbose
type GetParserResult<T> = T extends () => string
  ? string
  : T extends { extract: () => boolean }
  ? boolean
  : T extends { parse: () => number }
  ? number
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
