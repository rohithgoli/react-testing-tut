import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

// To print whether the component is in light mode or dark mode

export const MuiMode = () => {
  const theme = useTheme()
  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}
