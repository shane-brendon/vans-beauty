import React from 'react'
import styles from './testimonials.module.scss'
import Image from 'next/image'

function Testiamonials() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.text}>
          <div>
            <h5 className="tags">Testimonial</h5>
          </div>
          <h2 className="block_title">What Our Costumer Say
          </h2>
        </div>
        <div>
          <Image src={"/getting-nails-done.jpg"} width={530} height={563} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Testiamonials
