import { work } from "./work";

it("should compute hash for height", () => {
  expect(work(1)).toStrictEqual(
    "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
  );
});
