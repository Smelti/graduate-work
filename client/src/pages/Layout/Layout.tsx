import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Support from "./Support/Support";

import "./Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="content">
          <Menu />
          <main>{children}</main>
        </div>
        <Support />
      </div>
    </>
  );
}
