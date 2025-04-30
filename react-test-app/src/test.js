/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-20 21:15:44
 * @LastEditTime: 2025-04-23 21:39:15
 * @LastEditors: renlirong
 */

const List = React.memo(({ items }) => {
    console.log('List rendered');
    return (
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
});

const ListItem = React.memo(({ item }) => {
    console.log('ListItem rendered');
    return <li>{item.name}</li>;
});