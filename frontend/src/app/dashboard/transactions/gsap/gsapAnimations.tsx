import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const applyGsapScrollAnimations = (tableBody: HTMLElement) => {
  gsap.from(tableBody.children, {
    opacity: 0,
    y: 10,
    stagger: 0.05,
    duration: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: tableBody,
      start: "top bottom-=100",
    },
  });
};
