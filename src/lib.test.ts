import { expect, test } from "vitest";
import minimustache from "./lib";

test("Basic replacements", () => {
  expect(minimustache("Hello, {{name}}! I'm {{lib}}.", { name: "world", lib: "minimustache" })).toBe(
    "Hello, world! I'm minimustache.",
  );
});

test("Non-string replacements", () => {
  expect(minimustache("{{num}} + {{num}} = {{sum}}", { num: 2, sum: 4 })).toBe("2 + 2 = 4");
  expect(minimustache("This state is {{bool}}", { bool: false })).toBe("This state is false");
  expect(minimustache("Array: {{arr}}", { arr: [1, 2, 3] })).toBe("Array: 1,2,3");
  expect(minimustache("Object: {{obj}}", { obj: { key: "value" } })).toBe("Object: [object Object]");
  expect(minimustache("Null: {{null}}", { null: null })).toBe("Null: null");
  expect(minimustache("Undefined: {{undefined}}", { undefined: undefined })).toBe("Undefined: ");
  expect(minimustache("Function: {{fn}}", { fn: () => {} })).toBe("Function: () => {\n  }");
  expect(minimustache("NaN: {{nan}}", { nan: NaN })).toBe("NaN: NaN");
  expect(minimustache("Infinity: {{inf}}", { inf: Infinity })).toBe("Infinity: Infinity");
});

test("Nested replacements", () => {
  expect(
    minimustache("{{a.b}} {{a.c.d}} {{a.c.e.f}}.", { a: { b: "This is", c: { d: "nested", e: { f: "deep" } } } }),
  ).toBe("This is nested deep.");
});

test("Missing values", () => {
  expect(minimustache("{{missing}}", {})).toBe("");
});

test("Invalid paths", () => {
  expect(minimustache("{{a.b.c}}", { a: { b: "test" } })).toBe("");
});

test("Spaces in paths", () => {
  expect(minimustache("{{ a.b }}", { a: { b: "test" } })).toBe("test");
});

test("Empty data", () => {
  expect(minimustache("Hello", {})).toBe("Hello");
});

test("Special characters in key", () => {
  expect(minimustache("{{a.b!c}}", { a: { "b!c": "test" } })).toBe("test");
});
