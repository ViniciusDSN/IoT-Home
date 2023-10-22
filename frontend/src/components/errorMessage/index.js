import { Text } from "./styles";

const ErrorMessageComponent = ({ children }) => {
    return (
        <Text>
            {children}
        </Text>
    );
};

export default ErrorMessageComponent;