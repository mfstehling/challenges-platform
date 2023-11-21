import type { NextPage } from "next";
import { HomePageContainer } from "../styles/pages/homePage";
import { Header } from "components/Header";

const Home: NextPage = () => {
  return (
    <HomePageContainer>
      <Header />
    </HomePageContainer>
  );
};

export default Home;
