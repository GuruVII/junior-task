<template>
  <div class="item">
    <div>
      User: {{userId}}
    </div>
    <div>
      Title {{title}}
    </div>
    <div>
      {{body}}
    </div>
  </div>
</template>

<script>
import getData from "@/mixins/getData";
export default {
  name: "List",
  data: function () {
    return {
      data: {},
      count: 0,
    };
  },
  mixins: [getData],
  async mounted() {
    const {data, count} = await this.getData()
    console.log(data)

    this.data = data;
    this.count = count;
    console.log(this.data)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
