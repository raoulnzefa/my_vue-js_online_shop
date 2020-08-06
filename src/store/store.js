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
                    context.commit('addMany', Object.keys(data).map( key => data[key]))
                })
        },
    },
}

const cart = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addOne(state, product) {
            state.datas.push(product);
        },
        deleteOne(state, id) {
            const index = state.datas.findIndex( d => d.id === id);
            state.datas.splice(index, 1);
        }
    }
}

const store = new Vuex.Store({
    modules: {
        product,
        cart
    }
})

export default store;