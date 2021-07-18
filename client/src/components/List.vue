<template>
  <div class="container">
    <table class="list">
      <tr>
        <th>Title</th>
        <th>User id</th>
      </tr>
      <tr v-for="item in data" :key="item.id" @click="openModal(item)">
        <td>
          {{ item.title }}
        </td>
        <td>
          {{ item.userId }}
        </td>
      </tr>
    </table>
    <Details
      v-if="showDetails"
      @close="showDetails = false"
      v-bind="selectedData"
    />
  </div>
</template>

<script>
import getData from "@/mixins/getData";
import Details from "@/components/List.vue";

export default {
  name: "List",
  data: function () {
    return {
      data: {},
      count: 0,
      showDetails: false,
      selectedData: {
        body: "",
        title: "",
        userId: "",
      },
    };
  },
  methods: {
    openModal: function ({ body, title, userId }) {
      console.log("THIS RAN");
      this.selectedData = {
        body,
        title,
        userId,
      };
      this.showDetails = true;
    },
  },
  mixins: [getData],
  components: { Details },
  async mounted() {
    const { data, count } = await this.getData();
    this.data = data;
    this.count = count;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
