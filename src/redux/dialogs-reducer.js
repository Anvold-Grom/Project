const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initState = {
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как дела?'},  
        {id: 3, message: 'Как сам?'},  
        {id: 4, message: 'Добрый день'},  
        {id: 5, message: 'Здравствуй'},  
    ],      
    dialogs: [
        {id: 1, name: 'Никита'},
        {id: 2, name: 'Виктория'},  
        {id: 3, name: 'Карина'},  
        {id: 4, name: 'Наташа'},  
        {id: 5, name: 'Женя'},  
        {id: 6, name: 'Илья'},  
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
    
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
({ type: UPDATE_NEW_MESSAGE_BODY, body: body}) 

export default dialogsReducer;