import React from 'react'
import { Body1, Body2, ButtonStyle, CaptionStyle, H1Style, H2Style, H3Style, H4Style, H5Style, H6Style, OverlineStyle, Subtitle1, Subtitle2 } from '../theme/typographyStyles';

interface ITypography {
  children: React.ReactNode,
  style?: string,
  className?: string,
}

export const H1 = (props: ITypography) => {
  const { children } = props;
  return <h1 {...props} style={H1Style}>{children}</h1>
}

export const H2 = (props: ITypography) => {
  const { children } = props;
  return <h2 {...props} style={H2Style}>{children}</h2>
}

export const H3 = (props: ITypography) => {
  const { children } = props;
  return <h3 {...props} style={H3Style}>{children}</h3>
}

export const H4 = (props: ITypography) => {
  const { children } = props;
  return <h4 {...props} style={H4Style}>{children}</h4>
}

export const H5 = (props: ITypography) => {
  const { children } = props;
  return <h5 {...props} style={H5Style}>{children}</h5>
}

export const H6 = (props: ITypography) => {
  const { children } = props;
  return <h6 {...props} style={H6Style}>{children}</h6>
}

interface IBody extends ITypography {
  variant?: "body1" | "body2"
}

export const Body = ({ variant, children, ...props }: IBody) => {
  const bodyStyle = variant === "body2" ? Body2 : Body1;
  return <span {...props} style={bodyStyle}>{children}</span>
}

interface ISubtitle extends ITypography {
  variant?: "subtitle1" | "subtitle2"
}

export const Subtitle = ({ variant, children, ...props }: ISubtitle) => {
  const subtitleStyle = variant === "subtitle1" ? Subtitle1 : Subtitle2;
  return <span {...props} style={subtitleStyle}>{children}</span>
}

export const Caption = (props: ITypography) => {
  const { children } = props
  return <span {...props} style={CaptionStyle}>{children}</span>
}

export const Label = (props: ITypography) => {
  const  { children } = props;
  return <label {...props} style={OverlineStyle}>{children}</label>
}

export const ButtonText = (props: ITypography) => {
  const { children } = props;
  return <span {...props} style={ButtonStyle}>{children}</span>
}


