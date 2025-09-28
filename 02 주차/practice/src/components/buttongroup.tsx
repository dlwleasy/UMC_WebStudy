import Button from "./button"

interface ButtonGroupProps {
    Increase? : () => void;
    Decrease? : () => void;
}
const ButtonGroup = ({Increase, Decrease}:ButtonGroupProps) => (
    <div>
        <Button onClick={Increase} text="증가"></Button>
        <Button onClick={Decrease} text="감소"></Button>
    </div>
)

export default ButtonGroup