import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">
      <header>
        <h1>Application Header</h1>
      </header>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
