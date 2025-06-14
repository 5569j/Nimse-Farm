
// Animation using GSAP
document.addEventListener('DOMContentLoaded', () => {
  gsap.from("header", { y: -50, opacity: 0, duration: 1 });
  gsap.from(".hero img", { scale: 0, duration: 1.5, delay: 0.5 });
  gsap.from(".gallery .images img", { x: -100, opacity: 0, duration: 1, stagger: 0.2, delay: 1 });
  gsap.from(".harvest .images img", { x: 100, opacity: 0, duration: 1, stagger: 0.2, delay: 1.5 });
});
