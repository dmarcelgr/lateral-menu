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
import EwpFormatISODate from '../../../reusableDateFormatter/EwpFormatISODate.tsx';
import { Person } from '@mui/icons-material';
import { MESSAGES_SEARCH_FILTERS } from '../const/messagesSearch.const.ts';
import { EwpLateralMenuLinkHandler } from '../../linkHandler/EwpLateralMenuLinkHandler.tsx';

export function MessagesComponent() {
  const { t } = useTranslation();

  const { data, isLoading } = useGetMessagesInboxQuery(MESSAGES_SEARCH_FILTERS);

  return (
    <>
      {isLoading && <i>{t('loading')}... </i>}
      {data != undefined && data?.messages.length > 0 ? (
        <List>
          {data.messages.map((message) => (
            <ListItem
              component={Link}
              onClick={() =>
                EwpLateralMenuLinkHandler(`patients/#/msgs/view/${message.id}`)
              }
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
                      <EwpFormatISODate date={message.createDate} />
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
      ) : (
        <i>{t('no_available_data')}...</i>
      )}
    </>
  );
}
