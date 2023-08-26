import { FC } from 'react'

interface Props {
  className?: string
}

const SendIcon: FC<Props> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z' />
  </svg>
)

export { SendIcon }
