import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from "@nwaycorp/global-designsystem";
import wine from "../../../public/wine.png";
import beer from "../../../public/beer.png";
import soju from "../../../public/soju.png";
import makgeolli from "../../../public/makgeolli.png";
import { StyledImage, StyledImage2 } from "./styles";
import { Fragment } from "react";

const Select = () => {
  return (
    <Fragment>
      <Box>
        <Typography variant="h1">친구와 건배할 술 고르기!</Typography>
        <Stack
          direction="row"
          // spacing="200"
        >
          <Button>
            <Stack alignItems="center">
              <StyledImage src={wine} alt="wine" />
              <Typography variant="h6">와인</Typography>
            </Stack>
          </Button>
          <Button>
            <Stack alignItems="center">
              <StyledImage src={beer} alt="beer" />
              <Typography variant="h6">맥주</Typography>
            </Stack>
          </Button>
          <Button>
            <Stack alignItems="center">
              <StyledImage src={soju} alt="soju" />
              <Typography variant="h6">소주</Typography>
            </Stack>
          </Button>
          <Button>
            <Stack alignItems="center">
              <StyledImage src={makgeolli} alt="makgeolli" />
              <Typography variant="h6">막걸리</Typography>
            </Stack>
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h1">술잔에 태그 달기 🔖</Typography>
        <TextField
          id="my_goal"
          type="text"
          placeHolder="목표 멋지다 힘내! 곧 보자구 건배 🍻"
        />
      </Box>
      <Link href="/table/jeenie">
        <Typography variant="subtitle1">친구에게 건배 보내기!</Typography>
      </Link>
    </Fragment>
  );
};

export default Select;
