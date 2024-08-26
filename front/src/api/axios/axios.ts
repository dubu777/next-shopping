import axios from 'axios';
import { getEncryptStorage, removeEncryptStorage } from '@/utils/encryptStorage';
import { useRouter } from 'next/router';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  async (config) => {
    // 특정 경로에만 토큰을 붙이도록 설정
    const protectedPaths = ['/auth/me', '/auth/refresh', '/cart', '/purchase'];
    
    if (protectedPaths.some(path => config.url?.startsWith(path))) {
      const accessToken = await getEncryptStorage('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        // 토큰이 없으면 로그인 페이지로 리다이렉트
        const router = useRouter();
        router.push('/login');
        throw new axios.Cancel('로그인이 필요합니다.');
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;
    if (response?.status === 401) {
      // 401 Unauthorized 에러 시, 로그아웃 처리 및 리다이렉트
      removeEncryptStorage('accessToken');
      removeEncryptStorage('refreshToken');
      const router = useRouter();
      router.push('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
