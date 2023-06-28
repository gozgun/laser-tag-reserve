import Head from "next/head";
import Container from "react-bootstrap/Container";
import AppMain from "@/components/AppMain";
import AppBody from "@/components/AppBody";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book a Slot | Photon</title>
        <meta name="description" content="Laser Tag Booking application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header />

        <h1>Welcome to Photon Strike Laser Tag, the ultimate laser tag experience!</h1>

        <AppBody />

        <hr className="col-1 my-5 mx-0" />

        <AppMain />
        <Footer />
      </Container>
    </>
  );
}
