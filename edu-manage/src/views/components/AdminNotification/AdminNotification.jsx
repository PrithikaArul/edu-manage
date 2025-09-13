import { useState } from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import NotificationCard from "./NotificationCard/NotificationCard";



export const AdminNotification=()=>{
    const [notificationList,setNotificationList]=useState([{isOnline:true,
        profileImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fprofessional-girl&psig=AOvVaw2blwBG615MyBJSX7gKh3UF&ust=1747589648765000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDi4KKFq40DFQAAAAAdAAAAABAE",
        title:"Ravi liked your post.",
        description:"Design tips for beginners is getting some love!",
        notificationTime:"2m"
    }]);

    //Temporary data filler
    for(let i=0;i<3;i++)
    {
        notificationList.push({isOnline:true,
        profileImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fprofessional-girl&psig=AOvVaw2blwBG615MyBJSX7gKh3UF&ust=1747589648765000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDi4KKFq40DFQAAAAAdAAAAABAE",
        title:"Ravi liked your post.",
        description:"Design tips for beginners is getting some love!",
        notificationTime:"2m"
    });
    }

    return(
        <Box sx={{display:"flex",justifyContent:"center",}}>
            <Card 
            sx={{display:"flex",justifyContent:"center",height:600,width:700,marginTop:"5%",borderRadius:5}}
            >
             <Grid>
                <div>
                    {notificationList.map((notification)=>{
                        <NotificationCard notification={notification}/>
                    })}
                </div>
             </Grid>
            </Card>
        </Box>
    );
}