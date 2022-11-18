import React, { useState } from 'react'
import AddChat from './AddChat'
import CustomizeMessage from './CustomizeMessage'
import EditFlow from './EditFlow'

const Canvas: React.FC = () => {

    const [isCustom, setIsCustom] = useState(false);
    const [compoId, setCompoId] = useState(null as any);

    return (
        <div className="canvas">
            <AddChat />
            <EditFlow
                setIsCustom={setIsCustom}
                setCompoId={setCompoId}
            />
            <CustomizeMessage
                isCustom={isCustom}
                compoId={compoId}
            />
        </div>
    )
}

export default Canvas;