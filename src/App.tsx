import { Box, Button, List, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { AddItemModal } from './components/AddItemModal';
import { ShopingListItem } from './components/ShopingListItem';
import { appStore } from './stores/appStore';
import { shopingStore } from './stores/shopingStore';

export const App = () => {
  const { addItemModal } = appStore;
  return (
    <>
      <Box sx={{ margin: 10 }}>
        <Typography variant='h1'>Список покупок</Typography>
        <Button onClick={() => addItemModal.open()} variant='outlined'>
          Добавить продукт
        </Button>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {shopingStore.items.map((item) => {
            return <ShopingListItem key={item.id} item={item} />;
          })}
        </List>
      </Box>
      <AddItemModal />
    </>
  );
};

export default observer(App);
