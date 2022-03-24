export function iconify(input = "") {
  const replacers = [
    {
      in: /\+/g,
      out: "plus",
    },
    {
      in: /\./g,
      out: "-dot-",
    },
    {
      in: /&/g,
      out: "-and-",
    },
    {
      in: " ",
      out: "",
    },
    {
      in: "_",
      out: "",
    },
  ];
  let output = input.toLowerCase();
  replacers.forEach((replacer) => {
    output = output.replace(replacer.in, replacer.out);
  });
  return output;
}

const normalizeSrc = (src) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};
