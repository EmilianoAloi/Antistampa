// import { Modal, Fade, Backdrop, Box, } from "@mui/material";
// import { useState } from "react";
// import colors from '../../assets/colors.png';
// import talles from '../../assets/talles.jpg';


// const styleModal = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: { xs: '95%', sm: '70%', md: '40%' },
//     margin: '0 auto',
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
// };


// const ModalTables = ({  openModal }) => {

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    // const [open1, setOpen1] = useState(false);
    // const handleOpen1 = () => setOpen1(true);
    // const handleClose1 = () => setOpen1(false);

//     return (
//         <>


//             <Modal
//                 aria-labelledby="talle-transition-modal-title"
//                 aria-describedby="talle-transition-modal-description"
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 slots={{ backdrop: Backdrop }}
//                 slotProps={{
//                     backdrop: {
//                         timeout: 500,
//                     },
//                 }}
//             >
//                 <Fade in={open}>
//                     <Box sx={styleModal}>
//                         <img src={talles} alt='tabla de talles' className='tablaTalles' />
//                     </Box>
//                 </Fade>
//             </Modal>

//             <Modal
//                 aria-labelledby="color-transition-modal-title"
//                 aria-describedby="color-transition-modal-description"
//                 open={open1}
//                 onClose={handleClose1}
//                 closeAfterTransition
//                 slots={{ backdrop: Backdrop }}
//                 slotProps={{
//                     backdrop: {
//                         timeout: 500,
//                     },
//                 }}
//             >
//                 <Fade in={open1}>
//                     <Box sx={styleModal}>
//                         <img src={colors} alt='tabla de colores' className='tablaColores' />
//                     </Box>
//                 </Fade>
//             </Modal>



//         </>
//     )
// }

// export default ModalTables