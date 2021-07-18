import axios from "axios";
export default {
  methods: {
    getData: async function (page = 0, limit = 10, sort = 1) {
      console.log("PLEASE WORKY WORKY");
      const { data } = await axios.get(
        `http://${process.env.VUE_APP_BE_LOCATION}/list`,
        {
          params: {
            page,
            limit,
            sort,
          },
        }
      );
      console.log('data', data)
      return data;
    },
  },
};
