// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS"; // 요청시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST"; // 요청시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS"; // 요청 성공
const GET_POST_ERROR = "GET_POST_ERROR"; // 요청 실패

// thunk를 사용할때 꼭 모든 액션에 대해 액션 생성 함수를 만들 필요 없다.
// thunk 함수에서 바로 액션 객체를 만들어도 된다.

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS });
  try {
    const posts = await postsAPI.getPosts(); // api 호출
    dispatch({ type: GET_POSTS_SUCCESS, posts }); // 성공
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e }); //실패
  }
};

export const getPost = () => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const post = await postsAPI.getPostById(id); // api 호출
    dispatch({ type: GET_POST_SUCCESS, posts }); // 성공
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e }); //실패
  }
};

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },

  post: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: true,
          data: action.posts,
          error: null,
        },
      };

    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    case GET_POST:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: {
          loading: true,
          data: action.posts,
          error: null,
        },
      };

    case GET_POST_ERROR:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
