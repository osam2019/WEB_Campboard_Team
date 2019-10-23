<template>
  <v-data-table
    style="width: 70%"
    :headers="headers"
    :items="pointData"
    item-key="id"
    :single-expand="true"
    class="elevation-1"
    show-expand
    hide-default-footer
    @item-expanded="updateExpandedItemId"
    :custom-sort="customSort"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>상/벌점 현황</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers }">
      <td class="pa-3" :colspan="headers.length">
        <v-data-table
          class="elevation-2"
          hide-default-footer
          :headers="logTableHeaders"
          :items="logTableData"
          item-key="id"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>수령 현황</v-toolbar-title>
            </v-toolbar>
          </template>
        </v-data-table>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      expandedItemId: null
    };
  },
  computed: {
    pointData() {
      return this.$store.state.pointData;
    },
    headers() {
      return [
        ...this.$store.state.headers,
        { text: "", value: "data-table-expand" }
      ];
    },
    logTableHeaders() {
      const headers = [...this.$store.state.logTableHeaders];

      const reasonHeader = headers.find(h => h.text === "사유");
      reasonHeader.align = "left";
      reasonHeader.sortable = false;

      return headers;
    },
    logTableData() {
      const logTableData = this.$store.state.logTableData;
      if (this.expandedItemId === logTableData.id) {
        return logTableData.logs;
      } else {
        return [];
      }
    }
  },
  methods: {
    updateExpandedItemId({ item, value }) {
      if (!value) {
        this.expandedItemId = null;
      } else {
        this.expandedItemId = item.id;
      }
    },
    customSort(items, sortBy, sortDesc) {
      const rankOrder = {
        병장: 4,
        상병: 3,
        일병: 2,
        이병: 1
      };
      items.sort((a, b) => {
        for (let idx = 0; idx < sortBy.length; idx++) {
          const isDesc = sortDesc[idx] ? 1 : -1;
          const field = sortBy[idx];

          let compA, compB;
          switch (field) {
            case "rank":
              compA = rankOrder[a[field]];
              compB = rankOrder[b[field]];
              break;
            default:
              compA = a[field];
              compB = b[field];
              break;
          }
          if (compA !== compB) {
            return isDesc * (compA < compB ? 1 : -1);
          }
        }
        return 0;
      });
      return items;
    }
  }
};
</script>

<style>
</style>