import Footer from "./footer";
import HeaderTop from "./header";

const Layout = ({ children }: any) => {
  return (
    <div>
      <HeaderTop />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
