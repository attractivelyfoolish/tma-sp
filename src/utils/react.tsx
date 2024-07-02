import styled, { css } from 'styled-components'

export const shouldExcludeProps =
  <TCustomProps extends Record<string, unknown>>(
    customProps: ReadonlyArray<keyof TCustomProps>
  ) =>
  (prop: string): boolean =>
    !customProps.includes(prop)

export interface SVGProps {
  width?: number
  height?: number
}

export const withSvg = (
  Icon: React.ExoticComponent | string,
  width?: number,
  height?: number
) => {
  const SvgIcon = styled(Icon).withConfig({
    shouldForwardProp: shouldExcludeProps(['width', 'height'])
  })<SVGProps>`
    ${({
      width: overrideWidth = width,
      height: overrideHeight = height
    }) => css`
      width: ${overrideWidth ? `${overrideWidth}px` : `unset`};
      height: ${overrideHeight ? `${overrideHeight}px` : `unset`};
    `}
  `

  SvgIcon.defaultProps = {
    width,
    height: height || width
  }

  SvgIcon.displayName = `StyledIcon`

  return SvgIcon
}
