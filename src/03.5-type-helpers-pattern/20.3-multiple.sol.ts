import { Equal, Expect } from "../helpers/type-utils";

// more exact but not future proof - limited to types used in the test
type CreateDataShape<
  D extends string | number | boolean,
  E extends TypeError | Error | SyntaxError
> = {
  data: D;
  error: E;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string;
        error: TypeError;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<number, Error>,
      {
        data: number;
        error: Error;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >
];
