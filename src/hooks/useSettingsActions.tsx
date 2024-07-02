import { useSettings } from '../contexts/SettingsContext';

const useSettingsActions = () => {
    const { actions } = useSettings();

    const updateCurrency = (currency: string) => {
        actions.updateCurrency(currency);
    };

    const updateSettings = (settings: any) => {
        actions.updateSettings(settings);
    };

    const updateTaxonomy = (taxonomy: any) => {
        actions.updateTaxonomy(taxonomy);
    };

    return {
        updateCurrency,
        updateSettings,
        updateTaxonomy,
    };
};

export default useSettingsActions;
