<template>
  <div class="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-size: 3px;
}
.fa-user {
    font-size: 3rem;
}
.user-description {
    padding-left: 15px;
}

</style>