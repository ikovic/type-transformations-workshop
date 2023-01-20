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

// Event is already a type and since it's a discriminated union we can use the index access type
type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
