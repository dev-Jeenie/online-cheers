import { LoginButton } from "@/app/_components/LoginButton";
import { StyledIcon } from "@/app/home/styles";
import { socialLogin } from "@/app/types";
import { Box, Container, Typography } from "@nwaycorp/global-designsystem";
import { Fragment } from "react";
import beer from "../../../public/beer.png";

const socialLoginMap: socialLogin[] = [
  {
    id: "kakao",
    icon: <StyledIcon src={beer} alt="kakao login icon" />,
    text: "카카오",
    redirect_url: "",
  },
  {
    id: "google",
    icon: <StyledIcon src={beer} alt="google login icon" />,
    text: "구글",
    redirect_url: "",
  },
];

const Home = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4">2024년 청룡의 해 🐉</Typography>
        <Typography variant="h1">올해 나의 목표를 공유하자!</Typography>
        <Typography variant="body1">갓생 가보자고 🚀</Typography>
      </Box>
      <Box>
        {socialLoginMap.map((v) => (
          <Fragment key={v.id}>
            <LoginButton
              id={v.id}
              key={v.id}
              icon={v.icon}
              text={v.text}
              redirect_url={v.redirect_url}
            />
            <div style={{ height: "8px" }} />
          </Fragment>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
