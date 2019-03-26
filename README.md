# Using Gitignore

Use this as an example of using git ignore.
******************************************************************************************************************************
**$ sudo npm install gitignore -g**
//Installs gitignore as a global command. Only needs to be done once.

1. **$ touch .gitignore**
//create a gitignore file inside of your working directory. This needs to be done in the most parent root.

2. Using your code editor, open the file (files beginning with . are hidden by default).

3. Write the files into the **.gitignore** file you wish to ignore. This can be done after **git init** but needs to be done before **git add.**

**NOTE:** If done before **git init** there will not be a conflict. If done after **git commit** or **git push**, you will need to use **git rm --cached .node_modules** to remove the node_modules folder from the GitHub staging area.

4. Run through the normal git commands. (git commit and push)
