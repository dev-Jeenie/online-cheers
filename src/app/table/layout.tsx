import { Box, Typography } from "@nwaycorp/global-designsystem";

const TableLayout = ({ children }: { children: any }) => {
  return (
    <Box>
      <Typography>Table Layout</Typography>
      {children}
    </Box>
  );
};

export default TableLayout;
