import AdminNav from "../admin/components/AdminNav";

import { Theme } from "@radix-ui/themes";

export default function Layout({ children }) {
  return (
    <div>
      <Theme>
        <AdminNav />
        {children}
      </Theme>
    </div>
  );
}
