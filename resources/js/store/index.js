import Vuex from 'vuex';
import Vue from 'vue';
import _ from 'lodash';


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {

    }
    // state: { // = data
    //
    // },
    //
    // getters: { // = computed properties, perfect filter and calculate runtime
    //     //sơ chế dữ liệu cần thiết same phương thức get
    //
    // },
    //
    // actions: actions,
    //
    // mutations: {
    //     //nơi hứng dữ liệu từ các chỗ components đẩy lên khác nhau thông qua actions của store
    //
    // }
});
export default store;
