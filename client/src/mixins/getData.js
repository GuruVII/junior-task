import axios from "axios";
export default {
  methods: {
    getData: async function (page = 0, limit = 10, sort = 1) {
      try {
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
        return data;
      } catch (error) {
        alert("Error getting data from server " + error);
      }
    },
  },
};
