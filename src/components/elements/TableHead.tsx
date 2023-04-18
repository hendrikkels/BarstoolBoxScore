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

export interface TableHeadProps
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

export const TableHead = styled.thead<TableHeadProps>(
  layout,
  space,
  flexbox,
  position,
  border,
  color,
  shadow,
  typography
);
