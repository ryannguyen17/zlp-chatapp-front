import { MESSAGE, ADDUSER, CHATVIEW, ADDGROUP } from '../actions/actions'


const initialState = {

    info: {
        userAcc: "thoainh",
        userName: "thoai nguyen",
        chatAcc: "nghianv",
        chatView: "nghia nguyen",
        chatViewStatus: false,
        isGroup: false,
        ready: false
    },

    persons: {
        "thoainh": {
            acc: "thoainh",
            personName: "thoai nguyen",
            lastestMsg: "An gi chua?",
            online: true,
            messages: []
        },
        "nghianv": {
            acc: "nghianv",
            personName: "nghia nguyen",
            lastestMsg: "Chua?",
            online: true,
            messages: []
        }
    },

    groups: {
        "faalone":{
            acc: "faalone",
            groupName: "FA Alone",
            lastestMsg: "An gi chua?",
            online: true,
            messages: []
        }
    }
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATVIEW:
            return Object.assign({}, state, {
                info: {
                    userAcc: state.info.userAcc,
                    userName: state.info.userName,
                    isGroup: action.payload.isGroup,
                    chatView: action.payload.chatView,
                    chatAcc: action.payload.acc,
                    chatViewStatus: action.payload.online,
                    ready: true
                }
            });
        case MESSAGE:
            console.log(action);
            const pload = action.payload;
            const msg = {
                id : Date.now(),
                sender: state.info.userName,
                content: pload.content,
                time : pload.time
            }
            let obj = {};
            if (pload.isgroup){
                obj = Object.assign({},state, {
                    groups: {
                        ...state.groups,
                        [pload.receiver]:{
                            ...state.groups[pload.receiver],
                            lastestMsg : pload.content,
                            messages : state.groups[pload.receiver].messages.concat(msg)
                        }
                    }
                });
            }
            else{
                obj = Object.assign({},state, {
                    persons: {
                        ...state.persons,
                        [pload.receiver]:{
                            ...state.persons[pload.receiver],
                            lastestMsg : pload.content,
                            messages : state.persons[pload.receiver].messages.concat(msg)
                        }
                    }
                });
            }
            return obj;
        default:
            return state;
    }
}

export default rootReducer;