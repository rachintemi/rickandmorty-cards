import { Stack, Typography } from "@mui/material";
import logoText from "../../src/assets/images/logo-text.png";
import useLoadCharacters from "../hooks/useLoadCharacters";
import PaginationCommon from "../components/Commons/Pagination";
import CardsContainer from "../components/Profiles/CardsContainer";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { items, infos, loading } = useLoadCharacters(page);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <section className="banner">
        <img src={logoText} alt="Rick and morty logo" />
      </section>
      <Stack spacing={2} alignItems="center" className="pagination">
        <Typography>Page: {page}</Typography>
        <PaginationCommon
          count={infos?.pages as number}
          onChange={handleChange}
        />
      </Stack>
      <CardsContainer characters={items} loading={loading} />
    </>
  );
};
export default HomePage;
