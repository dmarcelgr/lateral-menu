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
import EWPFormatISODate from '../../../components/reusableDateFormatter/EWPFormatISODate.tsx';
import { Person } from '@mui/icons-material';

import { EwpMessage } from '../models';
import { MESSAGES_SEARCH_FILTERS } from '../const/messagesSearch.const.ts';

export function MessagesInbox() {
  const { t } = useTranslation();

  const { data: messages, isLoading }: EwpMessage = useGetMessagesInboxQuery(
    MESSAGES_SEARCH_FILTERS
  );
  if (isLoading) return <p>{t('loading')}...</p>;
  if (!messages) return <p>{t('no_available_data')}...</p>;
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
