import { ITheme } from "@poc/theme"

export type IEmptyWrapper = {
  theme: ITheme,
  IconSVG: React.FC<React.SVGProps<SVGSVGElement>>,
  title: string,
  subTitle: string
}
