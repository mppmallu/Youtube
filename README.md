Based on the log you've provided, here is a list of commands you used to push your data to the GitHub repository, ordered sequentially:

1. **Initialize Git Repository (if not already initialized):**
   ```bash
   git init
   ```

2. **Check Status:**
   ```bash
   git status
   ```

3. **Add Files to Staging Area:**
   ```bash
   git add force-app/main/default/classes/YouTubeController.cls
   ```

4. **Commit Staged Changes:**
   ```bash
   git commit -m 'youtube search lwc and apex conntroller class'
   ```

5. **Create a New Branch:**
   ```bash
   git checkout -b scratchBranch
   ```

6. **Add Remote Repository URL:**
   ```bash
   git remote add origin https://github.com/mppmallu/Youtube.git
   ```

7. **Push Changes to Remote Repository on the New Branch:**
   ```bash
   git push -u origin scratchBranch
   ```

### Summary of Commands:
1. `git init`
2. `git status`
3. `git add force-app/main/default/classes/YouTubeController.cls`
4. `git commit -m 'youtube search lwc and apex conntroller class'`
5. `git checkout -b scratchBranch`
6. `git remote add origin https://github.com/mppmallu/Youtube.git`
7. `git push -u origin scratchBranch`

These steps include initializing a Git repository (if needed), adding files to staging, committing those changes, creating a new branch, adding a remote repository, and pushing the new branch to the remote repository on GitHub.
