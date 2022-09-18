import { mock } from "./mock";

const data = [
  {
    id: 1,
    icon: "",
    title: "Website UI",
    description:
      "Id anim nulla ullamco non. Culpa nostrud et ullamco dolore nostrud sint magna aute.",
  },
  {
    id: 2,
    icon: "",
    title: "Redesign",
    description:
      "Id anim nulla ullamco non. Culpa nostrud et ullamco dolore nostrud sint magna aute.",
  },
  {
    id: 3,
    icon: "",
    title: "Application UI",
    description:
      "Id anim nulla ullamco non. Culpa nostrud et ullamco dolore nostrud sint magna aute.",
  },
  {
    id: 4,
    icon: "",
    title: "Web Elements",
    description:
      "Id anim nulla ullamco non. Culpa nostrud et ullamco dolore nostrud sint magna aute.",
  },
  {
    id: 5,
    icon: "",
    title: "Mobile App UI",
    description:
      "Id anim nulla ullamco non. Culpa nostrud et ullamco dolore nostrud sint magna aute.",
  },
  {
    id: 6,
    icon: "",
    title: "Web App UI",
    description:
      "Id anim nulla ullamco non. Culpa nostrud et ullamco dolore nostrud sint magna aute.",
  },
];

mock.onGet("/services").reply(200, {
  data,
});
