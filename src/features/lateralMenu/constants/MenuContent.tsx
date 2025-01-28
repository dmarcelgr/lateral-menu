// Menu structure
import { Box, useMediaQuery } from '@mui/material';
import esvydaBigIcon from '/logos/fulllogo-svg-esvyda.svg';
import esvydaIcon from '/logos/logo-svg-esvyda.svg';
import { LateralMenuItems } from '../components/LateralMenuItems.tsx';
import JSX from 'react';
import { EWP_BOTTOM_MENU_ITEMS, EWP_TOP_MENU_ITEMS } from './MenuConstants.tsx';
import { Link } from 'react-router-dom';

export function MenuContent(): JSX.Element {
  const matchesResponsiveWidth: boolean = useMediaQuery('(min-width:1023px)');

  return (
    <>
      <Box
        bgcolor="primary.main"
        className="w-full p-0 border-t-2 border-t-slate-500"
      >
        <Link to="/">
          <img
            src={matchesResponsiveWidth ? esvydaIcon : esvydaBigIcon}
            className="w-1/5 lg:w-10 py-1 pl-3 flex"
            alt="Esvyda icon"
          />
        </Link>
      </Box>
      <Box className="flex flex-col justify-between h-full">
        <LateralMenuItems key="TopItems" items={EWP_TOP_MENU_ITEMS} />
        <LateralMenuItems key="BottomItems" items={EWP_BOTTOM_MENU_ITEMS} />
      </Box>
    </>
  );
}
