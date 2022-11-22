import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editChatMessage } from '../../reducers/EditFlow/actions';
// import { editChatMessage, setTheInputValue } from '../../reducers/EditFlow/actions';

interface InsideOfOptions {
    _id: any,
    id: number,
    inputText: string,
    label: string,
    defaultQuestion: string,
    questionType: string,
    targetId: number
}

interface Props {
    options: InsideOfOptions[],
    endChat: boolean,
    compoId: any,
    chatFlow: any,
    editChatFlow: any,
    target_ID: any,
    setTarget_ID: any
}

const Dropdown: React.FC<Props> = (props: any) => {
    const [defaultValue, setDefaultValue] = useState(props.target_Id === 0 ? '1' : props.target_Id);
    console.log(props.target_ID);
    const handleChange = (e: any) => {
        console.log(e.target.value);
        console.log(props.target_ID);
        console.log({ defaultValue });
        setDefaultValue(e.target.value);
        props.editChatFlow(props.compoId, e.target.value, 'targetId');
        props.setTarget_ID(props.chatFlow.find((chat: any) => chat._id === props.compoId)?.targetId);
    };

    return (
        <div>
            <select
                className='form-select form-select-solid'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                onChange={(e: any) => handleChange(e)}
                value={props.target_ID === 0 ? '1' : props.target_ID}
            // defaultValue={props.target_ID === 0 ? '1' : props.target_ID}
            >
                <option value='1' disabled>Please select any one</option>
                {
                    props.options.map((chat: any, index: number) => (
                        <option key={index} value={chat._id}>{chat.defaultQuestion}</option>
                    ))
                }
                {
                    props.endChat &&
                    <option>End Chat</option>
                }
            </select>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        chatFlow: state.chatFlowReducer.chatFlow
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        editChatFlow: (chatCompoId: number, message: any, editableProperty: string) => dispatch(editChatMessage(chatCompoId, message, editableProperty))
    }
}

const connectEditFlow = connect(mapStateToProps, mapDispatchToProps)(Dropdown)
export default connectEditFlow;
