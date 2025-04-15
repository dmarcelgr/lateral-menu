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
import EwpFormatISODate from '../../../../reusableDateFormatter/EwpFormatISODate.tsx';
import { Person } from '@mui/icons-material';
import * as React from 'react';
import { AlertEvent, EwpAlert } from '../../models';
import { EwpLateralMenuLinkHandler } from '../../../linkHandler/EwpLateralMenuLinkHandler.tsx';

export default function AlertsDataComponent({ events }: EwpAlert) {
  return (
    <>
      <Box>
        <List>
          {events.map((event: AlertEvent) => (
            <ListItem
              component={Link}
              onClick={() =>
                EwpLateralMenuLinkHandler(`patients/#/msgs/view/${event.id}`)
              }
              key={event.id}
              secondaryAction={
                <span className="text-slate-500">
                  <EwpFormatISODate date={event.createDate} />
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
