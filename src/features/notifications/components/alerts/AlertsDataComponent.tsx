import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useGetAlertsQuery } from '../../redux/apis/notificationsApi.ts';
import { Link } from 'react-router-dom';
import LoaderIcon from '../../../../assets/loaders/loading.tsx';
import icon_indeterminate from '../../../../assets/images/icon_indeterminate.png';
import FormatISODate from '../../../../components/FormatISODate.tsx';

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
                    <FormatISODate date={alert.symptom_resport.created_at} />
                  </span>
                }
                className="shadow-inner hover:bg-slate-50"
              >
                <ListItemAvatar>
                  <Avatar>
                    <img
                      src={
                        alert.patient.id_people.image_filename != null
                          ? alert.patient.id_people.image_filename
                          : icon_indeterminate
                      }
                      alt="User"
                    />
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
