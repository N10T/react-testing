import React from 'react'

export default function Bouton() {
    const [isClicked, setClicked] = React.useState(false)
    return (
        <button
            onClick={() => setClicked(isClicked=>!isClicked)}
            style={{padding: '32px'}}
            className={isClicked ? 'clicked' : 'normal'}
            data-testid="button-to-test"
        >
            Button { isClicked ? 'clicked' : 'not clicked' }
        </button>
    )
}
