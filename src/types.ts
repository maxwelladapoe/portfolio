type Shape = 'rounded-full' | 'rounded-lg' | 'rounded-xl'

export interface ProjectImage {
  title: string
  description: string
  year: string
  type: string
  shape?: Shape
  shapeColor: string
  imagePath: string
  link: string
}
