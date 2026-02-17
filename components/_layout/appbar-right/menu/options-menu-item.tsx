"use client";
import { Stack, Switch } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDarkTheme } from "@/hooks/useDarkTheme";
import { OptionsMenuItem as MenuItem } from "@/types";
import { styled, Theme } from "@mui/material/styles";
import ClientOnly from "@/components/util/client-only";

type Props = {
  menuItem: MenuItem;
};

const Wrapper = styled(Stack)(({ theme }: { theme: Theme }) => ({
  height: 100,
  borderRadius: theme.shape.borderRadius * 4,
  backgroundColor: theme.palette.background.transparentContrast,
  padding: theme.spacing(2),
  transition: "0.5s ease",
  justifyContent: "space-between",
}));

const OptionsMenuItem = ({
  menuItem: { icon, iconColor, switchToggleFn, switchIsOn, label },
}: Props) => {
  const [isDark] = useDarkTheme();
  const Icon = icon;

  return (
    <ClientOnly>
      <Wrapper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Icon
            style={{
              ...(iconColor && {
                color: isDark ? iconColor.dark : iconColor.light,
              }),
            }}
          />
          <Switch
            checked={switchIsOn}
            onChange={(e) => {
              e.stopPropagation();
              switchToggleFn();
            }}
            onClick={(e) => e.stopPropagation()}
            size="small"
            color="default"
          />
        </Stack>
        <Stack>
          <Typography fontSize={14} fontWeight={"bold"}>
            {label}
          </Typography>
        </Stack>
      </Wrapper>
    </ClientOnly>
  );
};

export default OptionsMenuItem;
