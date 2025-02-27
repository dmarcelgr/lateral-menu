import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EWPFormatISODate from '../../../../components/reusableDateFormatter/EWPFormatISODate.tsx';
import { Person } from '@mui/icons-material';
import * as React from 'react';
import { Alert } from '../../models';

export default function AlertsDataComponent({ events }: Alert) {
  return (
    <>
      <Box>
        <List>
          {events.map((event) => (
            <ListItem
              component={Link}
              to={`patients/#/msgs/view/${event.id}`}
              key={event.id}
              secondaryAction={
                <span className="text-slate-500">
                  <EWPFormatISODate date={event.createDate} />
                </span>
              }
              className="shadow-inner hover:bg-slate-50"
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: 'primary.light' }}>
                  {event.patientPhoto != null ||
                  event.patientPhoto != undefined ? (
                    <img src={event.patientPhoto} alt="User" />
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
                      {event.patientName} (id: {event.id}){' '}
                    </b>{' '}
                    {event.status === 'new' && (
                      <Badge
                        className="!ml-6 capitalize"
                        color="error"
                        badgeContent={event.status}
                      ></Badge>
                    )}
                  </>
                }
                secondary={event.cause}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
