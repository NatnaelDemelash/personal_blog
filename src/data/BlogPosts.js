export const blogPosts = [
  {
    id: 'pagefind-static-search-for-astro-sites',
    title: 'Pagefind: Static Search for Astro Sites',
    desc: 'Pagefind is a new static site search tool built in Rust and ideal for Astro sites. Pagefind is a new fully static search library by the amazing team over at built in Rust (what isn’t these days! splits the search index into chunks loads only required chunks per search',
    categories: ['Tech'],
    img: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg',
    author: 'Robert Lawren',
  },
  {
    id: 'why-time-tracking-is-the-secret-to-productivity',
    title: 'Why Time Tracking Is The Secret To Productivity',
    desc: 'Until you know how long each task will take you, you can’t be predictably productive.',
    categories: ['Productivity'],
  },
  {
    id: 'default-export-named-export',
    title: 'Difference Between Default and Named Exports in JavaScript',
    categories: ['Coding', 'JavaScript'],
    desc: 'In JavaScript, a default export is a way to share a single value, function, or class as the main thing from a file with other parts of your code.',
    moreDescription: [
      'When you have a file that needs to be used in other parts of your application, you can mark one item in that file as the default export using the export default syntax.',
      "This means that when you import from that file in another part of your code, you don't need to use curly braces {} around the import statement. Instead, you can give it any name you want during the import, making it more convenient to use.",
    ],
    codeSnippet: {
      snippet1: {
        language: 'javascript',
        code: `
          const add = (a, b) => a + b;
          export default add;
        `,
      },
      snippet2: {
        language: 'javascript',
        code: `
          import myAddFunction from './math.js';
          const result = myAddFunction(5, 10);
        `,
      },
    },
  },
];
