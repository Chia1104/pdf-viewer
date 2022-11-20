import Konva from "konva";

const stage = (container: HTMLDivElement) => {
  return new Konva.Stage({
    container,
    width: container.offsetWidth,
    height: container.offsetHeight,
  });
};

const dragImage = (image: HTMLImageElement) => {
  return new Konva.Image({
    image,
    x: 0,
    y: 0,
    draggable: true,
  });
};

const dragText = (text: string) => {
  return new Konva.Text({
    text,
    x: 0,
    y: 0,
    draggable: true,
  });
};

const getCorner = ({
  pivotX,
  pivotY,
  diffX,
  diffY,
  angle,
}: {
  pivotX: number;
  pivotY: number;
  diffX: number;
  diffY: number;
  angle: number;
}) => {
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);
  angle += Math.atan2(diffY, diffX);

  const x = pivotX + distance * Math.cos(angle);
  const y = pivotY + distance * Math.sin(angle);

  return { x: x, y: y };
};

export { stage, dragImage, dragText, getCorner };
