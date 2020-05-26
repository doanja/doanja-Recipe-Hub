import axios from 'axios';

export default {
  search: (
    queryText: string,
    from: number = 0,
    to: number = 2,
    app_id: string = 'ab1a7c56',
    app_key: string = '1eab44749250471f33b386e03aab1717'
  ) => {
    return axios.get(
      `https://api.edamam.com/search?q=${queryText}&from=${from}&to=${to}&app_id=${app_id}&app_key=${app_key}`
    );
  },
};
