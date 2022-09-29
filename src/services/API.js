import axios from 'axios';

const API_KEY = '29657950-ade50d14623a4993a922f2144';
export const fetchImages = async (guery, page) => {
  const images = await axios.get(
    `https://pixabay.com/api/?q=${guery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return images.data;
};