import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alfavitRu: [
      { bukva: "А", sound: "01.3gpp" },
      { bukva: "Б", sound: "02.3gpp" },
      { bukva: "В", sound: "03.3gpp" },
      { bukva: "Г", sound: "04.3gpp" },
      { bukva: "Д", sound: "05.3gpp" },
      { bukva: "Е", sound: "06.3gpp" },
      { bukva: "Ё", sound: "07.3gpp" },
      { bukva: "Ж", sound: "08.3gpp" },
      { bukva: "З", sound: "09.3gpp" },
      { bukva: "И", sound: "10.3gpp" },
      { bukva: "Й", sound: "11.3gpp" },
      { bukva: "К", sound: "12.3gpp" },
      { bukva: "Л", sound: "13.3gpp" },
      { bukva: "М", sound: "14.3gpp" },
      { bukva: "Н", sound: "15.3gpp" },
      { bukva: "О", sound: "16.3gpp" },
      { bukva: "П", sound: "17.3gpp" },
      { bukva: "Р", sound: "18.3gpp" },
      { bukva: "С", sound: "19.3gpp" },
      { bukva: "Т", sound: "20.3gpp" },
      { bukva: "У", sound: "21.3gpp" },
      { bukva: "Ф", sound: "22.3gpp" },
      { bukva: "Х", sound: "23.3gpp" },
      { bukva: "Ц", sound: "24.3gpp" },
      { bukva: "Ч", sound: "25.3gpp" },
      { bukva: "Ш", sound: "26.3gpp" },
      { bukva: "Щ", sound: "27.3gpp" },
      { bukva: "Ъ", sound: "28.3gpp" },
      { bukva: "Ы", sound: "29.3gpp" },
      { bukva: "Ь", sound: "30.3gpp" },
      { bukva: "Э", sound: "31.3gpp" },
      { bukva: "Ю", sound: "32.3gpp" },
      { bukva: "Я", sound: "33.3gpp" },
    ],
  },
  mutations: {},
  actions: {},
  getters:{
    GET_ALFAVIT_RU:(state)=>{
      return state.alfavitRu
    }
  },
  modules: {},
});
