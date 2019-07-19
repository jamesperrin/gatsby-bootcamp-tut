import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

/*
OLD FORMAT
const Layout = (props) => {
    return (
        <div>
            <Header />
                {props.children}
            <Footer/>
        </div>
    )
}
*/

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
);

// export default Layout;
export default Layout;
