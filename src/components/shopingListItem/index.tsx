import DeleteIcon from '@mui/icons-material/Delete';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { shopingStore } from 'src/stores/shopingStore';
import type { ShoppingItem } from 'src/utils';

interface ShopingListItemProps {
  item: ShoppingItem;
}

export const ShopingListItem = ({ item }: ShopingListItemProps) => {
  const labelId = `checkbox-list-label-${item.id}`;

  return (
    <ListItem
      key={item.id}
      disablePadding
      secondaryAction={
        <IconButton
          edge='end'
          aria-label='comments'
          onClick={() => shopingStore.removeItem(item.id)}
        >
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
