import React, { useState } from 'react';
import { Button } from '@mui/material';
import StepComponent from './StepComponent';

function ProcedureGuide({ steps }) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div>
            <StepComponent step={steps[currentStep]} />
            <div>
                <Button onClick={prevStep} disabled={currentStep === 0}>
                    Previous
                </Button>
                <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
                    Next
                </Button>
            </div>
        </div>
    );
}

export default ProcedureGuide;
