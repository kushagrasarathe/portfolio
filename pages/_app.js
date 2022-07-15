import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";
import Navbar from "../src/components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar/> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Footer/> */}
    </>
  );
}

export default MyApp;
