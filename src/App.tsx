import { useState } from 'react';
import { Box, Button, List, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { AddItemModal } from './components/addItemModal';
import { ShopingListItem } from './components/shopingListItem';
import { shopingStore } from './stores/shopingStore';

export const App = observer(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box sx={{ margin: 10 }}>
        <Typography variant='h1'>Список покупок</Typography>
        <Button onClick={() => setIsOpen(true)} variant='outlined'>
          Добавить продукт
        </Button>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {shopingStore.items.map((item) => {
            return <ShopingListItem item={item} />;
          })}
        </List>
      </Box>
      <AddItemModal open={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
});

export default App;
