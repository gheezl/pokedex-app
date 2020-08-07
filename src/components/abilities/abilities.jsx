import React, { Fragment, useState } from 'react';

import "./abilities.css"

const Abilities = ({ ability }) => {
    let [abilityData, setAbilityData] = useState("loading...")
    let [toggle, setToggle] = useState(true)


    const onClickFuntion = async () => {
        setToggle(!toggle)
        try {
            const response = await fetch(ability.ability.url)
            const data = await response.json()
            setAbilityData(data.effect_entries[1].short_effect)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <div onClick={onClickFuntion} className="ability-border">
                <span>{ability.ability.name}
                    {
                        toggle
                            ? (
                                <span> ❱</span>
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
                        :
                        (
                            <div className="data">
                                <span className="data-span">{abilityData}</span>
                            </div>
                        )
                }
            </div>
        </Fragment>
    )
}

export default Abilities;