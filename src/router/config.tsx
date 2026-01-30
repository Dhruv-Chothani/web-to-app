
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Features from "../pages/features/page";
import Pricing from "../pages/pricing/page";
import Terms from "../pages/terms/page";
import Privacy from "../pages/privacy/page";
import Refund from "../pages/refund/page";
import Disclaimer from "../pages/disclaimer/page";
import Cookies from "../pages/cookies/page";
import HelpCenter from "../pages/help/page";
import Contact from "../pages/contact/page";
import Status from "../pages/status/page";
import Community from "../pages/community/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/help",
    element: <HelpCenter />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/status",
    element: <Status />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/refund",
    element: <Refund />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
