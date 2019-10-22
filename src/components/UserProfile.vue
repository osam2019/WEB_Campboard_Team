<template>
  <div class="user-container">
    <v-list-item>
        <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
    </v-list-item>

    <div class="user-description">
        <!-- <div>
            계급, 호봉, 이름: {{ info.id }}
        </div> -->
        <div>
            {{ "상병(4) 강민석" }}
        </div>
        <div>     
            <!-- 소속: {{ info.created }} -->
            {{ "작전지원중대" }}
        </div>
        <div>     
            <!-- 소속: {{ info.created }} -->
            {{ "1소대 5생활관" }}
        </div>
        <div>     
            <!-- 소속: {{ info.created }} -->
            {{ "분대장" }}
        </div>
        <!-- <router-link :to="`/user/${userInfo.user}`">
            {{ userInfo.id }}
        </router-link> -->
    </div>
         <v-divider></v-divider>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container {
    font-size: 15px;
}
.v-list-item {
    display: inline-block;
}
.user-description {
    padding-left: 15px;
    display: inline-block;
}

</style>