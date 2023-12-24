import {
  Box,
  Button,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";

const Home = () => {
  return (
    <Box>
      <Typography variant="h4">2024년 청룡의 해 🐉</Typography>
      <Typography variant="h1">올해 나의 목표를 공유하자!</Typography>
      <Typography variant="h4">갓생 가보자고 🚀</Typography>
      <Button>
        <Typography variant="subtitle1">카카오 계정으로 계속하기</Typography>
      </Button>
      <Button>
        <Typography variant="subtitle1">구글 계정으로 계속하기</Typography>
      </Button>
    </Box>
  );
};

export default Home;
