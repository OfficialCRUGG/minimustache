# minimustache

Minimal templating engine, based on mustache's syntax, but with only the bare minimum features. Also a slight bit faster than mustache.

## Installation

```sh
npm install minimustache
yarn add minimustache
pnpm add minimustache
bun add minimustache
```

## Usage

```ts
import minimustache from "minimustache";

const template = "Hello, {{name}}!";

const result = minimustache(template, { name: "world" });

console.log(result); // Hello, world!
```

## Notes

minimustache does not sanitize the input. Thus, there's no triple-brace syntax or anything like that. If you need to escape HTML, you should do it yourself.

## Benchmark

On an M1 processor, minimustache is between 1.12x and 2.05x faster than mustache, depending on the template and data.

If you wish to run the benchmark yourself, you can do so by cloning the repository, installing all dev depencies (`bun i -D`) and running `bun bench`.

```plaintext
Benchmark: Simple keys
  library                 hz     min      max    mean     p75     p99    p995    p999     rme   samples
· minimustache  3,132,448.49  0.0002  10.1032  0.0003  0.0003  0.0005  0.0008  0.0043  ±0.52%  15662243   fastest
· mustache      1,530,331.37  0.0003  87.1671  0.0007  0.0005  0.0014  0.0015  0.0128  ±4.95%   7651657

Benchmark: Advanced keys
  library               hz     min      max    mean     p75     p99    p995    p999     rme  samples
· minimustache  104,161.12  0.0066  90.7859  0.0096  0.0073  0.0277  0.0407  0.1919  ±6.17%   520806   fastest
· mustache       92,799.78  0.0080  34.8304  0.0108  0.0091  0.0359  0.0502  0.1442  ±2.27%   463999

Summary
  minimustache - Simple keys
    2.05x faster than mustache

  minimustache - Advanced keys
    1.12x faster than mustache
```
