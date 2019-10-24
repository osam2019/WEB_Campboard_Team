import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: {
      userType: "분대장",
      rank: "상병",
      name: "강민석",
      regiment: "작전지원중대",
      subRegiment: "1소대",
      room: "5생활관"
    },

    reportId: 1,
    squadMateId: 1,
    reports: [],
    squadMates: [],

    // 로그인 후 user 정보
    userName: "강민석",
    userLevel: "상병",
    userAuth: "분대장",

    pointData: [
      {
        id: 1,
        rank: "병장",
        name: "정영훈",
        award: 45,
        penalty: 5,
        monthlyAward: 10,
        monthlyPenalty: 1,
        usedAward: 240
      },
      {
        id: 2,
        rank: "상병",
        name: "홍길동",
        award: 30,
        penalty: 2,
        monthlyAward: 4,
        monthlyPenalty: 1,
        usedAward: 180
      },
      {
        id: 3,
        rank: "이병",
        name: "김이병",
        award: 4,
        penalty: 0,
        monthlyAward: 1,
        monthlyPenalty: 0,
        usedAward: 15
      },
      {
        id: 4,
        rank: "일병",
        name: "박일병",
        award: 10,
        penalty: 4,
        monthlyAward: 1,
        monthlyPenalty: 0,
        usedAward: 30
      }
    ],
    headers: [
      { text: "계급", value: "rank" },
      { text: "이름", value: "name" },
      { text: "상점", value: "award" },
      { text: "벌점", value: "penalty" },
      { text: "월간 상점", value: "monthlyAward" },
      { text: "월간 벌점", value: "monthlyPenalty" },
      { text: "사용 상점", value: "usedAward" }
    ],
    logTableData: {
      id: 1,
      logs: [
        {
          id: 1,
          giverRank: "대위",
          giverName: "김재명",
          date: "2019-10-21",
          point: "5",
          reason: "일과 시간 외 배수구 작업"
        },
        {
          id: 2,
          giverRank: "상사",
          giverName: "정민규",
          date: "2019-10-10",
          point: "2",
          reason: "소대 축구 대회 우승"
        },
        {
          id: 3,
          giverRank: "대위",
          giverName: "김재명",
          date: "2019-10-01",
          point: "1",
          reason: "국군의 날 행사 도우미"
        },
        {
          id: 4,
          giverRank: "상사",
          giverName: "박장서",
          date: "2019-09-24",
          point: "-2",
          reason: "아침점호 지각"
        }
      ]
    },
    logTableHeaders: [
      {
        text: "수여자 계급",
        value: "giverRank"
      },
      {
        text: "수여자 이름",
        value: "giverName"
      },
      {
        text: "수여 날짜",
        value: "date"
      },
      {
        text: "점수",
        value: "point"
      },
      {
        text: "사유",
        value: "reason"
      }
    ],
    // QuestionVuew, ClasBoard에 쓰일 내용들
    postList: {
      reportId: 4,
      reports: [
        {
          id: 1,
          contentToggle: false,
          commentID: 3,
          date: "2019-10-22",
          title: "체단실 체중계가 고장났습니다",
          name: "병장 강태엽",
          text: "체단실 체중계가 완전히 고장나서 새로사야할 것 같습니다.",
          like: "24",
          comments: [{ name: "중위 류두리", word: "확인", id: 1 }]
        },
        {
          id: 2,
          contentToggle: false,

          commentID: 3,
          date: "2019-10-23",
          title: "중대장님께 휴가 관련 질문드립니다",
          name: "상병 강민석",
          text: "OSAM 캠프 참여 실시",
          like: "22",
          comments: [
            { name: "일병 박경필", word: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", word: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        },
        {
          id: 3,
          contentToggle: false,

          commentID: 3,
          date: "2019-10-24",
          title: "교육파견은 어떻게 처리가 되는거죠?",
          name: "일병 김동준",
          text: "OSAM 캠프 참여 실시",
          like: "20",
          comments: [
            { name: "일병 박경필", word: "축하드려요~~ㅎㅎ", id: 1 },
            { name: "일병 김진석", word: "축하드려요~~ㅎㅎ", id: 2 }
          ]
        }
      ]
    }
  },
  getters: {
    joinSquadMatesAndReport(state) {
      return [...state.squadMates].map(squad => {
        Vue.set(
          squad,
          "reports",
          state.reports
            .filter(r => r.name === squad.name)
            .map(r => ({ date: r.date, rank: r.rank, text: r.text }))
        );
        return squad;
      });
    }
  },
  mutations: {
    addSquadMate(state, { name }) {
      state.squadMates.push({ id: state.squadMateId++, name });
    },
    removeSquadMate(state, { name }) {
      const reportOfMate = state.reports
        .map((r, i) => (r.name === name ? i : -1))
        .filter(idx => idx >= 0);
      reportOfMate.reverse().forEach(idx => state.reports.splice(idx, 1));
      state.squadMates.splice(
        state.squadMates.findIndex(s => s.name === name),
        1
      );
    },
    addReport(state, { date, rank, name, text }) {
      state.reports.push({
        id: state.reportId++,
        date,
        rank,
        name,
        text
      });
    },
    removeReport(state, { id }) {
      const squadMateName = state.reports.splice(
        state.reports.findIndex(r => r.id === id),
        1
      )[0].name;

      if (state.reports.filter(r => r.name === squadMateName).length === 0) {
        state.squadMates.splice(
          state.squadMates.findIndex(s => s.name === squadMateName),
          1
        );
      }
    }
  },
  actions: {}
});
