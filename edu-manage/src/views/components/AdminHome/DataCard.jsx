import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function DataCard(props) {
  return (
    <Card sx={{backgroundColor:'#E3EAE9',minWidth:200, height:137, borderRadius:7, marginTop:2}}>
      <CardContent>
        <Typography color="#A7ABAA">
            {props.description}
        </Typography>
        <Typography color="#286F67" sx={{ fontSize: 40, fontWeight:700 }}>
            {props.value}
        </Typography>
        <Typography color="#A7ABAA">
            {props.subDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
