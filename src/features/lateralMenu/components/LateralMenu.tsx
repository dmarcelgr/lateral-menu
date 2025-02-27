import { Box, Container, IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';
import { MenuContent } from './MenuContent.tsx';

export function LateralMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Container>
        {/*Hamburger menu button for mobile*/}
        <Box
          className={`p-2 block lg:hidden flex ${menuOpen ? 'justify-end' : 'justify-start'}`}
        >
          <IconButton
            aria-label="open menu"
            edge={menuOpen ? 'end' : 'start'}
            onClick={handleToggle}
            className="z-[2000] shadow rounded-full"
            sx={{
              color: 'secondary.light',
              backgroundColor: 'primary.main',
              ':hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {menuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Box>
        <MenuContent key={'mainMenu'} />
      </Container>
    </>
  );
}

// import { Box, Container, IconButton } from '@mui/material';
// import { Close, Menu } from '@mui/icons-material';
// import { MenuContent } from './MenuContent.tsx';
// import { useState } from 'react';
//
// export function LateralMenu() {
//   const [menuOpen, setMenuOpen] = useState(false);
//
//   const handleToggle = (): void => {
//     setMenuOpen(!menuOpen);
//   };
//
//   return (
//     <>
//       <Container>
//         {/*Hamburger menu button for mobile*/}
//         <Box
//           className={`p-2 block lg:hidden flex ${menuOpen ? 'justify-end' : 'justify-start'}`}
//         >
//           <IconButton
//             aria-label="open menu"
//             edge={menuOpen ? 'end' : 'start'}
//             onClick={handleToggle}
//             className="z-[2000] shadow rounded-full"
//             sx={{
//               color: 'secondary.light',
//               backgroundColor: 'primary.main',
//               ':hover': {
//                 bgcolor: 'primary.dark',
//               },
//             }}
//           >
//             {menuOpen ? <Close /> : <Menu />}
//           </IconButton>
//         </Box>
//         <MenuContent key={'mainMenu'} />
//       </Container>
//     </>
//   );
// }
