import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';
import UIProvider from './UIProvider';

export const UIProviderContainer: React.FC = ({ children }) => {
    const { uiConfig } = useUiConfig();

    if (!uiConfig.flags) {
        return null;
    }

    return <UIProvider>{children}</UIProvider>;
};
