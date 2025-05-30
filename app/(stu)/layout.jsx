import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";

import { Theme } from "@radix-ui/themes";

export default function Layout({ children }) {
  return (
    <div>
      {/* <Theme> */}
        <Nav />
        {children}
      {/* </Theme> */}
    </div>
  );
}
