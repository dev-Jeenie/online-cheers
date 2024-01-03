import { Box, Button, Link, Typography } from "@nwaycorp/global-designsystem";

const CheersCompletedModal = () => {
  return (
    <Box background="pink" width="200px" height="200px">
      <Typography variant="h1">친구에게 응원의 건배를 보냈어!</Typography>
      <Link href="/compose">
        <Button variant="solid" color="primary">
          <Typography variant="h6">나도 2024년 식탁 만들기</Typography>
        </Button>
      </Link>
      <Link href="/table/jeenie">
      <Button variant="outlined" color="secondary">
        <Typography variant="h6">닫기</Typography>
      </Button>
      </Link>
    </Box>
  );
};

export default CheersCompletedModal;
