export const shouldExcludeProps =
  <TCustomProps extends Record<string, unknown>>(
    customProps: ReadonlyArray<keyof TCustomProps>
  ) =>
  (prop: string): boolean =>
    !customProps.includes(prop)

import styled, { css } from 'styled-components'

export interface SVGProps {
  width: number
  height: number
}

export const withSvg = (Icon: string, width: number, height: number) => {
  const SvgIcon = styled(Icon)<SVGProps>`
    ${({
      width: overrideWidth = width,
      height: overrideHeight = height
    }) => css`
      width: ${overrideWidth};
      height: ${overrideHeight};
    `}
  `

  SvgIcon.defaultProps = {
    width,
    height: height || width
  }

  // SvgIcon.displayName = `Icon(${Icon.name})`

  return SvgIcon
}
