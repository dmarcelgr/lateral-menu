import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useGetMessagesInboxQuery } from '../redux/apis/messagesApi.ts';
import { useTranslation } from 'react-i18next';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

function formatDate(originalDate: Date) {
  return format(parseISO(originalDate), 'dd/MM/yyyy');
}

export function MessagesInbox() {
  const { t } = useTranslation();

  const { data: messages, error, isLoading } = useGetMessagesInboxQuery();
  if (isLoading) return <p>{t('loading')}...</p>;
  if (error) return <p>{t('error_loading')}...</p>;

  console.log('messages content at inboxComp: ', messages);

  return (
    <List>
      {messages.data.group_data.user_list.map((message) => (
        <ListItem
          component={Link}
          to={`patients/#/msgs/view/${message.id}`}
          key={message.id}
          secondaryAction={
            message.count > 0 && (
              <Badge
                color="primary"
                badgeContent={message.count}
                max={999}
              ></Badge>
            )
          }
          className="shadow-inner hover:bg-slate-50"
        >
          <ListItemAvatar>
            <Avatar>
              <img src={message.user_from.people.image_filename} alt="User" />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            className="hover:!text-sky-700"
            primary={
              <>
                <b>{message.user_from.full_name}</b>{' '}
                <span className="text-slate-500">
                  {formatDate(message.created_at)}
                </span>
              </>
            }
            secondary={
              <>
                <span
                  className={`${message.count > 0 ? `font-bold` : `font-normal`}`}
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
