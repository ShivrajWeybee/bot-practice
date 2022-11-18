import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetChatComponents } from '../../../reducers/EditFlow/services';
import ChatButton from '../ChatComponents/ChatButton';
import { addToChatFlow } from '../../../reducers/EditFlow/actions';

export interface AddChatProps {
    chatButtons: [],
    getChatButton: any,
    loading: boolean,
    addMessageToChatFlow: any
}


const AddChat: React.FC <AddChatProps> = ({ chatButtons, getChatButton, loading, addMessageToChatFlow }) => {

    useEffect(() => {
        getChatButton();
    }, [])

    const generateId = () => {
        const date = new Date();
        return '' + date.getMilliseconds() + date.getHours() + date.getSeconds();
    }

    return (
        <div className="add-chat-container">
            <h2 className="canvas-heading">Add Chat Components</h2>
            <div className='add-chat-wrapper'>
                {
                    loading ? <p>Loading....</p> :
                        chatButtons.map((chat:any, index:any) => (
                            <div
                                key={index}
                                onClick={() => addMessageToChatFlow({ ...chat, _id: generateId(), targetId: 0 })}
                            >
                                <ChatButton
                                    content={chat.label}
                                />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        loading: state.ChatComponentReducer.loading,
        chatButtons: state.ChatComponentReducer.chatButtons,
        chatFlow: state.chatFlowReducer.chatFlow,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getChatButton: () => dispatch(GetChatComponents()),
        addMessageToChatFlow: (chat: any) => dispatch(addToChatFlow(chat))
    }
}

const connectEditFlow = connect(mapStateToProps, mapDispatchToProps)(AddChat)
export default connectEditFlow;
