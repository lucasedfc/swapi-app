import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const style = {
    color: 'red',
    textDecoration: 'underline',
    
}
interface Props {
    text: string,
    href: string
}
export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

  return (
    <Link style={ asPath === href ? style : {}} href={href}>{text}</Link>
  )
}
