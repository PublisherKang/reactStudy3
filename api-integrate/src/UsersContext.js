import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },

  user: {
    loading: false,
    data: null,
    error: null,
  },
};

// 로딩중일때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null,
};

// 성공했을태 상태 만들어주는 함수
const success = (data) => ({
  loading: false,
  data,
  error: null,
});

// 실패했을때 상태 만들어주는 함수
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

// 유틸 함수를 사용해서 리듀스 작성
function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        users: error(action.error),
      };
    case "GET_USER":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        users: error(action.error),
      };
    default:
      throw new Error(`실패한 타입 : ${action.type}`);
  }
}

// state용 context와 Dispatch용 context 따로 만들어주기
const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

//위에서 선언한 두가지 context들의 provider로 감싸주는 컴포넌트
export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

// state를 쉽게 조회 할 수 있는 커스텀 Hook
export function useUsersState() {
  const state = useContext(UserStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) {
    throw new Error("Cnnot find UsersProvider");
  }

  return dispatch;
}

//API 처리 함수 만들기
export async function getUsers(dispatch) {
  dispatch({ type: "GET_USERS" });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: "GET_USERS_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_USERS_ERROR", error: e });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: "GET_USER" });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({ type: "GET_USER_SUCCESS", data: response.data });
  } catch (e) {
    dispatch({ type: "GET_USER_ERROR", error: e });
  }
}
