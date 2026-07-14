import { useSyncExternalStore } from "react";

let count = 0;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const cart = {
  add() {
    count += 1;
    emit();
  },
  get() {
    return count;
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useCartCount() {
  return useSyncExternalStore(
    cart.subscribe,
    () => count,
    () => 0,
  );
}
