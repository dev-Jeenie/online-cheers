import { Box, Typography } from "@nwaycorp/global-designsystem";

const CheersLayout = ({ children }: { children: any }) => {
  return (
    <Box>
      <Typography>Cheers Layout</Typography>
      {children}
    </Box>
  );
};

export default CheersLayout;
