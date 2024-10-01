import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin, Draggable)

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
      TextPlugin
    },
  }
})