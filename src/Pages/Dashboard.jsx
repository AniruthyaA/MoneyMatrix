import * as React from 'react';
import  { useState } from 'react';
import { Typography,styled,Box,Toolbar,IconButton,Grid} from '@mui/material';
import { TextField, Button, List, ListItem, ListItemText, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import MenuDrawer from '../Components/MenuDrawer';
import '../App.css'
import '../index.css'


const Component = styled(Box)`
dispaly:flex;
padding:10px;
width:800px;
border-radius:20px;
margin:auto;
& > div {
  width:50%;
padding:10px;
}
`;

export default function Dashboard(){
  
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const addTransaction = () => {
    if (description && amount) {
      const newTransaction = {
        id: Math.random().toString(36).substr(2, 9),
        description,
        amount: parseFloat(amount),
      };
      setTransactions([...transactions, newTransaction]);
      setDescription('');
      setAmount(0);
    }
  };
  

  return (
    <>
    <AppBar position="fixed" sx={{bgcolor:"rgba(0,0,0,0)"}}>
      <Toolbar >
        <IconButton>
          <Avatar src="src/assets/logomark.jpg"/>
        </IconButton>
         <IconButton
         color='success'>
         <Typography variant='h3'>MoneyMatrix</Typography>
         </IconButton>
         <Grid  item xs/>
         <Grid>
         <MenuDrawer/>
    </Grid>
      </Toolbar>
    </AppBar>    
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Budget planner
      </Typography>
      <div >
      <Grid container spacing={2}>
        <TextField
        required
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
        required
          fullWidth
          label="Amount"
          variant="outlined"
          type="number"
          color='primary'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTransaction}
          fullWidth
          size="large"
        > Add Transaction</Button>
        </Grid>
      </div>
      <div>
        <Typography variant="h4" gutterBottom>
          Transactions
        </Typography>
        <List>
          {transactions.map(transaction => (
            <ListItem key={transaction.id}>
              <ListItemText primary={`${transaction.description}: ${transaction.amount}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
    </>
  );
}