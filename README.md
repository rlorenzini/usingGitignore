# Using Gitignore

Use this as an example of using git ignore.
******************************************************************************************************************************
<br/>
  
**```$ sudo npm install gitignore -g```**
<br/>Installs gitignore as a global command. Only needs to be done once. <br/>**NOTE:** this does not create individual files for each folder. The best practice is to install the files into the project folders you are pushing with **git**.

**Using GitIgnore**

1. **```$ touch .gitignore```**
<br/>Create a gitignore file inside of your *working directory*. This needs to be done in the *most parent/root folder*.

2. Using your code editor, open the file (files beginning with . are hidden by default). You can also edit the file in the command-line interface.

3. Write the files/folders into the **.gitignore** file you wish to ignore. This can be done after **```git init```** but needs to be done before **```git add```.**

**NOTE:** If done before **```git init```** there will not be a conflict. If done after **```git commit```** or **```git push```**, you will need to use **```git rm --cached node_modules -r```** to remove the node_modules folder from the GitHub staging area. **NOTE:** if your node_modules are nested, you may need to direct the removal into the folder. ```git rm --cached folderName/node_modules -r```

4. Run through the normal git commands. (git add, commit, and push)

<br/>Refer to the **.gitignoreexample** file to see how you can manually write files to be ignored. Note: you do not need to write the file path (/server/node_modules). If you wish to ignore all node_modules folders, you can write just node_modules. GitHub will automatically ignore all instances of the file or folder within subsequent folders, which is why your .gitignore file needs to be in your most parent/root folder.

<br/>Refer to the **.gitignore** file for a standard file setup.

