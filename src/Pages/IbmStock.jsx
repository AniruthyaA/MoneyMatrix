import * as React from 'react';
import  Plot from 'react-plotly.js';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Typography,styled ,Box, Toolbar, IconButton, Grid} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import Avatar from '@mui/material/Avatar';
import SignInSide from './SignInSide';
import MenuDrawer from '../Components/MenuDrawer';



class IbmStock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            xValues:[],
            yValues:[] 
        }
    }

    componentDidMount(){
        this.fetchStock();   
    }

    fetchStock(){
        const pointerToThis= this;
       // console.log(pointerToThis);
        const API_KEY='2BNXBBR1HX3JF6S1';
        let stocksymbol='IBM';
        let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stocksymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
       let xValuesFunction = [];
       let yValuesFunction = [];
        fetch(API_CALL)
        .then(
            function (response){
                return response.json();
            }
        )
        .then(
            function (data){
                console.log(data);

                for (var key in data['Time Series (5min)']){
                    xValuesFunction.push(key);
                    yValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
                }
                console.log(xValuesFunction); 
               pointerToThis.setState({
                xValues:xValuesFunction,
                yValues:yValuesFunction
               });
            }
        )
    }
    render(){
        return(
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
            <h4>Stock Analysis</h4>
            <Plot
            data={[
                {
                    x:this.state.xValues,
                    y:this.state.yValues,
                    type:'scatters',
                    mode:'lines',
                    marker:{color:'red'}
                }
            ]}
            layout={{width:720,height:440,title:" IBM-Time Series Plot"}}
            /> 
            </>
        )
    }
}
export default IbmStock;