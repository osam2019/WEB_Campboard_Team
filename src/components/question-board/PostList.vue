<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">번호</th>
          <th class="text-left">제목</th>
          <th class="text-left">글쓴이</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in reports" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <router-link :to="`/questionboard/${item.id}`">{{ item.title }}</router-link>
          </td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
// import PostItem from "./PostItem.vue";
// import PostQuestion from "./PostQuestion.vue";
// import PostNewItem from "./PostNewItem.vue";

export default {
  computed: {
    reports() {
      return this.$store.state.postList.reports;
    }
  }
};
</script>

<style scoped>
</style>