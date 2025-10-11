declare module '*.hbs' {
  const content: (data: unknown) => string;
  export default content;
}
