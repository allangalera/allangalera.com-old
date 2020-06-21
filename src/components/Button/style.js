export const btn = theme => ({
  width: '100%',
  background: theme.colors.white,
  padding: `${theme.spacing['3']} ${theme.spacing['8']}`,
  fontSize: theme.font.size['base'],
  fontWeight: theme.font.weight.light,
  color: theme.colors.gray['800'],
  borderRadius: theme.border.radius,
  textDecoration: 'none',
  transition: `all 180ms ease-in-out`,
  '&:hover': {
    background: theme.colors.purple['900'],
    color: theme.colors.white,
  },
  [`@media screen and (min-width: ${theme.screens.lg})`]: {
    fontSize: theme.font.size['2xl'],
    padding: `${theme.spacing['4']} ${theme.spacing['16']}`,
  },
});
