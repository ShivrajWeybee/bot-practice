import React from 'react'

interface botMessage {
    id: number,
    label: string,
    defaultQuestion: string,
    messageType: string,
    inputType: string,
}

function MessageInChat(props: { botMessage: botMessage }) {
    return (
        <div className="message-wrapper">
            <div className="msg bot-message"><div>{props.botMessage.defaultQuestion}</div></div>
            {
                props.botMessage.messageType !== 'message' &&
                <div className="msg user-message">
                    <div>User reply</div>
                </div>
            }
        </div>
    )
}

export default MessageInChat
