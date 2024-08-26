import CryptoJS from 'crypto-js';

const CRYPTO_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY || "";

const setEncryptStorage = (key: string, data: any) => {
  // 데이터를 문자열로 변환
  const stringData = JSON.stringify(data);
  // 데이터를 암호화
  const encryptedData = CryptoJS.AES.encrypt(stringData, CRYPTO_KEY).toString();
  // 암호화된 데이터를 localStorage에 저장
  localStorage.setItem(key, encryptedData);
};

const getEncryptStorage = (key: string) => {
  // localStorage에서 암호화된 데이터를 가져옴
  const encryptedData = localStorage.getItem(key);
  if (!encryptedData) {
    return null;
  }
  try {
    // 데이터를 복호화
    const bytes = CryptoJS.AES.decrypt(encryptedData, CRYPTO_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    // 복호화된 데이터를 객체로 변환
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error('Failed to decrypt data:', error);
    return null;
  }
};

const removeEncryptStorage = (key: string) => {
  // localStorage에서 해당 키의 데이터를 제거
  localStorage.removeItem(key);
};

export { setEncryptStorage, getEncryptStorage, removeEncryptStorage };
