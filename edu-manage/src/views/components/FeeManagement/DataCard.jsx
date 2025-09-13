import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DataCard(props) {
  return (
    <Card  sx={{backgroundColor:'#E3EAE9', height:110, borderRadius:7, marginLeft:2, marginTop:2}}>
      <CardContent>
        <Typography color="grey">
            {props.description}
        </Typography>
        <Typography color="#286F67" sx={{ fontSize: 40, fontWeight:700 }}>
            {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
