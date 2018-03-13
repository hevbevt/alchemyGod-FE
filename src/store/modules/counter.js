import counter from '../../service/counter';
const state = {
    count: 0,
}

const actions = {
    getDefaultCountData({ commit }) {
        counter.getDefaultCountNumber().then(function (resp) {
            commit('setCount', {
                count: resp.data
            });
        })
    },
}

const mutations = {
    setCount: (state, { count }) => state.count = count,
    increment: state => state.count++,
    decrement: state => state.count--,
    clear: state => state.count = 0
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}