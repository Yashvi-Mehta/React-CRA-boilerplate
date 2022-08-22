import { Backdrop, CircularProgress } from '@mui/material';

type BackdropProps = {
  isOpen: boolean;
  onClick?: () => void;
};

const MUIBackdrop = (props: BackdropProps) => {
  const { isOpen, onClick } = props;
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={onClick}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

MUIBackdrop.defaultProps = {
  onClick: () => {},
};

export default MUIBackdrop;
