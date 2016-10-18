import React from 'react'
import { BUBBLES_COLORS } from 'constants'

const CON = BUBBLES_COLORS.CONTINENTS
const COU = BUBBLES_COLORS.COUNTRIES

export default function DesktopLegend(props) {
  return (
    <svg viewBox="0 0 295 213">
      <g>
        <path style={{opacity: 0.1, fill: '#546E7A'}} d="M29.4 54.6c-17.6 0-19.3-8.1-27-20.9l20.2 123.8h1.2c0-2 2.7-5.8 5.6-5.8s5.6 3.8 5.6 5.8h1.3L56.3 32c-.9 12-14 22.6-26.9 22.6z"/>
        <circle style={{fill: 'none', stroke: '#546E7A', strokeWidth: 1}} cx="29.4" cy="27.7" r="27"/>
        <circle style={{fill: 'none', stroke: '#546E7A', strokeWidth: 1}} cx="29.4" cy="157.5" r="6"/>
      </g>

      {props.expanded
        ? (
          <g>
            <circle style={{fill: COU.USA}} cx="102" cy="73" r="5"/>
            <circle style={{fill: COU.EUR}} cx="102" cy="99" r="4.5"/>
            <circle style={{fill: COU.AME}} cx="102" cy="125" r="5"/>
            <circle style={{fill: COU.AFR}} cx="102" cy="151" r="5"/>
            <circle style={{fill: COU.ASIA}} cx="102" cy="177" r="5"/>
            <circle style={{fill: COU.OCE, stroke: '#5D5D5D', strokeWidth: 1}} cx="102" cy="203" r="5"/>

            <path style={{fill: '#546E7A'}} d="M101.4 28.4c0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.5-.6-.1-1.1-.3-1.5-.5s-.7-.4-.8-.7c-.2-.3-.3-.6-.3-.9 0-.6.3-1.1.8-1.5s1.2-.6 2-.6 1.5.2 2 .6c.5.4.8 1 .8 1.7h-1.3c0-.3-.1-.6-.4-.9s-.7-.4-1.1-.4c-.5 0-.8.1-1.1.3s-.4.5-.4.8c0 .3.1.5.4.7.2.2.7.3 1.3.4.6.1 1.1.3 1.5.5.4.2.7.4.9.7.2.3.3.6.3 1 0 .7-.3 1.2-.8 1.6-.5.4-1.2.6-2.1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.2h1.3c0 .4.2.8.5 1 .3.2.7.4 1.3.4.5 0 .9-.1 1.2-.3.2-.2.3-.5.3-.8zm3.7-7.4c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.6.2s-.4-.1-.6-.2c-.2-.1-.2-.3-.2-.5zm1.3 9.3h-1.3v-7.4h1.3v7.4zm3.9-1h4.3v1h-5.9v-.9l4.1-5.4h-4v-1h5.6v.9l-4.1 5.4zm9.4 1.2c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.5 1.4-2.8 1.4zm-.1-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.4-.4-.8-.6-1.3-.6zm15.1 1H129v-1.1h5.7v1.1zm0 2.8H129v-1.1h5.7v1.1zm8.2 2.7h-1.3V19.8h1.3v10.5zm5.8.2c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.7.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.8-.6-1.3-.6zm7.6 4.8l1.8-5.7h1.3l-2.7 7.4h-1l-2.7-7.4h1.3l2 5.7zm8 1.9c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm6.6 6.5h-1.3V19.8h1.3v10.5zm6.6-3.7c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1s.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3s-1.1.5-1.8.5c-1 0-1.8-.3-2.4-1s-.8-1.6-.8-2.8zm1.2.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7-.6 1.4-.6 2.3zm8.4 3.6v-6.4h-1.2v-1h1.2v-.8c0-.8.2-1.4.6-1.8s1-.6 1.8-.6c.3 0 .6 0 .9.1l-.1 1c-.2 0-.4-.1-.7-.1-.4 0-.7.1-1 .4-.2.2-.3.6-.3 1v.8h1.6v1H188v6.4h-1.3zm9.1-9.3c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.6.2s-.4-.1-.6-.2c-.1-.1-.2-.3-.2-.5zm1.4 9.3h-1.3v-7.4h1.3v7.4zm3.9-7.4v.9c.6-.7 1.3-1.1 2.2-1.1 1.6 0 2.4.9 2.4 2.6v4.9h-1.3v-4.9c0-.5-.1-.9-.4-1.2s-.6-.4-1.1-.4c-.4 0-.8.1-1.1.3-.3.2-.6.5-.7.9v5.3h-1.3v-7.4h1.3zm9-1.7V23h1.4v1h-1.4v4.6c0 .3.1.5.2.7s.3.2.6.2c.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5v-4.6h-1.3v-1h1.3v-1.8h1.3zm6.6 9.3c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm8.8.3h-.6c-.8 0-1.4.4-1.7 1.1v5.2h-1.3V23h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1v1.1zm4.8 6.4c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm9.6 4.6c0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.5-.6-.1-1.1-.3-1.5-.5s-.7-.4-.8-.7c-.2-.3-.3-.6-.3-.9 0-.6.3-1.1.8-1.5s1.2-.6 2-.6 1.5.2 2 .6c.5.4.8 1 .8 1.7h-1.3c0-.3-.1-.6-.4-.9s-.7-.4-1.1-.4c-.5 0-.8.1-1.1.3s-.4.5-.4.8c0 .3.1.5.4.7.2.2.7.3 1.3.4.6.1 1.1.3 1.5.5.4.2.7.4.9.7.2.3.3.6.3 1 0 .7-.3 1.2-.8 1.6-.5.4-1.2.6-2.1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.2h1.3c0 .4.2.8.5 1 .3.2.7.4 1.3.4.5 0 .9-.1 1.2-.3.1-.2.3-.5.3-.8zm5.3-7.2V23h1.4v1h-1.4v4.6c0 .3.1.5.2.7s.3.2.6.2c.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5v-4.6h-1.3v-1h1.3v-1.8h1.3zm-120 45.9v6.8c0 .9-.3 1.7-.9 2.3-.6.6-1.4.9-2.4 1h-.3c-1.1 0-2-.3-2.6-.9s-1-1.4-1-2.4v-6.8h1.3v6.7c0 .7.2 1.3.6 1.7.4.4 1 .6 1.7.6s1.3-.2 1.7-.6c.4-.4.6-1 .6-1.7v-6.7h1.3zm5.7 5.5c-1.1-.3-1.9-.7-2.5-1.2-.5-.5-.8-1.1-.8-1.7 0-.8.3-1.4.9-1.9.6-.5 1.4-.8 2.4-.8.7 0 1.3.1 1.8.4.5.3.9.6 1.2 1.1.3.5.4 1 .4 1.5h-1.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5-.6 0-1.2.1-1.5.4-.4.3-.5.7-.5 1.2 0 .4.2.8.5 1 .3.3.9.5 1.8.8.8.2 1.5.5 1.9.8.5.3.8.6 1 1 .2.4.3.8.3 1.3 0 .8-.3 1.5-.9 1.9s-1.5.7-2.5.7c-.7 0-1.3-.1-1.9-.4-.6-.3-1-.6-1.4-1.1-.3-.5-.5-1-.5-1.6h1.3c0 .6.2 1.1.7 1.4.4.3 1 .5 1.8.5.7 0 1.2-.1 1.6-.4.4-.3.6-.7.6-1.2s-.2-.9-.5-1.1-.8-.4-1.7-.7zm11.6 1.8h-4.2L137 77h-1.4l3.8-10h1.1l3.8 10H143l-.9-2.6zm-3.8-1h3.4l-1.7-4.7-1.7 4.7zm-12.8 56h-1.3l-5-7.7v7.7h-1.3v-10h1.3l5 7.7v-7.7h1.3v10zm2.5-3.7c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1 .6.7.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3-.5.3-1.1.5-1.8.5-1 0-1.8-.3-2.4-1-.5-.7-.8-1.6-.8-2.8zm1.2.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7c-.4.7-.6 1.4-.6 2.3zm11.4-2.6h-.6c-.8 0-1.4.4-1.7 1.1v5.2H137V122h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1v1.2zm3.9-3v1.8h1.4v1h-1.4v4.6c0 .3.1.5.2.7.1.1.3.2.6.2.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5V123h-1.3v-1h1.3v-1.8h1.3zm4.8 2.7c.6-.7 1.3-1 2.2-1 1.6 0 2.4.9 2.4 2.6v4.9h-1.3v-4.9c0-.5-.1-.9-.4-1.2-.2-.3-.6-.4-1.1-.4-.4 0-.8.1-1.1.3s-.6.5-.7.9v5.3H148v-10.5h1.3v4zm11.1 3.9c0-.5.1-.9.4-1.3.3-.4.8-.9 1.5-1.4-.4-.5-.7-1-.9-1.3s-.2-.7-.2-1c0-.8.2-1.3.7-1.8.4-.4 1.1-.6 1.8-.6s1.2.2 1.7.6c.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.1-.2.3-.6.7-1.1 1.1l-.7.5 2.2 2.6c.3-.6.5-1.3.5-2h1.1c0 1.2-.3 2.1-.8 2.9l1.4 1.7h-1.5l-.7-.8c-.3.3-.7.5-1.2.7-.5.2-.9.2-1.4.2-1 0-1.8-.3-2.3-.8-.7-.4-.9-1.1-.9-1.9zm3.2 1.7c.7 0 1.3-.3 1.8-.8l-2.4-2.9-.2.2c-.8.6-1.1 1.1-1.1 1.7 0 .5.2 1 .5 1.3.3.4.8.5 1.4.5zm-1.2-6.8c0 .4.3 1 .8 1.6l.8-.6c.3-.2.5-.4.6-.6s.2-.4.2-.7c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.9-.3s-.7.1-.9.4-.3.6-.3 1zm14.9 3.3c-1.1-.3-1.9-.7-2.5-1.2-.5-.5-.8-1.1-.8-1.7 0-.8.3-1.4.9-1.9.6-.5 1.4-.8 2.4-.8.7 0 1.3.1 1.8.4.5.3.9.6 1.2 1.1.3.5.4 1 .4 1.5h-1.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5-.6 0-1.2.1-1.5.4-.4.3-.5.7-.5 1.2 0 .4.2.8.5 1 .3.3.9.5 1.8.8.8.2 1.5.5 1.9.8.5.3.8.6 1 1 .2.4.3.8.3 1.3 0 .8-.3 1.5-.9 1.9s-1.5.7-2.5.7c-.7 0-1.3-.1-1.9-.4-.6-.3-1-.6-1.4-1.1-.3-.5-.5-1-.5-1.6h1.3c0 .6.2 1.1.7 1.4.4.3 1 .5 1.8.5.7 0 1.2-.1 1.6-.4.4-.3.6-.7.6-1.2s-.2-.9-.5-1.1-.8-.4-1.7-.7zm5.6.7c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1 .6.7.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3-.5.3-1.1.5-1.8.5-1 0-1.8-.3-2.4-1-.5-.7-.8-1.6-.8-2.8zm1.2.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7c-.4.7-.6 1.4-.6 2.3zm12.3 2.9c-.5.6-1.2.9-2.2.9-.8 0-1.4-.2-1.8-.7-.4-.5-.6-1.1-.6-2V122h1.3v4.8c0 1.1.5 1.7 1.4 1.7 1 0 1.6-.4 1.9-1.1V122h1.3v7.4h-1.2l-.1-.7zm5.6-8.5v1.8h1.4v1H202v4.6c0 .3.1.5.2.7.1.1.3.2.6.2.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5V123h-1.3v-1h1.3v-1.8h1.3zm4.8 2.7c.6-.7 1.3-1 2.2-1 1.6 0 2.4.9 2.4 2.6v4.9h-1.3v-4.9c0-.5-.1-.9-.4-1.2-.2-.3-.6-.4-1.1-.4-.4 0-.8.1-1.1.3s-.6.5-.7.9v5.3h-1.3v-10.5h1.3v4zm17 3.9h-4.2l-.9 2.6h-1.4l3.8-10h1.1l3.8 10h-1.3l-.9-2.6zm-3.7-1h3.4l-1.7-4.7-1.7 4.7zm9.1-3.8v.8c.5-.6 1.3-1 2.2-1 1 0 1.7.4 2.1 1.2.2-.4.6-.6 1-.9.4-.2.9-.3 1.4-.3 1.6 0 2.4.9 2.5 2.6v5h-1.3v-4.9c0-.5-.1-.9-.4-1.2-.2-.3-.6-.4-1.2-.4-.5 0-.9.1-1.2.4s-.5.7-.5 1.1v4.9h-1.3v-4.8c0-1.1-.5-1.6-1.6-1.6-.8 0-1.4.4-1.7 1.1v5.4H228V122h1.2zm14.8 7.6c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1 .5.6.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.5 1.4-2.8 1.4zm-.1-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.4-.4-.8-.6-1.3-.6zm8.7.3h-.6c-.8 0-1.4.4-1.7 1.1v5.2H249V122h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1v1.2zm1.9-3.1c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5-.3.2-.6.2-.4-.1-.6-.2c-.1-.1-.2-.3-.2-.5zm1.4 9.3h-1.3V122h1.3v7.4zm5.7-.9c.5 0 .8-.1 1.2-.4.3-.3.5-.6.6-1h1.2c0 .4-.2.8-.4 1.2-.3.4-.6.7-1.1.9-.4.2-.9.3-1.4.3-1 0-1.8-.3-2.4-1-.6-.7-.9-1.6-.9-2.8v-.2c0-.7.1-1.4.4-1.9s.6-1 1.1-1.3c.5-.3 1.1-.5 1.8-.5.8 0 1.5.2 2.1.7.5.5.8 1.1.9 1.9h-1.2c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5-.6 0-1.1.2-1.5.7-.4.5-.5 1.1-.5 2v.2c0 .9.2 1.5.5 2 .1.7.6.9 1.3.9zm9.6.9c-.1-.1-.1-.4-.2-.8-.6.6-1.3.9-2.1.9-.7 0-1.3-.2-1.8-.6-.5-.4-.7-.9-.7-1.6 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.5-.6h1.2v-.6c0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.2-.4s-.8.1-1.1.3c-.3.2-.5.5-.5.8h-1.3c0-.4.1-.7.4-1.1.3-.3.6-.6 1.1-.8.4-.2.9-.3 1.5-.3.9 0 1.5.2 2 .6.5.4.7 1 .8 1.8v3.4c0 .7.1 1.2.3 1.6v.1h-1.4zm-2.1-.9c.4 0 .8-.1 1.1-.3.4-.2.6-.5.8-.8v-1.5h-1c-1.5 0-2.3.5-2.3 1.4 0 .4.1.7.4.9.2.2.6.3 1 .3zM123.3 153h-4.2l-.9 2.6h-1.4l3.8-10h1.1l3.8 10h-1.3l-.9-2.6zm-3.8-1h3.4l-1.7-4.7-1.7 4.7zm8.6 3.6v-6.4h-1.2v-1h1.2v-.8c0-.8.2-1.4.6-1.8.4-.4 1-.6 1.8-.6.3 0 .6 0 .9.1l-.1 1c-.2 0-.4-.1-.7-.1-.4 0-.7.1-1 .4-.2.2-.3.6-.3 1v.8h1.6v1h-1.6v6.4h-1.2zm8.5-6.2h-.6c-.8 0-1.4.4-1.7 1.1v5.2H133v-7.4h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1v1.1zm1.9-3.1c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5-.3.2-.6.2-.4-.1-.6-.2c-.2-.1-.2-.3-.2-.5zm1.3 9.3h-1.3v-7.4h1.3v7.4zm5.7-.9c.5 0 .8-.1 1.2-.4s.5-.6.6-1h1.2c0 .4-.2.8-.4 1.2s-.6.7-1.1.9c-.4.2-.9.3-1.4.3-1 0-1.8-.3-2.4-1-.6-.7-.9-1.6-.9-2.8v-.2c0-.7.1-1.4.4-1.9s.6-1 1.1-1.3c.5-.3 1.1-.5 1.8-.5.8 0 1.5.2 2.1.7.5.5.8 1.1.9 1.9h-1.2c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5-.6 0-1.1.2-1.5.7-.4.5-.5 1.1-.5 2v.2c0 .9.2 1.5.5 2 .2.7.7.9 1.3.9zm9.6.9c-.1-.1-.1-.4-.2-.8-.6.6-1.3.9-2.1.9-.7 0-1.3-.2-1.8-.6-.5-.4-.7-.9-.7-1.6 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.5-.6h1.2v-.6c0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.2-.4s-.8.1-1.1.3c-.3.2-.5.5-.5.8h-1.3c0-.4.1-.7.4-1.1.3-.3.6-.6 1.1-.8.4-.2.9-.3 1.5-.3.9 0 1.5.2 2 .6.5.4.7 1 .8 1.8v3.4c0 .7.1 1.2.3 1.6v.1h-1.4zm-2.1-.9c.4 0 .8-.1 1.1-.3s.6-.5.8-.8V152h-1c-1.5 0-2.3.5-2.3 1.4 0 .4.1.7.4.9.3.3.6.4 1 .4zm-29.7 24.5h-4.2l-.9 2.6h-1.4l3.8-10h1.1l3.8 10h-1.3l-.9-2.6zm-3.8-1h3.4l-1.7-4.7-1.7 4.7zm12.3 1.7c0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.5-.6-.1-1.1-.3-1.5-.5-.4-.2-.7-.4-.8-.7-.2-.3-.3-.6-.3-.9 0-.6.3-1.1.8-1.5.5-.4 1.2-.6 2-.6s1.5.2 2 .6c.5.4.8 1 .8 1.7h-1.3c0-.3-.1-.6-.4-.9-.3-.2-.7-.4-1.1-.4-.5 0-.8.1-1.1.3-.3.2-.4.5-.4.8 0 .3.1.5.4.7.2.2.7.3 1.3.4.6.1 1.1.3 1.5.5.4.2.7.4.9.7.2.3.3.6.3 1 0 .7-.3 1.2-.8 1.6-.5.4-1.2.6-2.1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.2h1.3c0 .4.2.8.5 1 .3.2.7.4 1.3.4.5 0 .9-.1 1.2-.3.1-.3.3-.5.3-.8zm3.6-7.4c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5-.3.2-.6.2-.4-.1-.6-.2c-.2-.2-.2-.3-.2-.5zm1.4 9.3h-1.3v-7.4h1.3v7.4zm7.2 0c-.1-.1-.1-.4-.2-.8-.6.6-1.3.9-2.1.9-.7 0-1.3-.2-1.8-.6-.5-.4-.7-.9-.7-1.6 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.5-.6h1.2v-.6c0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.2-.4s-.8.1-1.1.3c-.3.2-.5.5-.5.8h-1.3c0-.4.1-.7.4-1.1.3-.3.6-.6 1.1-.8.4-.2.9-.3 1.5-.3.9 0 1.5.2 2 .6.5.4.7 1 .8 1.8v3.4c0 .7.1 1.2.3 1.6v.1H144zm-2.1-.9c.4 0 .8-.1 1.1-.3s.6-.5.8-.8v-1.5h-1c-1.5 0-2.3.5-2.3 1.4 0 .4.1.7.4.9.3.2.6.3 1 .3zm-16.4 22.5c0 1-.2 1.8-.5 2.6-.3.7-.8 1.3-1.4 1.7s-1.3.6-2.1.6-1.5-.2-2.1-.6c-.6-.4-1.1-.9-1.4-1.6-.3-.7-.5-1.5-.5-2.5v-.7c0-1 .2-1.8.5-2.5s.8-1.3 1.4-1.7c.6-.4 1.3-.6 2.1-.6s1.5.2 2.1.6c.6.4 1.1.9 1.4 1.7s.5 1.6.5 2.6v.4zm-1.3-.7c0-1.2-.2-2.1-.7-2.7-.5-.6-1.1-.9-2-.9-.8 0-1.5.3-2 .9-.5.6-.7 1.5-.7 2.6v.7c0 1.1.2 2 .7 2.7.5.7 1.1 1 2 1 .8 0 1.5-.3 2-.9.5-.6.7-1.5.7-2.7v-.7zm6.7 4.4c.5 0 .8-.1 1.2-.4s.5-.6.6-1h1.2c0 .4-.2.8-.4 1.2s-.6.7-1.1.9c-.4.2-.9.3-1.4.3-1 0-1.8-.3-2.4-1-.6-.7-.9-1.6-.9-2.8v-.2c0-.7.1-1.4.4-1.9s.6-1 1.1-1.3c.5-.3 1.1-.5 1.8-.5.8 0 1.5.2 2.1.7.5.5.8 1.1.9 1.9h-1.2c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5-.6 0-1.1.2-1.5.7-.4.5-.5 1.1-.5 2v.2c0 .9.2 1.5.5 2 .2.7.7.9 1.3.9zm8.1 1.1c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1 .5.6.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.5 1.4-2.8 1.4zm-.1-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.4-.4-.8-.6-1.3-.6zm9.8 6.5c-.1-.1-.1-.4-.2-.8-.6.6-1.3.9-2.1.9-.7 0-1.3-.2-1.8-.6-.5-.4-.7-.9-.7-1.6 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.5-.6h1.2v-.5c0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.2-.4s-.8.1-1.1.3c-.3.2-.5.5-.5.8H144c0-.4.1-.7.4-1.1.3-.3.6-.6 1.1-.8.4-.2.9-.3 1.5-.3.9 0 1.5.2 2 .6.5.4.7 1 .8 1.8v3.4c0 .7.1 1.2.3 1.6v.1h-1.4zm-2.1-.9c.4 0 .8-.1 1.1-.3s.6-.5.8-.8v-1.5h-1c-1.5 0-2.3.5-2.3 1.4 0 .4.1.7.4.9.2.1.5.3 1 .3zm7-6.5v.9c.6-.7 1.3-1.1 2.2-1.1 1.6 0 2.4.9 2.4 2.6v4.9H157V203c0-.5-.1-.9-.4-1.2-.2-.3-.6-.4-1.1-.4-.4 0-.8.1-1.1.3s-.6.5-.7.9v5.3h-1.3v-7.4h1.2zm7.2-1.9c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5-.3.2-.6.2-.4-.1-.6-.2c-.1-.2-.2-.3-.2-.5zm1.4 9.3h-1.3v-7.4h1.3v7.4zm7.3 0c-.1-.1-.1-.4-.2-.8-.6.6-1.3.9-2.1.9-.7 0-1.3-.2-1.8-.6-.5-.4-.7-.9-.7-1.6 0-.8.3-1.4.9-1.8.6-.4 1.4-.6 2.5-.6h1.2v-.5c0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.2-.4s-.8.1-1.1.3c-.3.2-.5.5-.5.8h-1.3c0-.4.1-.7.4-1.1.3-.3.6-.6 1.1-.8.4-.2.9-.3 1.5-.3.9 0 1.5.2 2 .6.5.4.7 1 .8 1.8v3.4c0 .7.1 1.2.3 1.6v.1h-1.4zm-2.1-.9c.4 0 .8-.1 1.1-.3s.6-.5.8-.8v-1.5h-1c-1.5 0-2.3.5-2.3 1.4 0 .4.1.7.4.9.2.1.6.3 1 .3z M123.4 98.6h-4.3v3.5h5v1.1h-6.3v-10h6.3v1.1h-4.9v3.2h4.3v1.1zm7.3 3.9c-.5.6-1.2.9-2.2.9-.8 0-1.4-.2-1.8-.7-.4-.5-.6-1.1-.6-2v-4.8h1.3v4.8c0 1.1.5 1.7 1.4 1.7 1 0 1.6-.4 1.9-1.1v-5.4h1.3v7.4h-1.2l-.1-.8zm7.5-5.5h-.6c-.8 0-1.4.4-1.7 1.1v5.2h-1.3v-7.4h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1V97zm1.3 2.5c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1 .6.7.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3-.5.3-1.1.5-1.8.5-1 0-1.8-.3-2.4-1-.4-.7-.8-1.6-.8-2.8zm1.3.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7c-.4.7-.6 1.4-.6 2.3zm14 0c0 1.1-.3 2-.8 2.7-.5.7-1.2 1-2.1 1-.9 0-1.6-.3-2.1-.9v3.6h-1.3V95.8h1.2l.1.8c.5-.6 1.2-1 2.1-1 .9 0 1.6.3 2.1 1s.8 1.6.8 2.8v.2zm-1.2-.1c0-.8-.2-1.5-.5-2-.4-.5-.8-.7-1.5-.7-.8 0-1.3.3-1.7 1v3.5c.4.7 1 1 1.7 1 .6 0 1.1-.2 1.4-.7.4-.5.6-1.2.6-2.1zm6.6 3.9c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1 .5.6.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6z"/>
          </g>
        ) : (
          <g>
            <circle style={{fill: CON.USA}} cx="102" cy="73.1" r="5.2"/>
            <circle style={{fill: CON.OTH}} cx="102" cy="99" r="5.2"/>

            <path style={{fill: '#546E7A'}} d="M101.4 28.4c0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.5-.6-.1-1.1-.3-1.5-.5s-.7-.4-.8-.7c-.2-.3-.3-.6-.3-.9 0-.6.3-1.1.8-1.5s1.2-.6 2-.6 1.5.2 2 .6c.5.4.8 1 .8 1.7h-1.3c0-.3-.1-.6-.4-.9s-.7-.4-1.1-.4c-.5 0-.8.1-1.1.3s-.4.5-.4.8c0 .3.1.5.4.7.2.2.7.3 1.3.4.6.1 1.1.3 1.5.5.4.2.7.4.9.7.2.3.3.6.3 1 0 .7-.3 1.2-.8 1.6-.5.4-1.2.6-2.1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.2h1.3c0 .4.2.8.5 1 .3.2.7.4 1.3.4.5 0 .9-.1 1.2-.3.2-.2.3-.5.3-.8zm3.7-7.4c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.6.2s-.4-.1-.6-.2c-.2-.1-.2-.3-.2-.5zm1.3 9.3h-1.3v-7.4h1.3v7.4zm3.9-1h4.3v1h-5.9v-.9l4.1-5.4h-4v-1h5.6v.9l-4.1 5.4zm9.4 1.2c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.5 1.4-2.8 1.4zm-.1-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.4-.4-.8-.6-1.3-.6zm15.1 1H129v-1.1h5.7v1.1zm0 2.8H129v-1.1h5.7v1.1zm8.2 2.7h-1.3V19.8h1.3v10.5zm5.8.2c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.7.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.8-.6-1.3-.6zm7.6 4.8l1.8-5.7h1.3l-2.7 7.4h-1l-2.7-7.4h1.3l2 5.7zm8 1.9c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm6.6 6.5h-1.3V19.8h1.3v10.5zm6.6-3.7c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1s.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3s-1.1.5-1.8.5c-1 0-1.8-.3-2.4-1s-.8-1.6-.8-2.8zm1.2.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7-.6 1.4-.6 2.3zm8.4 3.6v-6.4h-1.2v-1h1.2v-.8c0-.8.2-1.4.6-1.8s1-.6 1.8-.6c.3 0 .6 0 .9.1l-.1 1c-.2 0-.4-.1-.7-.1-.4 0-.7.1-1 .4-.2.2-.3.6-.3 1v.8h1.6v1H188v6.4h-1.3zm9.1-9.3c0-.2.1-.4.2-.5.1-.1.3-.2.6-.2s.4.1.6.2c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.6.2s-.4-.1-.6-.2c-.1-.1-.2-.3-.2-.5zm1.4 9.3h-1.3v-7.4h1.3v7.4zm3.9-7.4v.9c.6-.7 1.3-1.1 2.2-1.1 1.6 0 2.4.9 2.4 2.6v4.9h-1.3v-4.9c0-.5-.1-.9-.4-1.2s-.6-.4-1.1-.4c-.4 0-.8.1-1.1.3-.3.2-.6.5-.7.9v5.3h-1.3v-7.4h1.3zm9-1.7V23h1.4v1h-1.4v4.6c0 .3.1.5.2.7s.3.2.6.2c.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5v-4.6h-1.3v-1h1.3v-1.8h1.3zm6.6 9.3c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm8.8.3h-.6c-.8 0-1.4.4-1.7 1.1v5.2h-1.3V23h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1v1.1zm4.8 6.4c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1s.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm9.6 4.6c0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.5-.6-.1-1.1-.3-1.5-.5s-.7-.4-.8-.7c-.2-.3-.3-.6-.3-.9 0-.6.3-1.1.8-1.5s1.2-.6 2-.6 1.5.2 2 .6c.5.4.8 1 .8 1.7h-1.3c0-.3-.1-.6-.4-.9s-.7-.4-1.1-.4c-.5 0-.8.1-1.1.3s-.4.5-.4.8c0 .3.1.5.4.7.2.2.7.3 1.3.4.6.1 1.1.3 1.5.5.4.2.7.4.9.7.2.3.3.6.3 1 0 .7-.3 1.2-.8 1.6-.5.4-1.2.6-2.1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.2h1.3c0 .4.2.8.5 1 .3.2.7.4 1.3.4.5 0 .9-.1 1.2-.3.1-.2.3-.5.3-.8zm5.3-7.2V23h1.4v1h-1.4v4.6c0 .3.1.5.2.7s.3.2.6.2c.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5v-4.6h-1.3v-1h1.3v-1.8h1.3zm-120 45.9v6.8c0 .9-.3 1.7-.9 2.3-.6.6-1.4.9-2.4 1h-.3c-1.1 0-2-.3-2.6-.9s-1-1.4-1-2.4v-6.8h1.3v6.7c0 .7.2 1.3.6 1.7.4.4 1 .6 1.7.6s1.3-.2 1.7-.6c.4-.4.6-1 .6-1.7v-6.7h1.3zm5.7 5.5c-1.1-.3-1.9-.7-2.5-1.2-.5-.5-.8-1.1-.8-1.7 0-.8.3-1.4.9-1.9.6-.5 1.4-.8 2.4-.8.7 0 1.3.1 1.8.4.5.3.9.6 1.2 1.1.3.5.4 1 .4 1.5h-1.3c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5-.6 0-1.2.1-1.5.4-.4.3-.5.7-.5 1.2 0 .4.2.8.5 1 .3.3.9.5 1.8.8.8.2 1.5.5 1.9.8.5.3.8.6 1 1 .2.4.3.8.3 1.3 0 .8-.3 1.5-.9 1.9s-1.5.7-2.5.7c-.7 0-1.3-.1-1.9-.4-.6-.3-1-.6-1.4-1.1-.3-.5-.5-1-.5-1.6h1.3c0 .6.2 1.1.7 1.4.4.3 1 .5 1.8.5.7 0 1.2-.1 1.6-.4.4-.3.6-.7.6-1.2s-.2-.9-.5-1.1-.8-.4-1.7-.7zm11.6 1.8h-4.2L137 77h-1.4l3.8-10h1.1l3.8 10H143l-.9-2.6zm-3.8-1h3.4l-1.7-4.7-1.7 4.7z M121.5 99.2h-2.3v4h-1.3v-10h3.3c1.1 0 2 .3 2.6.8.6.5.9 1.3.9 2.2 0 .6-.2 1.2-.5 1.6-.3.5-.8.8-1.4 1l2.3 4.2v.1h-1.4l-2.2-3.9zm-2.4-1.1h2c.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5h-2v3.8zm10.9 5.3c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1 .5.6.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.5 1.4-2.8 1.4zm-.1-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.4-.4-.8-.6-1.3-.6zm9.5 4.6c0-.3-.1-.6-.4-.8-.3-.2-.7-.4-1.3-.5-.6-.1-1.1-.3-1.5-.5-.4-.2-.7-.4-.8-.7-.2-.3-.3-.6-.3-.9 0-.6.3-1.1.8-1.5.5-.4 1.2-.6 2-.6s1.5.2 2 .6c.5.4.8 1 .8 1.7h-1.3c0-.3-.1-.6-.4-.9-.3-.2-.7-.4-1.1-.4-.5 0-.8.1-1.1.3-.3.2-.4.5-.4.8 0 .3.1.5.4.7.2.2.7.3 1.3.4.6.1 1.1.3 1.5.5.4.2.7.4.9.7.2.3.3.6.3 1 0 .7-.3 1.2-.8 1.6-.5.4-1.2.6-2.1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.2h1.3c0 .4.2.8.5 1 .3.2.7.4 1.3.4.5 0 .9-.1 1.2-.3.1-.2.3-.5.3-.8zm5.3-7.2v1.8h1.4v1h-1.4v4.6c0 .3.1.5.2.7.1.1.3.2.6.2.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5v-4.6h-1.3v-1h1.3V94h1.3zm7.4 5.4c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1 .6.7.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3-.5.3-1.1.5-1.8.5-1 0-1.8-.3-2.4-1-.5-.7-.8-1.6-.8-2.8zm1.3.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7c-.5.7-.6 1.4-.6 2.3zm8.3 3.6v-6.4h-1.2v-1h1.2V95c0-.8.2-1.4.6-1.8.4-.4 1-.6 1.8-.6.3 0 .6 0 .9.1l-.1 1c-.2 0-.4-.1-.7-.1-.4 0-.7.1-1 .4s-.3.6-.3 1v.8h1.6v1H163v6.4h-1.3zm10.8-9.1v1.8h1.4v1h-1.4v4.6c0 .3.1.5.2.7.1.1.3.2.6.2.1 0 .3 0 .6-.1v1c-.3.1-.7.1-1 .1-.6 0-1-.2-1.3-.5s-.4-.8-.4-1.5v-4.6h-1.3v-1h1.3V94h1.3zm4.9 2.6c.6-.7 1.3-1 2.2-1 1.6 0 2.4.9 2.4 2.6v4.9h-1.3v-4.9c0-.5-.1-.9-.4-1.2-.2-.3-.6-.4-1.1-.4-.4 0-.8.1-1.1.3s-.6.5-.7.9v5.3h-1.3V92.7h1.3v4zm10.2 6.7c-1 0-1.8-.3-2.4-1-.6-.7-.9-1.5-.9-2.6v-.2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.4.5-.3 1-.5 1.6-.5 1 0 1.7.3 2.2 1 .5.6.8 1.5.8 2.7v.5h-5c0 .7.2 1.3.6 1.8.4.4.9.7 1.6.7.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7l.8.6c-.6.9-1.6 1.4-2.8 1.4zm-.2-6.7c-.5 0-.9.2-1.3.6-.3.4-.6.9-.6 1.6h3.7v-.1c0-.6-.2-1.1-.5-1.5-.3-.4-.7-.6-1.3-.6zm15.9 4.8l1.4-5.7h1.3l-2.2 7.4h-1l-1.8-5.6-1.8 5.6h-1l-2.1-7.4h1.3l1.5 5.5 1.7-5.5h1l1.7 5.7zm4.4-2c0-.7.1-1.4.4-2 .3-.6.7-1 1.2-1.3.5-.3 1.1-.5 1.7-.5 1 0 1.8.3 2.4 1 .6.7.9 1.6.9 2.8v.1c0 .7-.1 1.4-.4 1.9-.3.6-.7 1-1.2 1.3-.5.3-1.1.5-1.8.5-1 0-1.8-.3-2.4-1-.5-.7-.8-1.6-.8-2.8zm1.3.1c0 .8.2 1.5.6 2 .4.5.9.7 1.5.7s1.2-.3 1.5-.8c.4-.5.6-1.2.6-2.1 0-.8-.2-1.5-.6-2-.4-.5-.9-.8-1.5-.8s-1.1.2-1.5.7c-.5.7-.6 1.4-.6 2.3zm11.3-2.6h-.6c-.8 0-1.4.4-1.7 1.1v5.2h-1.3v-7.4h1.2v.9c.4-.7 1-1 1.8-1 .2 0 .4 0 .6.1V97zm3.2 6.2h-1.3V92.7h1.3v10.5zm2.4-3.7c0-1.1.3-2 .8-2.7s1.2-1 2.1-1c.9 0 1.6.3 2.1.9v-3.9h1.3v10.5H231l-.1-.8c-.5.6-1.2.9-2.1.9-.9 0-1.6-.4-2.1-1.1-.5-.7-.8-1.6-.8-2.8zm1.3.1c0 .8.2 1.5.5 2s.8.7 1.4.7c.8 0 1.4-.4 1.8-1.1v-3.4c-.4-.7-1-1-1.7-1-.6 0-1.1.2-1.4.7s-.6 1.2-.6 2.1z"/>
          </g>
      )}
    </svg>
  )
}

DesktopLegend.propTypes = {
  expanded: React.PropTypes.bool,
}