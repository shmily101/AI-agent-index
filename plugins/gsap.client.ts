import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin, Draggable)

  gsap.registerEffect({
    name: "tech4",
    extendTimeline: true,
    effect: function (targets: string[]) {
      let tl = gsap
        .timeline()
        .to(targets[0], {
          duration: 0.5,
          scale: 1,
          yPercent: 0,
        })
        .to(targets[1], {
          duration: 0.5,
          opacity: 1,
        })
        .fromTo(
          targets[2],
          {
            y: 60,
          },
          {
            y: 0,
            opacity: 1,
          }
        )

      if (targets[3]) {
        tl.fromTo(
          targets[3],
          {
            y: 60,
          },
          {
            y: 0,
            autoAlpha: 1,
          }
        )
      }
      tl.to(
        targets[4],
        {
          yPercent: -10,
        },
        "<"
      ).set({}, {}, "+=0.2")

      return tl
    },
  })

  console.log("client ScrollTrigger", ScrollTrigger)

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
      TextPlugin,
    },
  }
})
