import { FC } from 'react'

export const Message: FC<MessageDto> = ({user, message}) => {
  return (
    <li>
     {user}: {message}
    </li>
  )
}