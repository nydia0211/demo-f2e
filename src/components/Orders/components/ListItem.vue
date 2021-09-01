<template>
  <div class="d-flex flex-row">
    <img class="item-logo-size p-2" :src="item.logo"/>
    <div class="d-inline-flex flex-column px-2 item-text">
      <div class="d-flex flex-wrap item-status-text">
        <span :class="{ 'item-status-in-process' : inProcess, 'item-status-finished' : finished }">{{
            item.status.type
          }}</span>
        <span v-if="inProcess">預計出貨：{{ item.date }}</span>
      </div>
      <div class="d-flex justify-content-start">
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="ml-auto align-self-center">
      <button type="button" class="btn btn-link">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>

  </div>
</template>

<script>
import utils from '@/components/Orders/utils'

export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      default: () => ({
        name: '',
        logo: '',
        status: {
          code: -1,
          type: ''
        },
        date: ''
      })
    }
  },
  computed: {
    inProcess() {
      return utils.inProcess(this.item)
    },
    finished() {
      return utils.finished(this.item)
    }
  },
  methods: {}
}
</script>

<style scoped>
.item-logo-size {
  width: 5rem;
  height: 5rem;
}

.item-text {
  row-gap: 0.5rem;
}

.item-status-text {
  font-weight: bold;
  row-gap: 1rem;
  column-gap: 2rem;
}

.item-status-in-process {
  color: #37b072;
}

.item-status-finished {
  color: #3b3e3b;
}

.btn-link {
  color: #3b3e3b;
}
</style>