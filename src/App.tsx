import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import agents from './agents';
import { Button } from '@material-ui/core';
import ZapButton from './zapButton';
import whatsapp from './whatsapp.svg';
import zap from './zap.mp3';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {},
  inputHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  buttonsArea: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  logo: {
    height: '60px',
    marginRight: '12px',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function App() {
  const classes = useStyles();
  const [msg, setMsg] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [phoneList, setPhoneList] = React.useState([]);

  let audio = new Audio(zap);

  const handleChange = (event: any) => {
    setMsg(event.target.value);
  };

  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const handleAudio = () => {
    audio.play();
    console.log(audio);
  };

  const handleZap = () => {
    const temp = phone.replace(/\r/g, '').split(/\n/);
    setPhoneList(temp as any);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container}>
        <div className={classes.header}>
          <img src={whatsapp} className={classes.logo} onClick={handleAudio} />
          <h1>ZipZopper</h1>
        </div>
        <div className={classes.inputHeader}>
          <TextField
            id='telefone'
            label='telefone com DDD'
            onChange={handlePhone}
            multiline
            rowsMax={4}
          />
          <FormControl required className={classes.formControl}>
            <InputLabel id='demo-simple-select-required-label'>
              Vendedor
            </InputLabel>
            <Select
              labelId='demo-simple-select-required-label'
              id='demo-simple-select-required'
              value={msg}
              onChange={handleChange}
              className={classes.selectEmpty}>
              {agents.map((agent) => {
                return (
                  <MenuItem value={agent.msg} key={agent.name}>
                    {agent.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button onClick={handleZap} variant='outlined'>
            Gerar links
          </Button>
        </div>
        <div className={classes.buttonsArea}>
          {phoneList.map((phoneNumber) => {
            return (
              <ZapButton phone={phoneNumber} msg={msg} key={phoneNumber} />
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
}
