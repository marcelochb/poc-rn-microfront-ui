import { ITheme } from "@poc/interfaces"

export type IEmptyWrapper = {
  theme: ITheme,
  IconSVG: React.FC<React.SVGProps<SVGSVGElement>>,
  title: string,
  subTitle: string
}
