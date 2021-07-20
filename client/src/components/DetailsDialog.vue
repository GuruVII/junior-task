<template>
  <div class="modal-wrapper" @click="$emit('close')">
    <div class="modal-container" v-on:click.stop>
      <div class="modal-header">
        {{ title }}
      </div>

      <div class="modal-body">
        <p>User: {{ userId }}</p>
        <p>{{ body }}</p>
      </div>

      <div class="modal-footer">
        <button class="modal-default-button" @click="$emit('close')">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsDialog",
  data: function () {
    return {
      data: {},
      count: 0,
    };
  },
  props: {
    title: String,
    body: String,
    userId: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin padding-mixin {
  padding: 0.5rem 0.75rem;
}
.modal-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(200, 200, 200, 0.9);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: top;
  width: 100%;
  height: 100%;
  .modal-container {
    margin-top: 20rem;
    height: 20%;
    width: 30%;
    background-color: white;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
    .modal-header {
      @include padding-mixin;
      border-radius: 4px;
      background-color: #0595b0;
      padding: 0.5rem 0.75rem;
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }
    .modal-body {
      @include padding-mixin;
    }
    .modal-footer {
      @include padding-mixin;
      button {
        @include padding-mixin;
        background-color: #0595b0;
        font-size: 0.8rem;
        font-weight: 700;
        border: none;
        color: white;
        cursor: pointer;
        &:hover {
          background-color: #50b4c7;
        }
      }
    }
  }
}
</style>
