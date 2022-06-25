import { configureStore } from '@reduxjs/toolkit'
// ...
const store = configureStore({
  reducer: {
    number: (state:number = 1) => state,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store


//utility type
//ReturnType: trả vê type của object
//type abc (biến type giống var let const)
function A() : number {
    return 123;
}
// () => number
type typeCuaHamA = ReturnType<typeof A>;

