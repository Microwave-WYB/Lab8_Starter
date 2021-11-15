# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline?  
   We should run the automated tests **within a GitHub action that runs whenever code is pushed**. We should not run tests manually before pushing the code because the purpose to have automated tests because the testing environment may be different between each local machines and if you run them manually what is the point to have "automated" tests. We should run tests each time code is pushed so that we can quickly identify the cause of the problem and fix the bug.

2. No
3. No. A "message" feature is too complicated and involves many functions. Unit tests focus on testing small sets of functions.
4. Yes