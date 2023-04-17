import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperButton(props) {
  const { classname } = props
  const swiper = useSwiper()
  return (
    <div className={classname}>
      <button className='btn btn-secondary rounded-full mr-3' onClick={() => swiper.slidePrev()}>Prev</button>
      <button className='btn btn-secondary rounded-full' onClick={() => swiper.slideNext()}>Next</button>
    </div>
  )
}
