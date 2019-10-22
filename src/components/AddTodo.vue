<template>
  <v-form
    ref="form"
    lazy-validation
  >
  <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model= "title"
            label= "일정내용"
            outlined
            shaped
          ></v-text-field>

    <v-date-picker v-model="start"></v-date-picker>
  
    <v-date-picker v-model="end"></v-date-picker>

        </v-col>
      </v-row>
    </v-container>
      <v-btn
        @click="overlayOfChild=false"
      >
        입력 완료
      </v-btn>
  </v-form>
</template>

<script>
  export default {
    props:['overlayOfChild'],  
    data(){
      return{
        start: new Date().toISOString().substr(0, 10),
        end: new Date().toISOString().substr(0, 10),
        title:'',
        user:{}
      }
    },
    created(){
      // this.user.value = this.overlayOfChild;
    },
    methods: {
      test() {
        
      }
    },
  }
  //overlay 통신, 데이터 통신 - start, emnd, title
</script>