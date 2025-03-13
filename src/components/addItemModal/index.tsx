import { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

import { shopingStore } from '../../stores/shopingStore';

interface AddItemModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const AddItemModal = ({ open, handleClose }: AddItemModalProps) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = () => {
    shopingStore.addItem(name, Number(quantity));
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Новый продукт
        </Typography>
        <Box
          component='form'
          sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='name'
            label='Название'
            variant='outlined'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='quantity'
            label='Количество'
            variant='outlined'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button onClick={handleAddItem} variant='outlined'>
            Добавить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
