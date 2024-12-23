import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { saveUser } from '../utils/saveUser';
import { useNavigate } from 'react-router-dom';
const GoogleLoginButton = () => {

  const nav = useNavigate();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      // Google JWT 디코딩
      const decoded = jwtDecode(credentialResponse.credential);
      // console.log('Decoded JWT:', decoded);
      const user = {
        id: decoded.sub, // Google 사용자 ID
        name: decoded.name,
        email: decoded.email,
        profile_image: decoded.picture,
        created_at: new Date().toISOString(),
      };

      // Supabase에 사용자 상태 확인
      const result = await saveUser(user.email);

      if (result.isNewUser) {
        console.log('New user registered.');
        // 회원가입 완료 후 리다이렉션 (예: 추가 정보 입력 페이지)
        nav('/signup');
      } else {
        console.log('Existing user logged in:', result.user);
        // 로그인 성공 후 리다이렉션 (예: 메인 대시보드)
        nav('/');
      }
    } catch (error) {
      console.error('Error during login processing:', error);
    }
  };

  const handleLoginError = () => {
    console.error('Google Login Failed!');
  };
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
