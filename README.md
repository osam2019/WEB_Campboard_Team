# camp-board
※ CampBoard.pdf를 참고하시면 저희의 팀프로젝트를 더욱 쉽게 이해가능합니다!

##
- 팀명: CampBoard
- 팀원
 - 박경필: 국직부대 777사령부 790단 572부대 일병 박경필 
 - 주경진
 - 정영훈


## 개발 목표
CampBoard는 부대 생활을 하면서 필요한 정보와 부대 생활에 도움이 되는 편리한 서비스를 부대원들에게 제공하며 "효율적"이고 "단결된" 병영 문화를 건설하는 을 목표로 합니다.

CampBoard의 구체적인 목표는 다음과 같습니다.
1. 모든 부대원들이 자유롭고 활발하게 의사소통 하는 분위기 조성
2. 복잡하고 번거로웠던 부대 업무 간편화
3. 투명하게 관리되는 부대행정 업무
4. 부대 생활에 필요한 정보를 제공하는 부대 생활 도우미

## 프로젝트 기능 설명
로그인을 하면 세가지 UserType(분대장, 분대원, 간부) 중 자신이 해당되는 UserType 으로 접속이 됩니다.
UserType에 따라 CampBoard가 제공하는 서비스의 메뉴가 달라집니다.

UserType(분대장, 분대원, 간부) 별 서비스 메뉴는 다음과 같습니다. 

<공통 메뉴>
- 부대 QnA: 모든 부대원들이 볼 수 있는 부대 QnA 게시판
- 중대근무 일정: CCTV, 불침번 등 자신의 이번 달 중대 근무를 일정을 확인 가능, 간부의 경우 내역 수정 가능 
- 상벌점 현황: 모든 부대원들이 자신의 상벌점 현황을 확인 가능, 간부의 경우 내역 수정 가능
- 마음의 소리함: 익명성을 보장하며, 부대에서 겪는 문제점을 자유롭게 건의 가능

<분대장 메뉴>
- 분대장 수첩: 분대장 수첩 관리 기능, 각 분대원 별 Data 자동 분류
- 생활관 게시판: 분대원들과 자유롭게 의사소통하는 게시판
- 생활관 Talk: 같은 생활관 용사들과 소통하는 Talk 방


<분대원 메뉴>
- 개인 일지: 분대장 수첩에 자신의 내역을 확인 및 수정 업데이트 가능
- 생활관 Talk: 같은 생활관 용사들과 소통하는 Talk 방

<간부 메뉴>
- 부대일정 관리: 한 달, 한 주, 하루 별로 부대 일정을 추가 및 수정
- 식단표 관리: 한 달 부대 식단표 추가 및 수정
- 중대근무 관리: 구상은 하였으나 추가 개발할 메뉴입니다.

## 개선 방향
- 더 다양한 간부 메뉴 
 -부대 중대근무(CCTV, 불침번 등) 추가 및 수정 메뉴
- 서비스 추가
   - ex) 실시간 PX 판매 물품 확인 메뉴
   - ex) 분기별 인성검사 및 관계유형도 검사 메뉴
   - ex) 자기계발/체력단련 내역 데이터화
- 보안 이슈
   - ex) 부대 관련 정보 유출 문제

## 발전 가능성
- 부대원의 병영생활에 관한 기록들 데이터화
   - 효율적인 대원 상황 관리
   - 즉각적인 개인별 피드백 가능
   - 상급부대에서도 체계적으로 예하부대 상황 고나리
- 용사와 간부 간의 자유로운 소통의 착구 역할
   - 용사입장에서 겪는 문제점을 자유롭게 건의 가능
   - 익명성 보장을 통한 활발한 부대 문제점 건의
- 신병들에게 부대 생활 적응 도우미의 역할
   - 부대의 일정과 궁금증을 혼자서도 쉽게 해결

## Project setup
npm i (npm install)을 통해 필요한 module package를 설치합니다.
Module 설치과 완료가 되면 npm run serve를 실행시키면 로컬호스트로 저희의 프로젝트를 실행하실 수 있습니다.
```
1. npm install(npm i)
2. npm run serve
3. http://localhost:8080/ 에 접속하여 CampBoard 실행
```

## How To Use
※ CampBoard.mp4 를 참고해주세요

# Files

```
   +---components
   |   |   ToolBar.vue
   |   |
   |   +---class-board
   |   |       PostItem.vue
   |   |       PostList.vue
   |   |       PostNewItem.vue
   |   |
   |   +---heart-letter
   |   |       LetterNewItem.vue
   |   |       SendDialog.vue
   |   |
   |   +---layouts
   |   |       BasicLayout.vue
   |   |
   |   +---leader-note
   |   |       LeaderNote.vue
   |   |       LeaderNoteField.vue
   |   |       LeaderNoteItem.vue
   |   |       LeaderNoteList.vue
   |   |       SquadMateItem.vue
   |   |       SquadMateItemText.vue
   |   |       SquadMateList.vue
   |   |
   |   +---Login
   |   |       Regist.vue
   |   |       UserLogin.vue
   |   |
   |   +---mainShow
   |   |       AddFood.vue
   |   |       AddTodo.vue
   |   |       Calendar.vue
   |   |       FoodCalendar.vue
   |   |
   |   +---menus
   |   |       ExecutiveMenu.vue
   |   |       LeaderSoldierMenu.vue
   |   |       MenuList.vue
   |   |       SoldierMenu.vue
   |   |       UserProfile.vue
   |   |
   |   +---point-board
   |   |       PointTable.vue
   |   |
   |   +---question-board
   |   |       PostList.vue
   |   |       PostNewItem.vue
   |   |
   |   \---vacation
   |           VacationCalendar.vue
   |           VacationField.vue
   \---views
           ClassBoard.vue
           HeartLetter.vue
           LeaderNoteView.vue
           LoginView.vue
           MainView.vue
           PointView.vue
           QuestionBoard.vue
           QuestionView.vue
           VacationView.vue
```

## Component
설명 추가하기


# creadit

**OSAM 캠프**의 기회를 주신 운영진 께 정말 감사의 말씀을 드립니다. 저희 팀원들 모두 협업을 처음해보는데 군대에서 이런 기회를 얻을줄은 몰랐습니다! 또 온라인과 현장에서 강의를 열심히 해주신 **김춘경 강사**님께도 감사의 말씀을 드리겠습니다!

# version

### ver 1.0

## Copyright

**Power by Vue**
