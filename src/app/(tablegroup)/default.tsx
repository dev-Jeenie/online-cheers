import { Box, Typography } from "@nwaycorp/global-designsystem";

const Default = () => {
  console.log("tableGroup의 페이지가 로드됨. Not Found 말고 이게 나와야함");
  return (
    <Box>
      <Typography variant="h1">나는 TableGroup의 페이지</Typography>
    </Box>
  );
};

export default Default;
