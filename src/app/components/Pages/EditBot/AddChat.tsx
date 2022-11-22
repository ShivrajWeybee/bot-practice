import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { addToChatFlow, fetchChatComponent } from '../../../reducers/EditFlow/actions';
import ChatButton from '../ChatComponents/ChatButton';

export interface AddChatProps {
    chatButtons: [],
    getChatButton: any,
    loading: boolean,
    addMessageToChatFlow: any
}


const AddChat: React.FC<AddChatProps> = ({ chatButtons, getChatButton, loading, addMessageToChatFlow }) => {

    useEffect(() => {
        getChatButton();
    }, [])

    const generateId = () => {
        const random = Math.round(Math.random() * 100000);
        const date = new Date();
        return '' + random + date.getMilliseconds() + date.getHours() + date.getSeconds();
    }

    return (
        <div className="add-chat-container">
            <h2 className="canvas-heading">Add Chat Components</h2>
            <div className='add-chat-wrapper'>
                {
                    loading ? <p>Loading....</p> :
                        chatButtons?.map((chat: any, index: any) => (
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
        getChatButton: () => dispatch(fetchChatComponent()),
        addMessageToChatFlow: (chat: any) => dispatch(addToChatFlow(chat))
    }
}

const connectEditFlow = connect(mapStateToProps, mapDispatchToProps)(AddChat)
export default connectEditFlow;
