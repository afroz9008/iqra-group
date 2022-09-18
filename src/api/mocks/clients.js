import { mock } from "./mock";

const data = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    name: "John Jackson",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    name: "John Jackson",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    name: "John Jackson",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    name: "John Jackson",
  },
];

mock.onGet("/clients").reply(200, {
  data,
});
