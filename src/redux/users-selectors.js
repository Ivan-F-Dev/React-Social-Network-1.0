export const getUsersS = (state) => {
    return state.usersPage.users
}
export  const getPageSizeS = (state) => {
    return state.usersPage.pageSize
}
export  const getTotalUsersCountS = (state) => {
    return state.usersPage.totalUsersCount
}
export  const getCurrentPageS = (state) => {
    return state.usersPage.currentPage
}
export  const getIsFetchingS = (state) => {
    return state.usersPage.isFetching
}
export  const getFollowingInProgressS = (state) => {
    return state.usersPage.followingInProgress
}

