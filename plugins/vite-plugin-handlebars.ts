import handlebars from 'handlebars';

export const handlebarsPlugin = () => {
  return {
    name: 'vite-plugin-handlebars',
    transform(src: string, id: string) {
      if (id.endsWith('.hbs')) {
        const template = handlebars.compile(src);
        const result = template({});
        return {
          code: `export default ${JSON.stringify(result)};`,
          map: null,
        };
      }
      return null;
    },
  };
};
