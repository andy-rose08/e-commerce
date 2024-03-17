/* eslint-disable simple-import-sort/imports */
'use client'
import classes from './index.module.scss'
import React, { useState, useEffect } from 'react'

const Promotion = () => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7) // Set the target date to 7 days from now

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    // Clear the interval if the component is unmounted
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals Of The Week!</h3>
        <p>
          Get ready for the best deals of the Week! We have a wide range of products on sale, so you
          can find the perfect one for you.📴💹🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
