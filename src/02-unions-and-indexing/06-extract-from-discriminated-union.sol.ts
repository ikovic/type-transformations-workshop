import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
// MouseEvent can be assigned since we required only the type property to be "click", we don't care about the other properties
type ClickEvent = Extract<Event, { type: "click" }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
