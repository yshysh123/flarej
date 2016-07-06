import nj from 'nornj';

const row = nj`
<div {...props} class={classes} style={styles}>
  {children}
</div>
`;

const col = nj`
<div {...props} class={classes}>
  {children}
</div>
`;

const clearFix = nj`
<div {...props} class={classes} />
`;

export default {
  row,
  col,
  clearFix
};