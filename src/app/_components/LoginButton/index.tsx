"use client";

import { StyledStack } from "@/app/_components/LoginButton/styles";
import { socialLogin } from "@/app/types";
import { Button, THEME, Typography } from "@nwaycorp/global-designsystem";
import Link from "next/link";

export const LoginButton = ({ id, text, icon, redirect_url }: socialLogin) => {
  return (
    <Link href="/compose">
      <Button color="primary" block>
        <StyledStack direction="row" alignItems="center" spacing="200">
          {icon}
          <Typography variant="subtitle1" color={THEME.colors.gray[0]}>
            {text} 계정으로 계속하기
          </Typography>
        </StyledStack>
      </Button>
    </Link>
  );
};
