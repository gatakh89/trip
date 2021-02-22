// 액션목록을 제어하는 리듀서
// actions.js

//ex)
// Like 목록을 제어하는 리듀서
// likes.js


// 액션 목록을 제어하는 리듀서
// actions.js

// 리듀서(현재state, action의 리턴객체) =>{
//   switch...case...case..action의 타입에 따라서 state를 제어
//   return 변경할 state
// }

const actions = (state = [], action) => {

  switch (action.type) {
    case 'ADD_ACTION':

      return[

        ...state,
 
        {
          ...action.payload
        }
      ]
      case 'REMOVE_ACTION':
        return [
          ...state.filter(item => item.id != action.payload)
        ]
      default:
        return state
      }
}
export default actions;