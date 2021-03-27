type NodeProps = {
  label: string;
  children: Array<NodeProps>;

  onClick?: () => void;
};

export default NodeProps;
