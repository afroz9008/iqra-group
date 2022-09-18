import Dashboard from "../Pages/Dashboard";

const DummyComponent = (props) => {
    console.log(props)
  return `active route ${props?.location?.pathname?.replace("/", "")}`;
};

export default [
  {
    path: "/dashboard",
    title: "Home",
    varient: "NavLink",
    Component: Dashboard,
    hidden: false,
  },
  {
    path: "/about",
    title: "About",
    varient: "NavLink",
    Component: DummyComponent,
    hidden: false,
  },
  {
    path: "/service",
    title: "Service",
    varient: "NavLink",
    Component: DummyComponent,
    hidden: false,
  },
  {
    path: "/testimonial",
    title: "Testimonials",
    varient: "NavLink",
    Component: DummyComponent,
    hidden: false,
  },
  {
    path: "/pricing",
    title: "Pricing",
    varient: "NavLink",
    Component: DummyComponent,
    hidden: false,
  },
  {
    path: "/contact",
    title: "Contact",
    varient: "NavLink",
    Component: DummyComponent,
    hidden: false,
  },
];
