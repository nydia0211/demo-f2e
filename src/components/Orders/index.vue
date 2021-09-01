<template>
  <div class="container">
    <div class="list-refresh-size d-flex ml-auto">
      <button v-if="loading" type="button" class="btn btn-link align-self-center">
        <div class="lds-dual-ring"></div>
      </button>
      <button v-else type="button" class="btn btn-link align-self-center" @click="refresh">
        <i class="fas fa-redo"></i>
      </button>
    </div>
    <List :items="inProcessList"
          :title="'進行中'"></List>
    <List :items="finishedList"
          :title="'已完成'"></List>
  </div>
</template>

<script>
import List from "@/components/Orders/components/List";
import utils from "@/components/Orders/utils";
import {mapState} from 'vuex'

export default {
  name: "Orders",
  components: {List},
  computed: {
    ...mapState({
      items: state => state.orders,
      loading: state => state.loading
    }),
    inProcessList() {
      return this.items.filter(item => utils.inProcess(item))
    },
    finishedList() {
      return this.items.filter(item => utils.finished(item))
    }
  },
  created() {
    this.$store.commit("updateOrders")
  },
  methods: {
    async refresh() {
      this.$store.commit("updateOrders")
    }
  }
}
</script>

<style scoped>
.list-refresh-size {
  width: 2rem;
  height: 2rem;
}

.btn-link {
  color: #3b3e3b;
}

/*https://loading.io/css/*/
.lds-dual-ring {
  display: inline-block;
  /*width: 80px;*/
  /*height: 80px;*/
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  /*width: 64px;*/
  /*height: 64px;*/
  /*margin: 8px;*/
  border-radius: 50%;
  border: 6px solid #6e6e6e;
  border-color: #6e6e6e transparent #6e6e6e transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>