import { Stack } from '@mui/system';
import Login from './Login';

export default function Template() {
  return (
    <Stack
      sx={{
        backgroundColor: 'primary.tertiary',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
      >
        <Login />
    </Stack>
    )
}
