import { forwardRef } from "react";
import { Input, Label } from "./styles";

const InputComponent = forwardRef(({ label, ...props }, ref) => {
    return(
        <>
            <Label>
                {label}
            </Label>
            <Input
                ref={ref}
                {...props}
            />
        </>
    )
});

export default InputComponent;