import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

// gives back a type defined as an array of strings
type SplitString<T extends string> = S.Split<T, "/">;

// type TestUserPathSplit = ["", "users", ":id"]
type TestUserPathSplit = SplitString<UserPath>;

// [number] turns an array to an union
type SplitStringUnion<T extends string> = SplitString<T>[number];

// type TestUserPathSplitUnion = "" | "users" | ":id"
type TestUserPathSplitUnion = SplitStringUnion<UserPath>;

// now that we have an union we will map over it to create an object
type SplitStringObject<T extends string> = {
  [K in SplitStringUnion<T>]: string;
};

/* 
  type TestSplitStringObject = {
      "": string;
      users: string;
      ":id": string;
  }
*/
type TestSplitStringObject = SplitStringObject<UserPath>;

// problem is we get all the components of the path, we need to filter out everything that's not a param
// to do that we need to use infer to introduce another parameter
type ExtractPathParam<T extends string> = T extends `:${infer P}` ? P : never;

// type TestExtractPathParam = "test"
type TestExtractPathParam = ExtractPathParam<":test">;

type ExtractPathParams<TPath extends string> = {
  [K in SplitStringUnion<TPath> as K extends `:${infer P}` ? P : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
