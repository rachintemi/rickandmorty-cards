import { useQuery } from "@apollo/client";
import logoText from "../../src/assets/images/logo-text.png";
import { GET_CHARACTERS } from "../graphql/query/characters";
import CardsContainer from "../components/Profiles/CardsContainer";

const HomePage = () => {
  const { data } = useQuery(GET_CHARACTERS);
  return (
    <>
      <section className="banner">
        <img src={logoText} alt="Rick and morty logo" />
      </section>
      <CardsContainer characters={data?.characters} />
    </>
  );
};
export default HomePage;
