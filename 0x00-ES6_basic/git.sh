#!/bin/bash

# Add all changes to the staging area
git add .

# Prompt the user to input the commit message
echo "Enter your commit message:"
read commit_message

# Commit with the user-provided message
git commit -m "$commit_message"

# Push changes to the default remote repository (assuming it's named 'origin' and the branch is 'main')
git push

