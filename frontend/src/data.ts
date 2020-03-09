import finnImg from "static/media/finn-min.png";
import bmoImg from "static/media/bmo-min.png";
import princessImg from "static/media/princess-min.png";
import jakeImg from "static/media/jake-min.png";
import { Y50, N400A, G50, B50, P50 } from "colors";
import { ITask, Author, Id } from "types";

const jake: Author = {
  id: "1",
  name: "Backlog",
  avatarUrl: jakeImg,
  colors: {
    soft: Y50,
    hard: N400A
  }
};

const BMO: Author = {
  id: "2",
  name: "Todo",
  avatarUrl: bmoImg,
  colors: {
    soft: G50,
    hard: N400A
  }
};

const finn: Author = {
  id: "3",
  name: "In Progress",
  avatarUrl: finnImg,
  colors: {
    soft: B50,
    hard: N400A
  }
};

const princess: Author = {
  id: "4",
  name: "Done",
  avatarUrl: princessImg,
  colors: {
    soft: P50,
    hard: N400A
  }
};

export const authors: Author[] = [jake, BMO, finn, princess];

export const tasks: ITask[] = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: BMO
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: jake
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: jake
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: finn
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    author: finn
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    author: princess
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: princess
  },
  {
    id: "8",
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    author: finn
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    author: finn
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    author: princess
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    author: princess
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: princess
  }
];

// So we do not have any clashes with our hardcoded ones
let idCount: number = tasks.length + 1;

export const getTasks = (count: number): ITask[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: ITask = tasks[Math.floor(Math.random() * tasks.length)];

    const custom: ITask = {
      ...random,
      id: `G${idCount++}`
    };

    return custom;
  });

export const getAuthors = (count: number): Author[] =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random: Author = authors[Math.floor(Math.random() * authors.length)];

    const custom: Author = {
      ...random,
      id: `author-${idCount++}`
    };

    return custom;
  });

const getByAuthor = (author: Author, items: ITask[]): ITask[] =>
  items.filter((task: ITask) => task.author === author);

export const taskMap = authors.reduce(
  (previous, author: Author) => ({
    ...previous,
    [author.name]: getByAuthor(author, tasks)
  }),
  {}
);

const getByAuthorOnlyId = (author: Author, items: ITask[]): Id[] =>
  items.filter((task: ITask) => task.author === author).map(task => task.id);

export const taskMapOnlyId = authors.reduce(
  (previous, author: Author) => ({
    ...previous,
    [author.name]: getByAuthorOnlyId(author, tasks)
  }),
  {}
);