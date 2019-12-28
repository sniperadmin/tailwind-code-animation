import { TimelineLite } from "gsap";

const tweenTo = function tweenTo(el, duration, vars, position) {
  return new Promise(resolve => {
    new TimelineLite().to(
      el,
      duration,
      {
        ...vars,
        onComplete: resolve
      },
      position
    );
  });
};

const tweenStaggerTo = function tweenStaggerTo(
  el,
  duration,
  vars,
  stagger,
  position
) {
  return new Promise(resolve => {
    new TimelineLite().staggerTo(
      el,
      duration,
      {
        ...vars
      },
      stagger,
      position,
      resolve
    );
  });
};
export { tweenTo, tweenStaggerTo };
