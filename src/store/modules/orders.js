const state = {
    items: [],
    loading: false
}

const actions = {
    updateOrders({commit}) {
        commit('SET_LOADING', true)
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = [
                    {
                        name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                            code: 3,
                            type: '已取消'
                        },
                        date: '107/6/12'
                    },
                    {
                        name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                            code: 2,
                            type: '已成立'
                        },
                        date: '108/7/21'
                    },
                    {
                        name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                            code: 1,
                            type: '處理中'
                        },
                        date: '108/6/2'
                    },
                    {
                        name: 'Apple AirPds 2',
                        logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
                        status: {
                            code: 4,
                            type: '已送達'
                        },
                        date: '108/3/02'
                    }
                ]
                data.sort((a, b) => {
                    return +new Date(b.date) - +new Date(a.date)
                })
                resolve(data)
            }, 500)
        })
            .then(data => {
                commit('SET_ITEMS', data)
            })
            .finally(() => {
                commit('SET_LOADING', false)
            })
    }
}

const mutations = {
    SET_ITEMS(state, items) {
        state.items = items
    },
    SET_LOADING(state, loading) {
        state.loading = loading
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}