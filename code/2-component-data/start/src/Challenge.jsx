import React from 'react';

function Challenge(props) {
    const cookingStep = props.cooking.map((cookStep) =>
        <li key={cookStep.key}>{cookStep.description}</li>
    );

    return (
        <ol>
            {cookingStep}
        </ol>
    );
}

export default Challenge;