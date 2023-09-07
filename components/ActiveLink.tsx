import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const style = {
    color: '#2475FB',
    textDecoration: 'underline',
    
}
export const ActiveLink = ({ text, href }) => {

    const { asPath } = useRouter();

  return (
    <Link style={ asPath === href ? style : {}} href={href}>{text}</Link>
  )
}
