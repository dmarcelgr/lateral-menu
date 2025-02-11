import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useGetNotificationsQuery } from '../../redux/api/notificationsApi.ts';
import LoaderIcon from '../../../../assets/loaders/loading.tsx';
import { Link } from 'react-router-dom';
import EWPFormatISODate from '../../../../components/reusableDateFormatter/EWPFormatISODate.tsx';
import { ReceiptLong } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Notification } from '../../models';

export default function NotificationsDataComponent() {
  const { t } = useTranslation();

  const { data: notifications, isLoading }: Notification =
    useGetNotificationsQuery();
  return (
    <>
      <Box>
        {isLoading ? (
          <LoaderIcon />
        ) : (
          <List>
            {notifications.data.map((notification) => (
              <ListItem
                component={Link}
                // to={`patients/#/msgs/view/${notification.id}`}
                key={notification.id}
                secondaryAction={
                  <span className="text-slate-500">
                    <EWPFormatISODate date={notification.createDate} />
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
                        {notification.notificationName} |{' '}
                        {notification.patientName} |{' '}
                      </b>{' '}
                      {!notification.status && (
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
