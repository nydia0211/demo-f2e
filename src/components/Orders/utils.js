
const me = () => ({
    inProcess (item) {
        return item.status.code === 1 || item.status.code === 2
    },
    finished (item) {
        return item.status.code === 3 || item.status.code === 4
    }
})

export default me()