export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jfernandesdev.png',
      name: 'Jeferson Fernandes',
      role: 'Full Stack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz na Trilha de ReactJs do Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀'},
      { type: 'link', content: 'https://github.com/jfernandesdev/ignite-feed' },
    ],
    publishedAt: new Date('2022-07-25 09:21:00'),
  },
   {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e',
      name: 'Maria',
      role: 'Programadora | UI/UX Designer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW#5 by Rocketseat. O nome do projeto é Podcastr 🚀'},
      { type: 'link', content: 'https://github.com/jfernandesdev/podcastr' },
    ],
    publishedAt: new Date('2022-06-01 09:21:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://images.pexels.com/photos/1438275/pexels-photo-1438275.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
      name: 'Caio',
      role: 'Web Developer | Pro-Play',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz na Trilha de ReactJs do Ignite da Rocketseat. O nome do projeto é Ignews 🚀'},
      { type: 'link', content: 'https://github.com/jfernandesdev/ignews' },
    ],
    publishedAt: new Date('2022-05-03 09:21:00'),
  },
]