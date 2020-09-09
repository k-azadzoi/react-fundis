import React from 'react'

const Part = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
    return (
        <>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>   
        </>
    )
}

export default Part