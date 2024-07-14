
const fontFamily = {
  Montserrat: "Montserrat, san-serif",
  Raleway: "Raleway, sans-serif"
}

const baseStyles = (fontSize: string, fontWeight: number, color = 'rgba(0, 0, 0, 0.87)') => ({
  fontSize,
  fontWeight,
  fontFamily: fontFamily.Montserrat,
  color: color,
});

export const H1Style =  {
  ...baseStyles("6rem", 800)
}

export const H2Style =  {
  ...baseStyles("4rem", 600)
}

export const H3Style =  {
  ...baseStyles("2.94rem", 600)
}

export const H4Style =  {
  ...baseStyles("2.125rem", 600)
}

export const H5Style =  {
  ...baseStyles("1.5rem", 500)
}

export const H6Style =  {
  ...baseStyles("1.25rem", 700),
  fontFamily: fontFamily.Raleway
}

export const Body1 =  {
  ...baseStyles("1.125rem", 500, "rgba(0, 0, 0, 0.60)"),
  fontFamily: fontFamily.Raleway
}

export const Body2 =  {
  ...baseStyles("0.875rem", 400, "rgba(0, 0, 0, 0.60)"),
  fontFamily: fontFamily.Raleway
}

export const Subtitle1 =  {
  ...baseStyles("1rem", 600, "rgba(0, 0, 0, 0.60)"),
  fontFamily: fontFamily.Raleway
}

export const Subtitle2 =  {
  ...baseStyles("0.875rem", 500, "rgba(0, 0, 0, 0.60)")
}

export const ButtonStyle =  {
  ...baseStyles("0.875rem", 700, "#2B2C2B")
}

export const CaptionStyle =  {
  ...baseStyles("0.75rem", 400, "rgba(0, 0, 0, 0.60)")
}

export const OverlineStyle =  {
  ...baseStyles("1rem", 600, "rgba(0, 0, 0, 0.60)")
}