import Header from "./Header";
import Footer from "./Footer";

export interface ILayout {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
