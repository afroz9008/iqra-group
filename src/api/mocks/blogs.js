import { mock } from "./mock";

const data = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    title: "Tempor nisi dolor enim excepteur sint incididunt Lorem aliquip et excepteur in.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum.",
    title: "Proident ea labore voluptate eu id pariatur adipisicing aliqua tempor.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    title: "Sunt commodo eiusmod reprehenderit anim est eiusmod amet est officia adipisicing.",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    description:
      "Est ex velit velit eiusmod. Reprehenderit sunt ex nisi aute elit voluptate cupidatat exercitation ipsum. Qui ullamco proident dolor est officia aute ea nostrud proident aliquip cupidatat nisi. Magna deserunt do laboris proident ullamco id aliqua laboris veniam excepteur. Proident duis duis duis non elit quis.",
    title: "Ullamco laborum fugiat do pariatur proident eu deserunt quis.",
  },
];

mock.onGet("/bogs").reply(200, {
  data,
});
