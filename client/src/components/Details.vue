<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> {{ title }} </slot>
          </div>

          <div class="modal-body">
            <slot name="body"> {{ body }}</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              User: {{ userId }}
              <button class="modal-default-button" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Details",
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
<style scoped lang="scss"></style>
