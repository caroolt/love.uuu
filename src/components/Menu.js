import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import palavraCerta from '../images/palavraCerta.png';
import letrasCorretas from '../images/letrasCorretas.png'
import letraMeioCerta from '../images/letraMeioCerta.png'
const style = {
  position: 'absolute',
  color: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: '#884088',
  borderRadius: '15px',
  boxShadow: 24,
  p: 2,

};
const typoStyle = {
  margin: '30px',
}
export default function MenuContainer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          FabProps={{
            sx: {
              position: 'absolute',
              right: 500,
              bottom: 975,
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
                boxShadow: 0,
              },
              boxShadow: 0,
            }
          }}
          onClick={handleOpen}
          ariaLabel="menu de ajuda"
          icon={<HelpCenterIcon />}
          direction={'down'}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={typoStyle}>
            Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as peças mostram o quão perto você está da solução.
          </Typography>
          <img src={palavraCerta} alt="Exemplo de uma palavra quase certa, onde as letras que estão na palavra correta e no lugar correto aparecem em verde e as letras que estão na palavra correta, mas não está no lugar correto aparece em amarelo " title="Exemplo de uma palavra que está quase certa" >
          </img>
          <Typography sx={typoStyle}>
            As letras <img src={letrasCorretas} width="200px" alt="Letras F, E, L, I, Z" title="Letras F, E, L, I, Z"></img> fazem parte da palavra e estão na posição correta.
          </Typography>
          <Typography sx={typoStyle}>
            A letra <img src={letraMeioCerta} width="40px" alt="Letra A" title="Letra A"></img> faz parte da palavra e não está na posição correta. Já as letras em cinza escuro não fazem parte da palavra correta.
          </Typography>
          <div></div>
          <Typography sx={typoStyle}>
            Os acentos não são preenchidos automaticamente e não são considerados nas dicas. Além disso as palavras podem possuir letras repetidas.
          </Typography>
        </Box>
      </Modal>
    </div >
  );
}