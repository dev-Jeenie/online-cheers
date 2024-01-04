import { Box, Typography } from "@nwaycorp/global-designsystem";
import { ReactNode } from "react";

const TableLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <Box>
      <Typography>Table Layout</Typography>
      {children}
      {modal}
    </Box>
  );
};

export default TableLayout;
