import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import MainView from '../views/MainView.vue';
import SlDiary from '../views/SlDiary.vue'; 
import BarrackBoard from '../views/BarrackBoard.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //url #값 제거 하는 기능

    routes: [
        {
            path: '/',//redirect 바로 /news url로 access
            redirect: '/loginview',
        },
        {
            // path: url 주소
            path: '/loginview',
            name: 'loginview',
            // coomponent: url 주소로 갔을 때 표시될 컴포넌트
            // component: NewsView,
            component: LoginView,
        },
        {
            path: '/mainview',
            name: 'mainview',
            // component: AskView,
            component: MainView
        },
        {
            path: '/mainview/SL-diary',
            name: 'SL-diary',
            // component: AskView,
            component: SlDiary
        },
        {
            path: '/barrackboard',
            name: 'barrackboard',
            component: BarrackBoard,
        },
        // {
        //     path: '/jobs',
        //     name: 'jobs',
        //     // component: JobsView,
        //     component: createListView('JobSView'),
        // },
        // {
        //     path: '/user/:id',
        //     component: UserView,
        // },
        // {
        //     path: '/item/:id',
        //     component: ItemView,
        // },


    ]
});