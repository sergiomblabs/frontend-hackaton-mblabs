import {
  Typography,
  Link
} from '@material-ui/core'

export default function Home() {

  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="secondary" href="https://valeti.com/">
        HACKATON MBLABS -
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}