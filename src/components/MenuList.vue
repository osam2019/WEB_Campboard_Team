<template>
<div>
  <section>
    <user-profile></user-profile>
  </section>
  <section>
      <ul class="menuList">
        <li class="post">
        <!-- 포인트 영역 -->
        <div class="points">
            {{ "O" }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
            <!-- 타이틀 영역 -->
            <p class="menuTitle">
                {{ "분대장 수첩" }}
            </p>
          </div>
          </li>
      </ul>
    </section>
</div>
</template>

<script>
import UserProfile from './UserProfile.vue';

export default {
  components: {
      UserProfile,
  }
}
</script>

<style>
.menuList {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none; 
  display: flex;
  align-items: center;
  border: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.menuTitle {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>