---
title: Horrible more than 10k git changes
draft: false
tags:
  - Git
date: 2024-12-18
---
Looking at my code base, I knew I initiated my repo with just the frontend code, thinking that I will have the backend in another repo. But I changed my plan, I just wanted a mono repo finally to include both front and back, then I did a naïve move, I manually created a sub folder and manually moved (drag-and-drop) all files into this sub folder… vs code freezes for a while, then source control spitted out more than 10k changes…

Here is the hard lesson.

When we move files into a new parent folder in the Git repository, Git will detect those changes as deletions of the old files and additions of the new ones. This explains a large number of changes in the Git history, even though we only changed the file locations.

(PS. I later noticed why the Git integrated IDE couldn’t pick up those file movements, because I moved them using the window’s explorer file system, very bad move.)

And here is the solution.

Never do the manual work again, always use `git mv` to tell Git about the file moves explicitly.

In my situation, I wanted all my code to shift down to a sub folder called ionic-client, so in my current directory, create the sub folder by `mkdir`.

```shell
mkdir ionic-client
```

Then move all non-hidden files and directories (excluding ionic-client) into ionic-client/.

```shell
git mv !(ionic-client) ionic-client/
```

This pattern uses `!` to negate the match for the `ionic-client` folder, and it will move everything except the `ionic-client` folder into the `ionic-client` folder.

Now, move the hidden files (like `.gitignore`, `.env`, etc.) but exclude the .git directory

```shell
 git mv .!(git) ionic-client/
```

Above all, extended globbing may be needed, enable it in the shell if not yet, as extended globbing allows advanced patterns like !(...) (exclude matches).

```shell
shopt -s extglob
```

I actually wanted to move back the README to the root level, again, always use `git mv`.

```shell
git mv ionic-client/README.md .
```

That’s all, I now see the clean git history, and all files are marked as **R** (Renamed) instead of **D** (Deleted) and **A** (Added). By marking it as a rename, Git preserves the file’s history (e.g., commits that previously modified it). However, if the files are moved by drag and drop or copy paste, Git will track this as **D** (Deleted) and **A** (Added), and the file’s history would be lost.