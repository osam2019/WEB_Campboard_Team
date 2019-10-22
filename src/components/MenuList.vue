<template>
<div>
  <section>
    <user-profile></user-profile>
  </section>
  <section>
    <template v-if="type === '분대장'">
      <ul class="menuList">
          <li v-for="item in listItems_SL" :key="item.title">
            <div>
              <p class="menuTitle">
                {{ item.title }}
              </p>
            </div>
          </li>
        </ul>
    </template>
    <template v-else-if="type === '분대원'">
      <ul class="menuList">
          <li v-for="item in listItems_SM" :key="item.title">
            <div>
              <router-link class="menuTitle" v-bind:to="`/${item.url}`">
              {{ item.title }} 
              </router-link>
            </div>
          </li>
        </ul>
    </template>
    <template v-else-if="type === '간부'">
      <ul class="menuList">
          <li v-for="item in listItems_CM" :key="item.title">
            <div>
              <p class="menuTitle">
                {{ item.title }}
              </p>
            </div>
          </li>
        </ul>
    </template>
    <template v-else>
        외부사람
    </template>  
    </section>
</div>
</template>

<script>
import UserProfile from './UserProfile.vue';

export default {
  components: {
      UserProfile,
  },
  data() {
    return {
     type: '분대장',
     listItems_SL: [
        {
          title: "분대장 수첩",
          url: "SL-diary"
        },
       {title: "생활관 게시판"},
       {title: "생활관 Talk"},
       {title: "부대 QnA"},
       {title: "중대근무 일정"},
       {title: "상벌점 현황"},
       {title: "마음의 소리함"},
     ],
      listItems_SM: [
       {title: "개인 일지"},
       {title: "생활관 게시판"},
       {title: "생활관 Talk"},
       {title: "부대 QnA"},
       {title: "중대근무 일정"},
       {title: "상벌점 현황"},
       {title: "마음의 소리함"},
     ],
      listItems_CM: [
       {title: "부대일정 관리"},
       {title: "식단표 관리"},
       {title: "부대 QnA"},
       {title: "중대근무 관리"},
       {title: "상벌점 관리"},
       {title: "마음의 소리함"},
     ],
    };
  },
}
</script>

<style>
.menuList {
  margin: 0;
  padding: 0;
}


.menuTitle {
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0;
  border: 1px solid #eee;
}
.link-text {
  color: #828282;
}
</style>