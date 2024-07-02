import { SetupWizardSteps } from '../enums/SetupWizardSteps';
import { SetupWizardStatus } from '../enums/SetupWizardStatus';
import axiosInstance, { api } from './axiosInstance';

export const setStep = (dispatch: React.Dispatch<any>, step: string) => {
  dispatch({ type: 'SET_STEP', payload: step });
  localStorage.setItem('currentStep', step);
};

export const wizardStatus = (dispatch: React.Dispatch<any>, status: SetupWizardStatus, step: SetupWizardSteps) => {
  dispatch({ type: 'WIZARD_STATUS', payload: { status, step } });
  localStorage.setItem('currentStatus', status);
  localStorage.setItem('currentStep', step.toString());
};

export const nextStep = (dispatch: React.Dispatch<any>) => {
  dispatch({ type: 'NEXT_STEP' });
};

export const errorStep = (dispatch: React.Dispatch<any>) => {
  dispatch({ type: 'ERROR_STEP' });
};

export const previousStep = (dispatch: React.Dispatch<any>) => {
  dispatch({ type: 'PREVIOUS_STEP' });
};

export const checkAccountCompleteness = async (dispatch: React.Dispatch<any>) => {
  const res1 = await axiosInstance.get(api('/setup-wizard-status'));
  if (!res1.data.completed) {
    dispatch({
      type: 'WIZARD_STATUS',
      payload: { status: SetupWizardStatus.Incompleted, step: SetupWizardSteps.Welcome },
    });
    return;
  }

  dispatch({
    type: 'WIZARD_STATUS',
    payload: { status: SetupWizardStatus.Completed, step: SetupWizardSteps.RoleStructure },
  });
};
