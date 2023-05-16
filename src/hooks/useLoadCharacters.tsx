import { useCallback, useEffect, useState } from "react";
import { Character, Info } from "../__generated__/graphql";
import { GET_CHARACTERS } from "../graphql/query/characters";
import { useQuery } from "@apollo/client";

const useLoadCharacters = (page: number) => {
  const [items, setItems] = useState([] as unknown as Character[]);
  const [infos, setInfos] = useState([] as Info);

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      page: page,
    },
  });

  const allCharacters = useCallback(() => {
    return data?.characters?.results;
  }, [data?.characters?.results]);

  const infoPage = useCallback(() => {
    return data?.characters?.info;
  }, [data?.characters?.info]);

  useEffect(() => {
    setItems(allCharacters());
  }, [allCharacters]);

  useEffect(() => {
    setInfos(infoPage());
  }, [infoPage]);

  return {
    items,
    infos,
    loading,
  };
};
export default useLoadCharacters;
