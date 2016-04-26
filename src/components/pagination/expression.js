import { registerExpr } from 'nornj';

registerExpr('PageCount', (id) => {
  return [1, 2, 3, 4, 5].map((num) => {
    return <li className="fj-pagn-info">
             {`第${id + num}页`}
           </li>;
  });
});