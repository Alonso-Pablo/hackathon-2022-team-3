import axiosClient from './apiConfig';

export const getCategories = async () => {
  const categories = await axiosClient.get('/categories');

  return categories.data;
};
