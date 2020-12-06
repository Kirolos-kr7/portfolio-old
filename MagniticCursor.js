let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
  const canvas = document.querySelector(".cursor--canvas");
  const shapeBounds = {
    width: 75,
    height: 75,
  };
  paper.setup(canvas);
  const strokeColor = "rgba(255, 255, 255,0.5)";
  const strokeWidth = 1;
  const segments = 8;
  const radius = 15;

  const noiseScale = 150;
  const noiseRange = 4;
  let isNoisy = false;

  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  let bigCoordinates = [];

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  paper.view.onFrame = (event) => {
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
    group.position = new paper.Point(lastX, lastY);
  };
};

initCanvas();

// $(".zoom").mouseenter(function () {
//   $(".cursor--small").css("width", 30);
//   $(".cursor--small").css("height", 30);
//   $(".cursor--small").css("left", "-15px");
//   $(".cursor--small").css("top", "-15px");
// });

// $(".zoom").mouseleave(function () {
//   $(".cursor--small").css("width", 5);
//   $(".cursor--small").css("height", 5);
//   $(".cursor--small").css("left", "-2.5px");
//   $(".cursor--small").css("top", "-2.5px");
// });
