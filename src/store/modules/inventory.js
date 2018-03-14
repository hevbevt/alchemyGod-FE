const state = {
    filter: {
        level: '',
        code: '',
        attribute: '',
        sort: '',
    },
    listData: [],
}

const actions = {
}

const mutations = {
    changeFilter: (state, payload) => state.filter = payload,
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}