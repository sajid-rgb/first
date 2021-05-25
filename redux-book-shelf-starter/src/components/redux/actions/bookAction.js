export const addToReadingList=(payload )=>{
    return {
        type:'ADD_TO_READING_LIST',
        payload
    }
}
export const removeFRomReadingList=(payload)=>{
    return {
        type:'REMOVE_FROM_READING_LIST',
        payload
    }
}
export const FinishedFRomReadingList=(payload)=>{
    return {
        type:'FINISHED_FROM_READING_LIST',
        payload
    }
}