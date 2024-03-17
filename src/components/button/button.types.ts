export type PropTypes = {
  children: JSX.Element | JSX.Element[] | string;
  variant?: 'contained' | 'text' | 'outlined';
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
};
