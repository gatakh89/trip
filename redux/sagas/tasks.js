import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import api from '../../api/tasks'

function* addTask(action) {
  // console.log("-- Saga: action --");
  // console.log(action);

  // 1. back end와 REST API 연동
  // yield call(비동기함수명, 매개변수, 매개변수,.....)
  const result = yield call(api.post, action.payload)
  // console.log("-- Saga: spi result --");
  // console.log(result.data)
 
  // 2. state를 변경하는 reducer 함수를 실행
  yield put({type:"ADD_TASK_SUCCEEDED", payload: action.payload});
}

function* fetchTasks(action){
  // 1. 비동기함수 호출(api)
  // console.log("-- Saga: action --");
  // console.log(action);
  const result = yield call(api.list);
  // console.log("-- Saga: spi result --");
  // console.log(result.data)
  // 2. dispatch를 실행하는 부분
  yield put ({type:"FETCH_TASKS_SUCCEEDED", payload: result.data})
}
function* removeTask(action) {
  // console.log("-- Saga: action --");
  // console.log(action);

  // 1. back end와 REST API 연동
  // yield call(비동기함수명, 매개변수, 매개변수,.....)
  const result = yield call(api.delete, action.payload)
  // console.log("-- Saga: spi result --");
  // console.log(result.data)
 
  // 2. state를 변경하는 reducer 함수를 실행
  yield put({type:"REMOVE_TASK_SUCCEEDED", payload: action.payload});
}

function* tasksSaga() {
  
  // 액션이 발생했을때, 제너레이터 함수로 처리
  // dispatch({type: "ADD_TASK",payload:item})

  // takeEvery : 해당액션이 발생할 때마다 모두 처리
  // yield takeEvery("액션타입", 처리할 제너레이터함수)
  yield takeEvery("ADD_TASK", addTask);
    // const gen = addTask()
    // addTask.next()

  //takeLatest: 해당 액션이 발생할때 가장나중에호출할 액션처리
  // 이전의 액션을 취소
  // 주로 api를 통해서 데이터를 조회해올때 사용
  //  yield takeLatest("액션타입", 처리할 제너레이터함수)
  yield takeLatest("FETCH_TASKS", fetchTasks)

  yield takeEvery("REMOVE_TASK", removeTask);

}

export default tasksSaga