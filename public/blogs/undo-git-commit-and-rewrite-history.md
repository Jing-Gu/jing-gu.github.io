---
title: Something to hide? Undo my git commits and rewrite the history
date: 2025-01-29
tags: ['Git']
---

# Something to hide? Undo my git commits and rewrite the history

Sometimes I realize that I really talk nonsense in my commit messages, I just want to wipe them out. It will be less serious if nothing has been pushed to the remote repo yet. What if the damage has been done remotely? For example, I pushed two commits to my remote repo, I now want to take them down and I just want a single commit with a neat message.

## Reset to the previous commit
Use `git reset` to undo the last two commits. This will leave changes in the working directory, but remove the commits from the history.

```bash
git reset --soft HEAD~2
```

## Commit the changes with a new message
With all changes being brought back to the working directory, I can now select them all and commit all at once, with a neat message of course.

```bash
git commit -m "My neat commit message"
```

## Force-push the changes to the remote repository
Finally, I have to rewrite the commit history by forcing push the changes, I won't care if that's my own remote repo, but be cautious if someone else is on it too.
```bash
git push --force
```