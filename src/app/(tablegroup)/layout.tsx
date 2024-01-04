import { Box, Typography } from "@nwaycorp/global-designsystem";
import { ReactNode } from "react";

const TableLayout = ({
  children,
  modal,
  modal2,
}: {
  children: ReactNode;
  modal: ReactNode;
  modal2: ReactNode;
}) => {
  return (
    <Box>
      <Typography>Table Layout</Typography>
      {children}
      {modal}
      {modal2}
    </Box>
  );
};

export default TableLayout;
