import { useSyncExternalStore } from 'react';
import type { ActiveTool } from './types';

let activeTool: ActiveTool | null = null;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => activeTool;

const setActiveTool = (next: ActiveTool | null) => {
  activeTool = next;
  listeners.forEach((listener) => listener());
};

const useActiveTool = (): ActiveTool | null => useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

export { setActiveTool, useActiveTool };
