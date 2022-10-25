import { Link, Typography } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Copyright = (props: any) => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://nhanderu.com/'>
        {process.env.NEXT_PUBLIC_APP_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
