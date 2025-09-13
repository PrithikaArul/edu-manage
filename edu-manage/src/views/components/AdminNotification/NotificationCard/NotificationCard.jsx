import { useState,useEffect } from "react";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";

const NotificationCard = ({notification}) => {
    const [isOnline,setIsOnline]=useState(false);
    const [profileImage,setProfileImage]=useState("");
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [notificationTime,setNotificationTime]=useState("");

    useEffect(()=>{
        setIsOnline(notification.isOnline);
        setProfileImage(notification.profileImage);
        setTitle(notification.title);
        setDescription(notification.description);
        setNotificationTime(notification.notificationTime);
    });


  return (
    <Card>
        <Grid>
            
        </Grid>
    </Card>
  )
}

export default NotificationCard
