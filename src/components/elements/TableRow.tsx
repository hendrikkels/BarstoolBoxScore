import {
  layout,
  position,
  LayoutProps,
  PositionProps,
  BorderProps,
  border,
  ColorProps,
  color,
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
  ShadowProps,
  shadow,
  typography,
  TypographyProps,
} from 'styled-system';
import styled from 'styled-components';

export interface TableRowProps
  extends LayoutProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    FlexboxProps,
    ColorProps,
    ShadowProps,
    TypographyProps {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const TableRow = styled.tr<TableRowProps>(
  layout,
  space,
  flexbox,
  position,
  border,
  color,
  shadow,
  typography
);
