import { makeStyles } from '@material-ui/core';
import { type } from 'os';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  clicked: {
    display: 'flex',
    width: 'fit-content',
    margin: '16px',
    padding: '8px 16px',
    borderRadius: '8px',
    background: 'linear-gradiend(225deg, #25D366, white);',
    boxShadow: `inset -8px 8px 33px #1b9a4a, 
    inset 8px -8px 33px #2fff82;`,
  },
  unClicked: {
    display: 'flex',
    width: 'fit-content',
    margin: '16px',
    padding: '8px 16px',
    borderRadius: '8px',
    background: '#ff9076',
    boxShadow: ` -9px 9px 42px #ffdad2, 
    9px -9px 42px #ffb191`,
  },
  phoneNumber: {
    fontSize: '16px',
    color: '#555',
    fontWeight: 'bold',
  },
}));

type ZapProps = {
  phone: string | string[];
  msg: string;
};

const ZapButton = ({ phone, msg }: ZapProps) => {
  const classes = useStyles();
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open(`https://api.whatsapp.com/send?phone=55${phone}&text=${msg}`);
  };

  return (
    <div
      onClick={handleClick}
      className={clicked ? classes.clicked : classes.unClicked}>
      <div className={classes.phoneNumber}>{phone}</div>
    </div>
  );
};

export default ZapButton;
