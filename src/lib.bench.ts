import { bench, describe } from "vitest";
import minimustache from "../dist/lib.js";
import Mustache from "mustache";

describe("Simple keys", () => {
  const string = "Hello, {{name}}! I'm {{lib}}.";
  const data = { name: "world", lib: "minimustache" };
  bench(
    "minimustache",
    () => {
      minimustache(string, data);
    },
    { time: 5000 },
  );

  bench(
    "mustache",
    () => {
      Mustache.render(string, data);
    },
    { time: 5000 },
  );
});

describe("Advanced keys", () => {
  const string =
    "{{a}} {{b}} {{c}} {{double.nested.a}} {{double.nested.b}} {{double.nested.c}} {{double.nested.d}} {{double.nested.e}} {{double.nested.f}} {{double.nested.g}} {{double.nested.h}} {{double.nested.i}} {{double.nested.j}} {{double.nested.k}} {{double.nested.l}} {{double.nested.m}} {{double.nested.n}} {{double.nested.o}} {{double.nested.p}} {{double.nested.q}} {{double.nested.r}} {{double.nested.s}} {{double.nested.t}} {{double.nested.u}} {{double.nested.v}} {{double.nested.w}} {{double.nested.x}} {{double.nested.y}} {{double.nested.z}}.";
  const data = {
    a: "A",
    b: "B",
    c: "C",
    double: {
      nested: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E",
        f: "F",
        g: "G",
        h: "H",
        i: "I",
        j: "J",
        k: "K",
        l: "L",
        m: "M",
        n: "N",
        o: "O",
        p: "P",
        q: "Q",
        r: "R",
        s: "S",
        t: "T",
        u: "U",
        v: "V",
        w: "W",
        x: "X",
        y: "Y",
        z: "Z",
      },
    },
  };

  bench(
    "minimustache",
    () => {
      minimustache(string, data);
    },
    {
      time: 5000,
    },
  );

  bench(
    "mustache",
    () => {
      Mustache.render(string, data);
    },
    {
      time: 5000,
    },
  );
});
