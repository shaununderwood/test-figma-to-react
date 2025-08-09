// src/utils/uidl.ts
export type UIDLNode = any;

export function findNodeBy(
  root: UIDLNode | undefined,
  pred: (n: UIDLNode) => boolean
): UIDLNode | undefined {
  if (!root) return undefined;
  const stack: UIDLNode[] = [root];
  while (stack.length) {
    const n = stack.pop();
    if (!n) continue;
    if (pred(n)) return n;
    const kids = n.content?.children ?? [];
    for (const k of kids) stack.push(k);
  }
  return undefined;
}

export function findImageByName(root: UIDLNode | undefined, name: string) {
  const node = findNodeBy(root, (n) =>
    n?.type === 'element' &&
    n?.content?.elementType === 'image' &&
    n?.content?.name === name
  );
  return node
    ? {
        src: node.content?.attrs?.src?.content ?? '',
        alt: node.content?.attrs?.alt?.content ?? name,
      }
    : null;
}
