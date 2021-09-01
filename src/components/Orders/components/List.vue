<template>
  <div>
    <div class="d-flex flex-row align-items-center py-2 px-4 list-title-bg">
      <i class="px-2 fas fa-grip-lines-vertical list-title-icon-color"></i>
      <span class="list-title-text">{{ title }}</span>
    </div>
    <template v-for="(item, index) in items">
      <ListItem class="p-4"
          :key="`list-item-${index}`"
                :item="item"/>
    </template>
  </div>
</template>

<script>
import ListItem from "@/components/Orders/components/ListItem";

export default {
  name: "List",
  components: {ListItem},
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.list-title-bg {
  background-color: #f5f5f5
}
.list-title-text {
  font-weight: bold;
}
.list-title-icon-color {
  color: #03a04b
}
</style>