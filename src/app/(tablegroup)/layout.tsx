import { Box, Typography } from "@nwaycorp/global-designsystem";
import { ReactNode } from "react";

const TableGroupLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <Box>
      <Typography>TableGroup Layout</Typography>
      {children}
      {modal}
    </Box>
  );
};

export default TableGroupLayout;
