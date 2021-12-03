export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
    {
      key: 'back',
      url: 'img/tt.jpg',
    },
    {
      key: 'front',
      url: 'img/smilies.jpg',
    },
    {
      key: 'desyrel',
      url: 'fonts/desyrel.xml',
    },
  ],
};
