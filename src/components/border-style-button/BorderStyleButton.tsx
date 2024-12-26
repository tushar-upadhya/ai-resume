import { Circle, Square, Squircle } from "lucide-react";
import { Button } from "../ui/button";

export const BorderStyles = {
  SQUARE: "square",
  CIRCLE: "circle",
  SQUIRCLE: "squircle",
};

const borderStyles = Object.values(BorderStyles);

interface BorderStyleButtonProps {
  borderStyle: string | undefined;
  onChange: (borderStyle: string) => void;
}
const BorderStyleButton = ({
  borderStyle,
  onChange,
}: BorderStyleButtonProps) => {
  const click = () => {
    const currentIndex = borderStyle ? borderStyles.indexOf(borderStyle) : 0;
    const nextIndex = (currentIndex + 1) % borderStyles.length;
    onChange(borderStyles[nextIndex]);
  };

  const Icon =
    borderStyle === "square"
      ? Square
      : borderStyle === "circle"
        ? Circle
        : Squircle;
  return (
    <Button
      variant="outline"
      size="icon"
      title="Change border style"
      onClick={click}
    >
      <Icon className="size-5" />
    </Button>
  );
};

export default BorderStyleButton;
