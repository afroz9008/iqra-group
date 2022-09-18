import { mock } from "./mock";

const LegalServices = [
  {
    id: 1,
    header: "legal servoice & IT service",
    title: "Smart living style for smart people",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16KX3jfAIwFAqVoxpxZsL1a2kJjICHpkybEut8ZqGLQ&s",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
  {
    id: 2,
    header: "legal servoice & IT service 1",
    title: "Smart living style for smart people 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLzve4BLPWtKhD41cVERkF3rMIFTwJeuwQJ-3Vo9J&s",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
  {
    id: 3,
    header: "legal servoice & IT service 2",
    title: "Smart living style for smart people 2",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
  {
    id: 4,
    header: "legal servoice & IT service 3",
    title: "Smart living style for smart people 3",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
];
const ITServices = [
  {
    id: 1,
    header: "legal servoice & IT service",
    title: "Smart living style for smart people",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16KX3jfAIwFAqVoxpxZsL1a2kJjICHpkybEut8ZqGLQ&s",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
  {
    id: 2,
    header: "legal servoice & IT service 1",
    title: "Smart living style for smart people 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLzve4BLPWtKhD41cVERkF3rMIFTwJeuwQJ-3Vo9J&s",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
  {
    id: 3,
    header: "legal servoice & IT service 2",
    title: "Smart living style for smart people 2",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
  {
    id: 4,
    header: "legal servoice & IT service 3",
    title: "Smart living style for smart people 3",
    image:
      "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Occaecat eu incididunt velit reprehenderit laboris irure veniam officia voluptate ullamco veniam aliqua minim Lorem. Magna consequat est consectetur ad ullamco officia sit. Id labore nisi ut eu nulla nulla nisi dolor esse veniam aliquip voluptate. Do est cillum veniam exercitation officia ipsum ad amet.",
  },
].reverse();

mock.onGet("/home").reply(200, {
  data: {
    LegalServices,
    ITServices,
  },
});
