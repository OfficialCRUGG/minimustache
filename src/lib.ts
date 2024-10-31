type Data = { [key: string]: any };

function getNestedValue(data: Data, path: string) {
  let value = data;

  for (let i = 0, keyStart = 0; i <= path.length; i++) {
    if (path[i] === "." || i === path.length) {
      const key = path.slice(keyStart, i);
      value = value?.[key];
      if (value === undefined) return "";
      keyStart = i + 1;
    }
  }
  return value;
}

export default function render(template: string, data: Data): string {
  let result = "";
  let lastIndex = 0;
  const regex = /{{\s*([^}\s]+)\s*}}/g;

  let match;
  while ((match = regex.exec(template)) !== null) {
    const [placeholder, path] = match;
    const startIndex = match.index;

    result += template.slice(lastIndex, startIndex);
    lastIndex = startIndex + placeholder.length;

    result += getNestedValue(data, path);
  }

  result += template.slice(lastIndex);

  return result;
}
