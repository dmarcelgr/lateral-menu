import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useGetAlertsQuery } from '../../redux/api/notificationsApi.ts';
import { Link } from 'react-router-dom';
import LoaderIcon from '../../../../assets/loaders/loading.tsx';
import EWPFormatISODate from '../../../../components/EWPFormatISODate.tsx';
import { Person } from '@mui/icons-material';

export default function AlertsDataComponent() {
  const { data: alerts, isLoading } = useGetAlertsQuery();
  console.log('Data at alerts', alerts);
  return (
    <>
      <Box>
        {isLoading ? (
          <LoaderIcon />
        ) : (
          <List>
            {alerts.data.events.map((alert) => (
              <ListItem
                component={Link}
                // to={`patients/#/msgs/view/${alert.id}`}
                key={alert.id}
                secondaryAction={
                  <span className="text-slate-500">
                    <EWPFormatISODate date={alert.symptom_resport.created_at} />
                  </span>
                }
                className="shadow-inner hover:bg-slate-50"
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: 'primary.light' }}>
                    {alert.patient.id_people.image_filename != null ? (
                      <img
                        src={alert.patient.id_people.image_filename}
                        alt="User"
                      />
                    ) : (
                      <Person />
                    )}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  className="hover:!text-sky-700"
                  primary={
                    <>
                      <b>
                        {alert.patient.id_people.first_name}{' '}
                        {alert.patient.id_people.last_name} (id: {alert.id}){' '}
                      </b>{' '}
                      {alert.status === 'new' && (
                        <Badge
                          className="!ml-6 capitalize"
                          color="error"
                          badgeContent={alert.status}
                        ></Badge>
                      )}
                    </>
                  }
                  secondary={alert.cause}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
}
