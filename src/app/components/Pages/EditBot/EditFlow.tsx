import React from 'react'
import { connect } from 'react-redux';
import { setTheInputValue } from '../../../reducers/EditFlow/actions';
import MessageInChat from '../ChatComponents/MessageInChat'

interface addToChatFlow {
    _id: any,
    id: number,
    inputText: string,
    label: string,
    message: string,
    messageType: string,
    targetId: number
}

export interface EditFlowProps {
    loading: string,
    chatFlow: addToChatFlow[],
    setIsCustom: any,
    setTheInputValue: Function,
    setCompoId: any
}

const EditFlow: React.FC <EditFlowProps> = (props: any) => {

    const handleClick = (chat:any) => {
        props.setIsCustom(true);
        props.setTheInputValue(chat.message);
        props.setCompoId(chat._id);
    }

    return (
        <div className="edit-flow-container">
            <h2 className="canvas-heading">Edit Chat Flow</h2>
            {
                props.loading ? "Loading..." :
                    props.chatFlow?.map((chat:any, index:number) => (
                        <div
                            key={index}
                            onClick={() => handleClick(chat)}
                        >
                            {/* <div>{chat.message}</div> */}
                            <MessageInChat botMessage={chat} />
                        </div>
                    ))
            }
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        loading: state.ChatComponentReducer.loading,
        chatFlow: state.chatFlowReducer.chatFlow,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setTheInputValue: (input_value:any) => dispatch(setTheInputValue(input_value))
    }
}

const connectEditFlow = connect(mapStateToProps, mapDispatchToProps)(EditFlow)
export default connectEditFlow;

