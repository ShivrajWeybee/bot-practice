import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editChatMessage, setTheInputValue } from '../../reducers/EditFlow/actions';

interface InsideOfOptions {
    _id: any,
    id: number,
    inputText: string,
    label: string,
    message: string,
    messageType: string,
    targetId: number
}

interface Props {
    options: InsideOfOptions[],
    endChat: boolean,
    compoId: any,
    chatFlow: any,
    editChatFlow: any
}

const Dropdown: React.FC<Props> = (props: any) => {

    const [defaultValue, setDefaultValue] = useState('1');
    const handleChange = (e: any) => {
        console.log(e.target.value);
        console.log(defaultValue);
        setDefaultValue(e.target.value);
        props.editChatFlow(props.compoId, e.target.value, 'targetId');
    };

    return (
        <div>

            <select
                className='form-select form-select-solid'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                onChange={(e:any) => handleChange(e)}
                value={defaultValue}
                defaultValue={props.targetId === 0 ? '1' : defaultValue}
            >
                <option value='' disabled hidden>Please select any one</option>
                {
                    props.options.map((chat: any, index: number) => (
                        <option key={index} value={chat._id}>{chat.message}</option>
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
