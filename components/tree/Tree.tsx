import { FunctionComponent } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import NodeProps from './types/NodeProps';

import Node from './Node';
import Leaf from './Leaf';

type StyleProps = {
  padding: number;
};
const useStyles = makeStyles({
  tree: {
    marginLeft: (props: StyleProps) => props.padding * 8,
    width: '100%',
  },
});

type Props = {
  node: NodeProps;
  padding?: number;
};

const Tree: FunctionComponent<Props> = ({ node, padding = 0 }) => {
  const classes = useStyles({ padding });

  const renderSubTree = () => {
    return (
      <Grid container direction="column">
        {node.children.map((subNode) => {
          return (
            <Grid item container key={subNode.label}>
              <Tree node={subNode} padding={padding + 8}></Tree>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  if (!node.children.length)
    return (
      <div className={classes.tree}>
        <Leaf label={node.label}></Leaf>
      </div>
    );

  return (
    <div className={classes.tree}>
      <Grid container direction="column">
        <Grid item container>
          <Node label={node.label} renderSubTree={renderSubTree}></Node>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tree;
