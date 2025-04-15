import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EwpFormatISODate from '../../../../reusableDateFormatter/EwpFormatISODate.tsx';
import { ReceiptLong } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { EwpNotification, NotificationData } from '../../models';
import { EwpLateralMenuLinkHandler } from '../../../linkHandler/EwpLateralMenuLinkHandler.tsx';

export default function NotificationsDataComponent({ data }: EwpNotification) {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <List>
          {data.map((notification: NotificationData) => (
            <ListItem
              component={Link}
              onClick={() =>
                EwpLateralMenuLinkHandler(
                  `patients/#/msgs/view/${notification.id}`
                )
              }
              key={notification.id}
              secondaryAction={
                <span className="text-slate-500">
                  {EwpFormatISODate(notification.createDate, 'MMMM d, yyyy')}
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
      </Box>
    </>
  );
}
