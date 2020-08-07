import React, { Fragment, useState, version } from 'react';

import "./game-appearances.css"

const GameAppearances = ({ appearance }) => {
    let [groupName, setGroupName] = useState("Loading...")
    let [generation, setGenerationUrl] = useState("Loading...")
    let [toggle, setToggle] = useState(true)

    const onClickFunction = async () => {
        setToggle(!toggle)

        const fetchSecondUrl = async (url) => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setGenerationUrl(data.generation.name)
            } catch (error) {
                console.log(error)
            }
        }

        try {
            const response = await fetch(appearance.version.url)
            const data = await response.json()
            setGroupName(data.version_group.name)
            fetchSecondUrl(data.version_group.url)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Fragment>
            <div onClick={onClickFunction} className="appearances-border">
                <span> pokemon {appearance.version.name} {
                    toggle
                        ? (
                            <span>❱</span>
                        )
                        : (
                            null
                        )
                }
                </span>
                {
                    toggle
                        ? (
                            null
                        )
                        : (
                            <div className="data">
                                <span className="data-span"> game group: {groupName}<br />generation: {generation}</span>
                            </div>
                        )
                }
            </div>
        </Fragment>
    )
}

export default GameAppearances;