import { mock } from "./mock";

const data = [
  {
    id: 1,
    name: "Riad Jack",
    feedback:"Magna excepteur exercitation adipisicing magna eu ea adipisicing nisi officia non culpa.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    designation:"Product Manager",
    username:"riadjack"
  },
  {
    id: 2,
    name: "Riad Jack",
    feedback:"Magna excepteur exercitation adipisicing magna eu ea adipisicing nisi officia non culpa.Enim velit dolore Lorem dolore ipsum aliquip do culpa ipsum amet quis in id occaecat.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    designation:"Product Manager",
    username:"riadjack"
  },
  {
    id: 3,
    name: "Riad Jack",
    feedback:"Magna excepteur exercitation adipisicing magna.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oBLhEcxlroYb_j3Xbt6VXpT26JtznPvMjLQmQKXb89JKvUJtSRuF8luIubPLFGMeY1s&usqp=CAU",
    designation:"Product Manager",
    username:"riadjack"
  },
  
];

mock.onGet("/feedback").reply(200, {
  data,
});
