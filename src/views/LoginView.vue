<template>
    <div>
        <user-login></user-login>
            여기에 id, pw 로그인 버튼 추가
        <v-btn color="primary">Primary</v-btn>
    </div>
    <!-- <button class="LoginButton">Login</button> -->
</template>

<script>
import UserLogin from '../components/UserLogin.vue';

export default {
    components: {
            'user-login':  UserLogin,
    },
}
</script>

<style>

</style>