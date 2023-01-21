import { Equal, Expect } from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

// An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead.
// type Obj = {[k: TemplateLiteralKey]: string}

// mapped object type should be used instead
type ObjectOfKeys = {
  [key in TemplateLiteralKey]: string;
};

// alternatively a Record type can be used

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
