import {
  Avatar,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import esvydaLogo from '../../../assets/images/logo-svg-esvyda.svg';
import { useGetMessagesInboxQuery } from '../redux/apis/messagesApi.ts';
import { useTranslation } from 'react-i18next';
import { format, parseISO } from 'date-fns';

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
          key={message.id}
          secondaryAction={
            <Badge color="primary" badgeContent={1} max={999}></Badge>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <img src={esvydaLogo} className="esvyda logo" alt="Esvyda logo" />
            </Avatar>
          </ListItemAvatar>

          <ListItemText
            primary={
              <>
                <b>{message.user_from.full_name}</b>{' '}
                <span className="text-slate-500">
                  {formatDate(message.created_at)}
                </span>
              </>
            }
            secondary={`${message.message}`}
          />
          <Divider />
          {/*  status */}
        </ListItem>
      ))}
    </List>
  );
}
