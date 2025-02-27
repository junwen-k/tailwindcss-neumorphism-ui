import { twMerge } from 'tailwind-merge'

interface PlaygroundProps {
  /**
   * Direction of the light source casting to the element.
   */
  lightSource?: 'tl' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l'
  /**
   * Distance between the surface and protruded / dented element.
   */
  distance?: 'sm' | 'DEFAULT' | 'md' | 'lg' | 'xl' | '2xl'
  /**
   * Type of shadow.
   */
  type?: 'protrude' | 'dent'
  /**
   * The type of the surface curvature.
   */
  curvature?: 'concave' | 'convex' | 'flat'
}

export const Playground = ({
  lightSource = 'tl',
  distance = 'DEFAULT',
  type = 'protrude',
  curvature = 'flat',
}: PlaygroundProps) => (
  <div
    className={twMerge(
      'size-40 rounded-2xl transition',
      type === 'protrude' && distance === 'sm' && 'nm-protrude-sm',
      type === 'protrude' && distance === 'DEFAULT' && 'nm-protrude',
      type === 'protrude' && distance === 'md' && 'nm-protrude-md',
      type === 'protrude' && distance === 'lg' && 'nm-protrude-lg',
      type === 'protrude' && distance === 'xl' && 'nm-protrude-xl',
      type === 'protrude' && distance === '2xl' && 'nm-protrude-2xl',
      type === 'dent' && distance === 'sm' && 'nm-dent-sm',
      type === 'dent' && distance === 'DEFAULT' && 'nm-dent',
      type === 'dent' && distance === 'md' && 'nm-dent-md',
      type === 'dent' && distance === 'lg' && 'nm-dent-lg',
      type === 'dent' && distance === 'xl' && 'nm-dent-xl',
      type === 'dent' && distance === '2xl' && 'nm-dent-2xl',
      lightSource === 'tl' && 'nm-light-source-tl',
      lightSource === 't' && 'nm-light-source-t',
      lightSource === 'tr' && 'nm-light-source-tr',
      lightSource === 'r' && 'nm-light-source-r',
      lightSource === 'br' && 'nm-light-source-br',
      lightSource === 'b' && 'nm-light-source-b',
      lightSource === 'bl' && 'nm-light-source-bl',
      lightSource === 'l' && 'nm-light-source-l',
      // top-left
      lightSource === 'tl' &&
        curvature === 'convex' &&
        'bg-linear-to-br from-stone-100 to-stone-300',
      lightSource === 'tl' &&
        curvature === 'concave' &&
        'bg-linear-to-br from-stone-300 to-stone-100',
      // top
      lightSource === 't' && curvature === 'convex' && 'bg-linear-to-b from-stone-100 to-stone-300',
      lightSource === 't' &&
        curvature === 'concave' &&
        'bg-linear-to-b from-stone-300 to-stone-100',
      // top-right
      lightSource === 'tr' &&
        curvature === 'convex' &&
        'bg-linear-to-bl from-stone-100 to-stone-300',
      lightSource === 'tr' &&
        curvature === 'concave' &&
        'bg-linear-to-bl from-stone-300 to-stone-100',
      // right
      lightSource === 'r' && curvature === 'convex' && 'bg-linear-to-l from-stone-100 to-stone-300',
      lightSource === 'r' &&
        curvature === 'concave' &&
        'bg-linear-to-l from-stone-300 to-stone-100',
      // bottom-right
      lightSource === 'br' &&
        curvature === 'convex' &&
        'bg-linear-to-tl from-stone-100 to-stone-300',
      lightSource === 'br' &&
        curvature === 'concave' &&
        'bg-linear-to-tl from-stone-300 to-stone-100',
      // bottom
      lightSource === 'b' && curvature === 'convex' && 'bg-linear-to-t from-stone-100 to-stone-300',
      lightSource === 'b' &&
        curvature === 'concave' &&
        'bg-linear-to-t from-stone-300 to-stone-100',
      // bottom-left
      lightSource === 'bl' &&
        curvature === 'convex' &&
        'bg-linear-to-tr from-stone-100 to-stone-300',
      lightSource === 'bl' &&
        curvature === 'concave' &&
        'bg-linear-to-tr from-stone-300 to-stone-100',
      // left
      lightSource === 'l' && curvature === 'convex' && 'bg-linear-to-r from-stone-100 to-stone-300',
      lightSource === 'l' && curvature === 'concave' && 'bg-linear-to-r from-stone-300 to-stone-100'
    )}
  />
)
