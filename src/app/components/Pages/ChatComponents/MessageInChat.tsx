import React from 'react'

interface botMessage {
    id: number,
    label: string,
    message: string,
    messageType: string,
    inputType: string,
}

function MessageInChat (props: {botMessage: botMessage}) {
    return (
        <div className="message-wrapper">
            <div className="msg bot-message"><div>{props.botMessage.message}</div></div>
            {
                props.botMessage.messageType === 'question' &&
                <div className="msg user-message"><div>User reply</div></div>
            }
        </div>
    )
}

export default MessageInChat
