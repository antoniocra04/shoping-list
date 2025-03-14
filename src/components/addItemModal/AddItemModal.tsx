import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { appStore } from '../../stores/appStore';
import { shopingStore } from '../../stores/shopingStore';

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

const AddItemModal = () => {
  const { addItemModal } = appStore;
  const handleAddItem = () => {
    shopingStore.addItem(addItemModal.name, addItemModal.quantity);
    addItemModal.close();
  };

  return (
    <Modal
      open={addItemModal.isOpen}
      onClose={() => addItemModal.close()}
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
            value={addItemModal.name}
            onChange={(e) => addItemModal.setName(e.target.value)}
          />
          <TextField
            id='quantity'
            label='Количество'
            variant='outlined'
            value={addItemModal.quantity}
            onChange={(e) => addItemModal.setQuantity(parseInt(e.target.value, 10))}
          />
          <Button onClick={handleAddItem} variant='outlined'>
            Добавить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default observer(AddItemModal);
