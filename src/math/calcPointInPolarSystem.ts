const calcPointInPolarSystem = (angle: number, distance: number) => ({
  x: distance * Math.cos(angle),
  y: distance * Math.sin(angle)
});

export default calcPointInPolarSystem;
