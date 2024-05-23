export const getEnvVariables = () => {
  const { VITE_API_URL } = import.meta.env;

  if (!VITE_API_URL) {
    throw new Error('Missing environment variables');
  }

  return {
    VITE_API_URL,
  };

  

};
