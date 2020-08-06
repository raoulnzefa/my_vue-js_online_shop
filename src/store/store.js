import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const product = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addMany(state, products) {
            state.datas = products;
        },
    },
    actions: {
        fetchDatas(context) {
            axios.get('products.json')
                .then(response => {
                    const data = response.data;
                    console.log('data', data);
                    context.commit('addMany', Object.keys(data).map( key => data[key]))
                })
        },
    },
}

const cart = {
    namespaced: true,
    state: {
        datas: []
    }
}

const store = new Vuex.Store({
    modules: {
        product,
        cart
    }
})

export default store;