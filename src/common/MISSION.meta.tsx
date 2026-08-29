import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { JSX } from 'react';
import { PiCodeFill, PiRepeatBold } from 'react-icons/pi';
import { IoFastFood } from "react-icons/io5";
import { FaBed, FaRepeat } from "react-icons/fa6";
import { BsArrowRepeat } from "react-icons/bs";



export const rotateAnimation = {
  from: {
    rotate: 0
  },
  to: {
    rotate: -360 * 2
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export const rotateBothAnimation = {
  from: {
    rotate: 0,
  },
  to: {
    rotate: 360 * 2,
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export default {
  eat: (
    <AnimateOnScroll config={rotateBothAnimation}>
      <IoFastFood />
    </AnimateOnScroll>
  ),
  sleep: (
    <AnimateOnScroll config={rotateAnimation}>
      <FaBed />
    </AnimateOnScroll>
  ),
  code: (
    <AnimateOnScroll config={rotateBothAnimation}>
      <PiCodeFill />
    </AnimateOnScroll>
  ),
  repeat: (
    <AnimateOnScroll config={rotateAnimation}>
      <BsArrowRepeat />
    </AnimateOnScroll>
  )
} satisfies Record<string, JSX.Element>;
