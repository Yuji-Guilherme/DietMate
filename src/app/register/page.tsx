import { Footer } from '@/patterns/Footer';
import { Register as RegisterScreen } from '@/screens/Register';
import { verifyLoggedAndRedirect } from '@/utils/Cookies';

export default function Register() {
  verifyLoggedAndRedirect();

  return (
    <>
      <RegisterScreen />
      <Footer />
    </>
  );
}
