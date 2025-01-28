import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useGetMessagesInboxQuery } from '../redux/api/messagesApi.ts';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EWPFormatISODate from '../../../components/EWPFormatISODate.tsx';
import { Person } from '@mui/icons-material';

import { Message } from '../models';

export function MessagesInbox() {
  const { t } = useTranslation();

  const { data: messages, isLoading }: Message = useGetMessagesInboxQuery();
  if (isLoading) return <p>{t('loading')}...</p>;

  console.log('Messages at Inbox :: ', messages);

  return (
    <List>
      {messages.messages.map((message) => (
        <ListItem
          component={Link}
          to={`patients/#/msgs/view/${message.id}`}
          key={message.id}
          secondaryAction={
            message.messagesCount > 0 && (
              <Badge
                color="primary"
                badgeContent={message.messagesCount}
                max={999}
              ></Badge>
            )
          }
          className="shadow-inner hover:bg-slate-50"
        >
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: 'primary.light' }}>
              {message.patientPhoto != undefined ? (
                <img src={message.patientPhoto} alt="User" />
              ) : (
                <Person />
              )}
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            className="hover:!text-sky-700"
            primary={
              <>
                <b>{message.patientName}</b>{' '}
                <span className="text-slate-500">
                  <EWPFormatISODate date={message.createDate} />
                </span>
              </>
            }
            secondary={
              <>
                <span
                  className={`${message.messagesCount > 0 ? `font-bold` : `font-normal`}`}
                >
                  {message.message}
                </span>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
