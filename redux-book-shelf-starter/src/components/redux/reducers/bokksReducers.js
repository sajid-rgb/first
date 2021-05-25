import allBooks from '../../../fakeData/books.json'

const initialState = {
    readingList:[],
    discoverList:allBooks,
    finishedList:[]
}
const booksReducers=(state=initialState,action) =>{
    console.log('state',state.readingList)
    switch(action.type){
        case 'ADD_TO_READING_LIST':
            const newStore = {
                ...state,
                readingList:[...state.readingList,action.payload]

            }
            return newStore
  
            
            
        case 'REMOVE_FROM_READING_LIST':
            const newState= {
                ...state,
                readingList:state.readingList.filter(b=>b.id!==action.payload)
            }
            return newState
        case 'FINISHED_FROM_READING_LIST':
                const newList = {
                    ...state,
                    finishedList:[...state.finishedList,action.payload]
    
                }
                return newList
        default:
            return state
              
    }
   
}
export default booksReducers