type RootTool = 'soil' | 'cover' | 'zone';

interface ActiveTool {
  root: RootTool;
  option: string;
}

export type { ActiveTool, RootTool };
