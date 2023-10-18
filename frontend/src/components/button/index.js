import { Button } from "antd";

const ButtonComponent = ({ label, type, htmlType, onClick, danger }) => {
    return (
        <Button type={type} htmlType={htmlType} onClick={onClick} danger={danger} >{label}</Button>
    );
};

export default ButtonComponent;