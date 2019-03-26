# Using Gitignore

Use this as an example of using git ignore.
******************************************************************************************************************************
<div>
**$ sudo npm install gitignore -g**
//Installs gitignore as a global command. Only needs to be done once.

<li style="list-style: none">
1. **$ touch .gitignore**
//create a gitignore file inside of your working directory. This needs to be done in the most parent root.

2. Using your code editor, open the file (files beginning with . are hidden by default).

3. Write the files into the **.gitignore** file you wish to ignore. This can be done after **git init** but needs to be done before **git add.**

**NOTE:** If done before **git init** there will not be a conflict. If done after **git commit** or **git push**, you will need to use **git rm --cached .node_modules** to remove the node_modules folder from the GitHub staging area.

4. Run through the normal git commands. (git commit and push)
</li>
</div>
<hb>
<div>
Refer to the .gitignoreexample file to see how you can manually write files to be ignored. Note: you do not need to write the file path (/server/node_modules). If you wish to ignore all node_modules folders, you can write just node_modules. GitHub will automatically ignore all instances of the folder within subsequent folders, which is why your .gitignore file needs to be in your most root folder.

Refer to the .gitignore file for a standard file setup for ignoring all unnecessary push files.
</div>
