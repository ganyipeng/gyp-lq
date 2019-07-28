import request from '../utils/request';
export default {
  namespace: 'joke',
  state: {
    jokes: [],
    joke: {},
  },
  reducers: {
    updateState(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        ...payload,
      };
    },
    updateStateWhenCreate(state, { newJoke }) {
      console.log(newJoke);
      state.jokes.push(newJoke);
      return {
        ...state,
      };
    },
    updateJoke(state, { joke }) {
      debugger;
      console.log(joke);
      return {
        ...state,
        joke,
      };
    },
  },
  effects: {
    // 获取完整joke列表
    *getJokes({ payload }, { call, put }) {
      const response = yield call(request.get, '/api/jokes');
      yield put({
        type: 'updateState',
        payload: {
          jokes: response,
        },
      });
    },

    /**获取指定joke */
    *getJokeById({ id }, { call, put }) {
      const response = yield call(request, `/api/jokes/${id}`);
      debugger;
      yield put({
        type: 'updateJoke',
        joke: response,
      });
    },

    /**删除指定joke */
    *deleteJokeById({ id }, { call, put }) {
      console.log('dddddd' + id);
      const response = yield call(request.delete, `/api/jokes?id=${id}`);
      yield put({
        type: 'updateState',
        payload: {
          jokes: response,
        },
      });
    },

    /**更新指定joke */
    *updateJokeById({ payload }, { call, put }) {},

    /**创建joke */
    *createJoke({ payload, title, content }, { call, put }) {
      console.log(`cj:${title}, ${content}`);
      const body = {
        title,
        content,
      };
      const response = yield call(request.post, '/api/jokes', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log(response);
      yield put({
        type: 'updateStateWhenCreate',
        newJoke: response,
      });
    },
  },
};
