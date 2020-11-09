import gsap from 'gsap'
export const custom = {
  name: 'custom',
  appear: true,
  beforeEnter(el) {
    gsap.set(el.children, {
      scale: 0.5,
      opacity: 0,
    })
  },
  enter(el) {
    gsap.to(el.children, {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      ease: 'elastic',
      stagger: 0.2,
    })
  },
}
