import { Button } from '@mui/material';

interface IButtonProps {
  title: string;
  type: string;
  disabled?: boolean;
  selected?: boolean;
  sx?: any;
  onClick: () => void;
}
const RSButton = ({
  title,
  type,
  disabled,
  selected,
  sx,
  onClick,
}: IButtonProps) => {
  const classNameMap = {
    type: type === 'secondary' ? 'ra-btn-secondary' : '',
    disabled: disabled ? 'ra-btn-disabled' : '',
    selected: selected ? 'ra-btn-selected' : '',
  };
  const className = `${classNameMap.type} ${classNameMap.disabled} ${classNameMap.selected}`;
  const defaultSx = {
    borderRadius: '50px',
    background: '#E1242A',
    color: '#FFFFFF',
  };
  return (
    <Button
      variant='outlined'
      className={`${className} ra-btn-default`}
      onClick={onClick}
      disabled={disabled}
      sx={{ ...defaultSx, sx }}
    >
      {title}
    </Button>
  );
};

RSButton.defaultProps = {
  disabled: false,
  selected: false,
  sx: {},
};

export default RSButton;
