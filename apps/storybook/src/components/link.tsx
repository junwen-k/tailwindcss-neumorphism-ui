import { twMerge } from 'tailwind-merge'

export const Link = ({ className, ...props }: React.ComponentProps<'a'>) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge('underline', className)}
    {...props}
  />
)
