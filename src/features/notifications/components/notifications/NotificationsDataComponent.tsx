import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useGetNotificationsQuery } from '../../redux/apis/notificationsApi.ts';
import LoaderIcon from '../../../../assets/loaders/loading.tsx';
import { Link } from 'react-router-dom';
import FormatISODate from '../../../../components/FormatISODate.tsx';
import { ReceiptLong } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function NotificationsDataComponent() {
  const { t } = useTranslation();

  const { data: notifications, isLoading } = useGetNotificationsQuery();
  console.log('Data at notifications', notifications);
  return (
    <>
      <Box>
        {isLoading ? (
          <LoaderIcon />
        ) : (
          <List>
            {notifications.data.data.map((notification) => (
              <ListItem
                component={Link}
                // to={`patients/#/msgs/view/${notification.id}`}
                key={notification.id}
                secondaryAction={
                  <span className="text-slate-500">
                    <FormatISODate date={notification.created_at} />
                  </span>
                }
                className="shadow-inner hover:bg-slate-50"
              >
                <ListItemAvatar>
                  {/*Apply: types of notifications validation*/}
                  <ReceiptLong />
                </ListItemAvatar>

                <ListItemText
                  className="hover:!text-sky-700 !mr-16"
                  primary={
                    <>
                      <b>
                        {notification.record_name} | {notification.patient_name}{' '}
                        |{' '}
                      </b>{' '}
                      {!notification.is_read && (
                        <Badge
                          className="!ml-6 capitalize"
                          color="error"
                          badgeContent={t('new')}
                        ></Badge>
                      )}
                    </>
                  }
                  secondary={notification.comment}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </>
  );
}
