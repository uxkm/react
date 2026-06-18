export function buildCommentTree(comments) {
  const roots = []
  const repliesByParent = new Map()

  for (const comment of comments) {
    if (!comment.parent_id) {
      roots.push({ ...comment, replies: [] })
      continue
    }

    const replies = repliesByParent.get(comment.parent_id) ?? []
    replies.push(comment)
    repliesByParent.set(comment.parent_id, replies)
  }

  for (const root of roots) {
    root.replies = repliesByParent.get(root.id) ?? []
  }

  return roots
}
