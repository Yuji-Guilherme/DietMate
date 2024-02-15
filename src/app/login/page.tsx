import { Footer } from '@/patterns/Footer';
import { Login as LoginScreen } from '@/screens/Login';
import { verifyLoggedAndRedirect } from '@/utils/Cookies';

export default function Login() {
  verifyLoggedAndRedirect();

  return (
    <>
      <LoginScreen />
      <Footer />
    </>
  );
}
