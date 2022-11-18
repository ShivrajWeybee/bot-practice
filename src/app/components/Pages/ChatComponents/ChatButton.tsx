import React from 'react'

export interface ChatButtonProps {
    content: any,
}

const ChatButton: React.FC <ChatButtonProps> = ({content}) => {
    return (
        <div className="chat-button">
            <button>{content}</button>
        </div>
    )
}

export default ChatButton
