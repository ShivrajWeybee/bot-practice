import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editChatMessage, setTheInputValue } from '../../../reducers/EditFlow/actions';
import Dropdown from '../../CommonComponents/Dropdown';

interface addToChatFlow {
    _id: any,
    id: number,
    inputText: string,
    label: string,
    defaultQuestion: string,
    questionType: string,
    targetId: number
}

export interface CustomizeMessageProps {
    isCustom: boolean,
    inputValue: string,
    chatFlow: addToChatFlow[],
    setPlaceholders: any,
    compoId: number,
    editMessage: any
}

const CustomizeMessage: React.FC<CustomizeMessageProps> = ({ isCustom, inputValue, chatFlow, setPlaceholders, compoId, editMessage }) => {

    const [singleChoiceOption, setSingleChoiceOption] = useState([]);
    const [target_ID, setTarget_ID] = useState(0);

    const handleChangeSubmit = (e: any) => {
        if (e.key !== "Enter") return;
        editMessage(compoId, inputValue, 'defaultQuestion')
    }

    const handleAddOption = () => {
        console.log("hello..")
    }

    return (
        <div className="customize-mess-container">
            <h2 className="canvas-heading">Customize Chat Message</h2>
            {
                isCustom &&
                <div>
                    <div className="custom-sub-div">
                        <label className="custom-label">Enter your own custom message</label>
                        <input
                            className="custom-mess-input"
                            type="text"
                            value={inputValue}
                            onChange={(e) => setPlaceholders(e.target.value)}
                            onKeyDown={(e) => handleChangeSubmit(e)}
                        />
                    </div>

                    <div className="custom-sub-div">
                        <label className="custom-label">Go to next message</label>
                        <Dropdown
                            options={chatFlow.filter((chat: any) => chat._id !== compoId)}
                            endChat={true} compoId={compoId}
                            target_ID={chatFlow.find((chat: any) => chat._id === compoId)?.targetId}
                            setTarget_ID={setTarget_ID} />
                    </div>

                    {/* Check if message type is 'Single Choice Question', then Display otherwise Not */}
                    {
                        chatFlow.find((chat: any) => chat._id === compoId)?.questionType == 'single choice' &&
                        <div>
                            <div className="custom-options flex">
                                <input
                                    className="custom-mess-input option-wrapper"
                                    type="text"
                                    value="Option 1"
                                    onChange={(e) => setPlaceholders(e.target.value)}
                                    onKeyDown={(e) => handleChangeSubmit(e)}
                                />
                                <div>
                                    <button
                                        className="add-option"
                                        onClick={() => handleAddOption()}>+</button>
                                </div>
                            </div>
                            <Dropdown
                                options={chatFlow.filter((chat: any) => chat._id !== compoId)}
                                endChat={true}
                                compoId={compoId}
                                target_ID={chatFlow.find((chat: any) => chat._id === compoId)?.targetId}
                                setTarget_ID={setTarget_ID} />
                        </div>
                    }
                </div>
            }
        </div >
    )
}

const mapStateToProps = (state: any) => {
    return {
        chatFlow: state.chatFlowReducer.chatFlow,
        inputValue: state.chatFlowReducer.inputValue,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setPlaceholders: (input_value: any) => dispatch(setTheInputValue(input_value)),
        editMessage: (compoId: number, message: string, editableProperty: string) => dispatch(editChatMessage(compoId, message, editableProperty))
    }
}
const connectEditFlow = connect(mapStateToProps, mapDispatchToProps)(CustomizeMessage)
export default connectEditFlow;
