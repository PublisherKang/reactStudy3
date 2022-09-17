// posts 리팩토링
// Promise 기반 thunk 만드는 함수;

export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성
  // 만약 여러종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 됨.
  // 예: writeComment({ postId: 1, text: "댓글내용" });

  return (param) => async (dispatch) => {
    //요청 시작
    dispatch({ type, param });
    try {
      // 결과물 이름을 payload라는 이름으로 통일 시킨다.
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); // 성공
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 실패
    }
  };
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수들
export const reducerUtils = {
  // 초기상태. 초기 data값은 기본적으로 null이지만 바꿀수도 있음.
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),

  // 로딩중 상태, preState의 기본값은 null이지만
  // 따고 값을 지정하면 null로 바꾸지 않고 다른 값을 유지시킬 수 있다.
  loading: (preState = null) => ({
    loading: true,
    data: preState,
    error: null,
  }),

  // 성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),

  // 실패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

// 비동기 관련 액션들을 처리하는 리듀수 만들기
// type은 액션의 타입, key는 상태의 key (예: posts, post)
export default handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
