import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
