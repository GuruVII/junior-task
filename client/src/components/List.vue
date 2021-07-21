<template>
  <div class="container">
    <table class="list">
      <tr>
        <th>User id</th>
        <th>Title</th>
      </tr>
      <tr v-for="item in data" :key="item.id" @click="openModal(item)">
        <td>
          {{ item.userId }}
        </td>
        <td>
          {{ item.title }}
        </td>
      </tr>
    </table>
    <div class="pagination">
      <div>
        <label>Stran:</label>
        <select v-model="page" @change="getDataAndSetPagination()">
          <option v-for="page in pagesArray" v-bind:value="page" :key="page">
            {{ page + 1 }}
          </option>
        </select>
      </div>
      <div>
        <label>Limit:</label>
        <select v-model="pageLimit" @change="changePageLimit()">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>
      <div>
        {{ page * pageLimit + 1 }} - {{ page * pageLimit + Number(pageLimit) }} out of
        {{ count }}
      </div>
      <div>
        <button @click="changePage(false)" :disabled="page === 0">⇽</button>
        <button
          @click="changePage(true)"
          :disabled="page === this.pagesArray.slice(-1)[0]"
        >
          ⇾
        </button>
      </div>
      <div>
        <label>Sort:</label>
        <select v-model="sort" @change="changePageLimit()">
          <option value="1">ASC</option>
          <option value="-1">DESC</option>
        </select>
      </div>
    </div>
    <DetailsDialog
      v-if="showDetails"
      @close="showDetails = false"
      v-bind="selectedData"
    />
  </div>
</template>

<script>
import getData from "@/mixins/getData";
import DetailsDialog from "@/components/DetailsDialog.vue";

export default {
  name: "List",
  data: function () {
    return {
      data: {},
      count: 0,
      page: 0,
      pageLimit: 10,
      sort: 1,
      pagesArray: [],
      showDetails: false,
      selectedData: {
        body: "",
        title: "",
        userId: ""
      },
    };
  },
  methods: {
    openModal: function ({ body, title, userId }) {
      this.selectedData = {
        body,
        title,
        userId,
      };
      this.showDetails = true;
    },
    getDataAndSetPagination: async function () {
      const { data, count } = await this.getData(
        this.page,
        this.pageLimit,
        this.sort
      );
      this.data = data;
      this.count = count;
      const maxPages = Math.ceil(count / this.pageLimit);
      this.pagesArray = [];
      for (let i = 0; i < maxPages; i++) {
        this.pagesArray.push(i);
      }
    },
    changePageLimit: async function () {
      this.page = 0;
      await this.getDataAndSetPagination();
    },
    changePage: async function (forward) {
      console.log(this.pagesArray.slice(-1)[0]);
      if (forward && this.page < this.pagesArray.slice(-1)[0]) {
        this.page = this.page + 1;
      } else if (this.page > 0) {
        this.page = this.page - 1;
      }
      await this.getDataAndSetPagination();
    },
  },
  mixins: [getData],
  components: { DetailsDialog },
  async mounted() {
    await this.getDataAndSetPagination();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
}
table {
  width: 100%;
  border-spacing: 0;
  tr {
    th {
      font-size: 0.8rem;
      font-weight: 600;
      text-align: left;
      padding: 0.5rem 0.75rem;
      &:first-child {
        width: 4rem;
      }
    }
    td {
      height: 3rem;
      border-top: 1px rgba(0, 0, 0, 0.12) solid;
      padding: 0.5rem 0.75rem;
    }
    &:not(:first-child) {
      cursor: pointer;
      &:hover {
        background-color: rgba(80, 180, 199, 0.4);
      }
    }
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
  padding: 0.5rem 0.75rem;
  div {
    margin-right: 1rem;
    font-size: 0.8rem;
    label {
      margin-right: 0.5rem;
    }
    button {
      background-color: white;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #efefef;
        border-radius: 4px;
        font: 1rem;
      }
    }
  }
}
</style>
