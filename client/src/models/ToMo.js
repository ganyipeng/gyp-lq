import request from '../utils/request'
export default {
    namespace: 'tomo',
    state: {
        name: 'totomomo the nju student'
    },
    reducers: {
        update(state, action){
            console.log(action)
            return {
                ...state,
                // name: 'changed by reducer'
                name: action.payload.name
            }
        }
    },
    effects: {
        *updateFromApi(action, saga){
            const {commit, put} = saga
            yield commit(request, '/api/test');
            yield put({
                type: 'update'
            })
        }
    }
}