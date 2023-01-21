import { Equal, Expect } from "../helpers/type-utils";

type Event = `log_in` | "log_out" | "sign_up";

// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype
type ObjectOfKeys = Record<Uppercase<Event>, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >
];
