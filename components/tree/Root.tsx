import { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

import NodeProps from './types/NodeProps';

import Tree from './Tree';

type Props = {
  nodes: Array<NodeProps>;
};
const Root: FunctionComponent<Props> = ({ nodes }) => {
  return (
    <Grid container direction="column">
      {nodes.map((node) => {
        return (
          <Grid item container key={node.label}>
            <Tree node={node}></Tree>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Root;
