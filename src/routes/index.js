import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import ClassBoard from "../views/ClassBoard.vue";
import DevView from "../views/DevView.vue";
import QuestionBoard from "../views/QuestionBoard.vue";
import QuestionView from "../views/QuestionView.vue";
import HeartLetter from "../views/HeartLetter.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", //url #값 제거 하는 기능

  routes: [
    {
      path: "/", //redirect 바로 /news url로 access
      redirect: "/loginview"
    },
    {
      // path: url 주소
      path: "/loginview",
      name: "loginview",
      // coomponent: url 주소로 갔을 때 표시될 컴포넌트
      // component: NewsView,
      component: LoginView
    },
    {
      path: "/mainview",
      name: "mainview",
      // component: AskView,
      component: MainView
    },
    {
      path: "/devview",
      name: "devview",
      // component: AskView,
      component: DevView
    },
    {
      path: "/classboard",
      name: "classboard",
      component: ClassBoard
    },
    {
      path: "/questionboard",
      name: "questionboard",
      component: QuestionBoard
    },
    {
      path: "/questionboard/:id",
      component: QuestionView
    },
    {
      path: "/heartletter/",
      component: HeartLetter
    }
  ]
});
