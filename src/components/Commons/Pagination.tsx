import { Stack, Pagination, PaginationProps } from "@mui/material";
import { ChangeEvent } from "react";

export interface IPaginationCommon extends PaginationProps {
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const PaginationCommon = ({ count, onChange }: IPaginationCommon) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        onChange={onChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationCommon;
