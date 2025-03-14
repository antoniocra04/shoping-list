import DeleteIcon from '@mui/icons-material/Delete';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { observer } from 'mobx-react-lite';

import type { ShopingItem } from '../../models/ShopingItem';
import { shopingStore } from '../../stores/shopingStore';

interface ShopingListItemProps {
  item: ShopingItem;
}

const ShopingListItem = ({ item }: ShopingListItemProps) => {
  const labelId = `checkbox-list-label-${item.id}`;

  const handleRemoveItem = () => {
    shopingStore.removeItem(item.id);
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge='end' aria-label='comments' onClick={handleRemoveItem}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={() => item.togglePurchased()} dense>
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={item.purchased}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={item.name} />
        <ListItemText id={labelId} primary={item.quantity} />
      </ListItemButton>
    </ListItem>
  );
};

export default observer(ShopingListItem);
