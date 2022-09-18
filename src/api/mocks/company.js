import { mock } from "./mock";

const data = [
  {
    id: 1,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 2,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 3,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 4,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 5,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 6,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 7,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 8,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
  {
    id: 9,
    image:
      "https://us.123rf.com/450wm/djati11/djati111808/djati11180800105/105671036-star-logo-template-vector-icon-illustration-design.jpg?ver=6",
  },
];

mock.onGet("/company").reply(200, {
  data,
});
