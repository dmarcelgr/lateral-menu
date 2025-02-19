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

export default function AlertsDataComponent({ alerts }: Alert) {
  return (
    <>
      <Box>
        <List>
          {alerts.events.map((alert) => (
            <ListItem
              component={Link}
              to={`patients/#/msgs/view/${alert.id}`}
              key={alert.id}
              secondaryAction={
                <span className="text-slate-500">
                  <EWPFormatISODate date={alert.createDate} />
                </span>
              }
              className="shadow-inner hover:bg-slate-50"
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: 'primary.light' }}>
                  {alert.patientPhoto != null ||
                  alert.patientPhoto != undefined ? (
                    <img src={alert.patientPhoto} alt="User" />
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
                      {alert.patientName} (id: {alert.id}){' '}
                    </b>{' '}
                    {alert.status === 'new' && (
                      <Badge
                        className="!ml-6 capitalize"
                        color="error"
                        badgeContent={alert.status}
                      ></Badge>
                    )}
                  </>
                }
                secondary={alert.cause}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
