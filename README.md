



# Healthy - Healthy cooking recipes community

![Responsive image](documentation/readme_images/responsive.png)<br>

## CONTENTS

* [Introduction](#introduction)
* [User Experience UX](#user-experience-ux)
    * [User Stories](#user-stories)
    * [Design](#design)
        * [Colours](#colours)
        * [Fonts](#fonts)
        * [Wireframes](#wireframes)
* [Agile Methodology](#agile-methodology)
* [Features](#features)
    * [Home Page](#home-page) 
    * [New Recipe Page](#new-recipe-page)
    * [Registration](#registration)
    * [Feed Page](#feed-page)
    * [Bookmarked Page](#bookmared-page)
    * [Profile Page](#Profile-page)
    * [Contact-us Page](#contact-us-page)
* [Full Testing](#full-testing)
* [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Frameworks and Software](#frameworks-and-software)
* [Deployment](#deployment)
    * [Forking this Project](#forking-this-project)
    * [Cloning this Project](#cloning-this-project)
* [Credits](#credits)
    * [Contents](#contents)
    * [Resources](#resources)
* [Acknowledgements](#acknowledgements)

## Introduction

Healthy website is a social media platform for healthy cooking recipes. Users are able to share their own healthy recipes with others. This social platform targets users who are interested in healthy cooking recipes. Each user has the ability to share a post with a recipe title, ingredients and recipe directions so others can apply it easily. Users are given the ability also to like, leave comments and bookmarks others recipes.

The fully deployed project can be accessed at [Here](https://pp4-yummy-d1fe3ffd7115.herokuapp.com/)


## User Experience UX

### User Stories

|     EPIC               | User Story |
|     ---                |     ---    |
|  **User Navigation**      | As a user I can view a navbar from every page so that I can navigate easily between pages|
|                        | As a logged out user I can see sign in and sign up options so that I can sign in/sign up|
|                        | As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh |
|                        | As a user I can view user's avatars so that I can easily identify users of the application                                         
|  **User Authentication**    | As a user I can create a new account so that I can access all the features for signed up users |
|                        | As a user I can sign in to the app so that I can access functionality for logged in users |
|                        | As a user I can tell if I am logged in or not so that I can log in if I need to |
|                        | As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised |
|  **Profile Management**  | As a user I can view basic profile information so that I can check user prfile page |
|                         | As a user I can see a list of the most followed profiles so that I can see which profiles are popular | 
|                         | As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them |
|                          | As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed|
|                          | As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them|
|                          | As a logged in user I can edit my profile so that I can change my profile picture and bio|
|                          | As a logged in user I can update my username and password so that I can change my display name and keep my profile secure|
|    **Recipes Management**  | As a logged in user I can create recipes so that I can share my healthy recipes with the world!|
|                          | As a user I can view the details of a single recipe so that I can learn more about it|
|                          | As a logged in user I can like a recipe post so that I can show my support for the recipes that interest me|
|                    | As a user I can view all the most recent recipes, ordered by most recently created first so that I am up to date with the newest one|
|                    | As a user I can search for recipes with keywords so that I can find the recipes and user profiles I am most interested in. |
|                    | As a logged in user I can view the recipes I liked so that I can find the recipes I enjoy the most |
|                    | As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about |
|                    | As an owner of a comment I can delete my comment so that I can control removal of my comment from the application |
|                    | As an owner of a comment I can edit my comment so that I can fix or update my existing comment |
|                    | As a logged in user I can save a recipe post so that I can show my show it when i need. |
|                    | As a logged in user I can view the recipes I have bookmarked so that I can find the recipes I enjoy the most |
|   **Users Contacts**   | As a user, I would like to be able to contact the admin so that I can send any issues or suggestions  |

[Back to top](<#contents>)

### Design

#### Colours
* The colour scheme was used in the project based on blue color and its shades.White color for main background for each div component, light blue for the main background, dark blue for nav links and headers. It is a great light shade and suitable for the text in which for creating a good contrast. 

![color-pallete](documentation/readme_images/color_pallette.jpg)


#### Fonts
* The fonts I used for the site were imported from [Google Fonts](https://fonts.google.com/):<br>
**Body,** *Alegreya, cursive, serif*<br>
**Navbar:** *Alegreya, cursive, sans-serif*<br>


#### Wireframes
* The wireframes for desktop and mobile were created with [Balsamiq](https://balsamiq.com/) 

<details>

<summary>Home Page</summary>

![Home Page](documentation/readme_images/Home.png)
</details>

<details>

<summary>Feed Page</summary>

![Feed](documentation/readme_images/Feed.png)
</details>

<details>

<summary>Bookmark page</summary>

![Bookmarked](documentation/readme_images/Bookmark.png)
</details>

<details>

<summary>Profile page</summary>

![Profile page](documentation/readme_images/Profile.png)
</details>


<details>

<summary>Edit Profile</summary>

![Edit Profile](documentation/readme_images/Edit-profile.png)
</details>

<details>

<summary>Add recipe </summary>

![Add recipe](documentation/readme_images/add_recipe.png)
</details>

<details>

<summary>Edit recipe </summary>

![Edit recipe](documentation/readme_images/edit-recipe.png)
</details>

<details>

<summary>Sign in</summary>

![Sign in](documentation/readme_images/Sign-in.png)
</details>

<details>
<summary>Sign up </summary>

![Sign up](documentation/readme_images/Sign-up.png)
</details>

<details>
<summary>Contact us </summary>

![Contact us ](documentation/readme_images/contact_us.png)
</details>


[Back to top](<#contents>)

## Agile Methodology
The project was developed using Agile methodology. Product backlog is detailed into three levels:<br>
* Epics which is a large quantities of related work, which were five epics for the project. Each of them has a list of features.
* A feature, which is a service that delivers value to end users. 
* Each feature is broken down into a number of simpler tasks which are user stories. 

As the user stories were achieved, they were moved from To Do list, to In-Progress, and finally Done lists. You can have a look to the project board [here](https://github.com/users/AlaYousef/projects/5/views/1)


[Back to top](<#contents>)

## Features
### Home Page
* The home page contains many features fot all users, registered or unregistered users. All recipes posts displayed on this page. So, users have the ability to read all the post content and search for a specific recipe post.
* Registered users have the ability to interact with posts such as like, leave comments, bookmark, follow and unfollow other users in addition to, send a message for questions or suggestions to website admin.

Home Page for registered users.

![Home](documentation/readme_images/home-registeredUsers.png)<br>

Home Page for unregistered users.

![Home](documentation/readme_images/home-unRegisterdUers.png)<br>

#### Header

* Logo with site name positioned in the top left of the header section with Add Recipe Icon beside it. This logo is linked to the home page to facilitate navigation for users. <br>
* The navigation bar displayed at the right top of header section includes all links to the various other pages.
* When the user logged in, nav bar changed to displayed more links for more features (Feed, Bookmarked, Sign out, Profile and Contact us).
* The navigation bar is fully responsive, collapsing into a hamburger on small screen sizes.<br>

![Navigation Bar](documentation/readme_images/navbar.png)<br><br>

#### Most Followed Profiles Section
* A container with most followed users is displayed at the right side of the home page.
* This container contains an avatar and username. Avatar icon is clickable so users can click on and redirect to this user's profile page and view profile content so can deciede to follow or unfollow this user later on after regestration. 
* For logged-in users follow/unfollow buttons are displayed beside each profile name, so users can click in case to follow/unfollow.

Most Followed Profiles for logged-out users

![Profile container](documentation/readme_images/profile-container.png)<br>

Most Followed Profiles For Logged-in users

![Profile container  loggedin](documentation/readme_images/profile-container-loggedin.png)<br>


#### Recipes Posts Section
* Recipes posts are displayed in the home page and visible for all users.
* All users can read posts content and detailes and have the ability to visit each recipe owner's profile.
* Logged-in users can interact with these posts by leave a comment , like, bookmark and follow/unfollow the post owner.
* When the user like a recipe the numbers of likes will increase by 1. Users can also unlike the recipe by clicking once more on like icon so number of likes will decrease by 1 and like will be deleted.
* Users have the ability to bookmark a recipe by clicking on bookmark icon so this recipe will be saved in th bookmarked page.
* Users can leave a comment by clicking on comment icon, so users can interact with each others by comments. After post the comment the number of comments will increase by 1.
![recipe interaction](documentation/readme_images/recipe-interaction.png)<br>

* If the user would like to edit/delete their own comment can do that by clicking on dropdown menu at right side of comment owner uername. 
![Comment dropdown menu](documentation/readme_images/comment-dropdown.png)<br>

* If the user click on delete icon the comment will be deleted, numbers of comment will decrease by 1 and the user will get an info message that comment deleted.
![Comment dropdown delete msg](documentation/readme_images/comment-delete-msg.png)<br>

* If the edit icon is clicked the user comment edit form will be displayed so the user can edit it.
![Comment dropdown edit](documentation/readme_images/comment-edit.png)<br>

* After editing the user will get an info message "Comment edited".
![Comment dropdown edit msg](documentation/readme_images/comment-edit-msg.png)<br>



[Back to top](<#contents>)

### New Recipe Page
* In case users would like to add a new recipe post. Users can click on _New Recipe_ link on the navbar.
* Users will redirect to create recipe form as shown below.
![Recipe Create Form](documentation/readme_images/recipe-form.png)<br>

* If users leave a field blank, an error message will displayed to alert users to enter fill out the form before submitting.
![Recipe Form Error](documentation/readme_images/recipe-form-error-msg.png)<br>

* After filling the form correctly and click on _create_ button, the recipe post will vreated and the user will get a confirmation message "Recipe created successfully" and redirected to the recipe page. 
![Recipe created msg](documentation/readme_images/recipe-created-msg.png)<br>

* Each recipe has a dropdown menu which displayed just for the recipe owner.
* The dropDown menu has two option, one for editing to edit the recipe amd the other for deleting to delete the recipe.
![Recipe dropdown menu msg](documentation/readme_images/recipe-dropdown.png)<br>

* When the user click on delete icon <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/regular/trash-can.svg" width="15" height="15"> the recipe will be deleted with a confirmation message " Recipe deleted successfully", and the user will be redirected to the previous page. 
![Recipe dropdown delete msg](documentation/readme_images/recipe-delete-msg.png)<br>

* When the user click on edit icon <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svg/edit-light.svg" width="15" height="15">. User will be redirected to edit recipe form that has the recipe information so that users cad edit it and click save button.  
![Recipe dropdown edit form](documentation/readme_images/recipe-edit-form.png)<br>

* The user will get a confirmation message with "Recipe updated successfully" after editing ad redirect to the recipe details page.  

![Recipe dropdown edit msg](documentation/readme_images/recipe-edit-msg.png)<br><br>



### Registration
* Registration, log in and log out are implemented using Django allauth library.

#### Sign-up Page
* To register an account, users required to enter uersname, password and password confirmation.
* After all information entered correctly,  a confirmation message with "Successfully signed" will displayed and the users will redirected to sign in page. 

![Register Page](documentation/readme_images/register.png)<br><br>

* Sign-up confirmation message.
![Register Page](documentation/readme_images/register2.png)<br>

#### Sign-in Page
* Users is required to enter username and password to log in.
* After the user enter the required information, the user will redirect to the home page with a confirmation message "Signed in successfully".
* Once the user logged in, new links in navigation bar will appear; _Feed_, _Bookmarked_,_Sign-out_,_Profile_ and _Contact-us_.
![Log-in Page](documentation/readme_images/sign-in1.png)<br>

* Sign in confirmation message.
![Log-in Message](documentation/readme_images/sign-in2.png)<br><br>

#### Sign-out Page
* Users will redirect to the _Home_ page after signing out.


### Feed Page
 * Feed page has all recipes posts that posted by other users arranged from newest created one to oldest.

![Feed Page](documentation/readme_images/feeds.png)<br><br>

### Bookmarked Page
 * Bookmarked page has all recipes posts that the user bookmarked,arranged from the last post has bookmarked so the user can return to it when needed.
 * Users cann't bookmarked their own posts.

![Bookmarked Page](documentation/readme_images/Bookmarked.png)<br><br>


### Profile Page
 * Profile page contains informations about the profile owner such as numer of posts, number of users that the owner follow and number of followers that follows this owner.
 * In addition to, this page contains all the posts that the profile owner was created. 

![Profile Page](documentation/readme_images/profile-page.png)<br><br>

 * Dropdown menue with features that allows users to manage their own profile and account. these features are _edit profile_, _change username_ and _change password_ options.

![Profile Dropdown menu](documentation/readme_images/profile-dropdown.png)<br><br>

**1.Edit Profile**
* Users have the ability to add/change their profile image and add/change their _BIO_.

![Profile menu editing](documentation/readme_images/edit-profile-option.png)<br>

* Users will get a confirmation message with "profile edited successfully" after editing.
![Profile menu editing msg](documentation/readme_images/edit-profile-msg.png)<br><br>

**2.Change Username**
* Users have the ability change their username.
* when choosing this option, the user will be redirect to edit username page.

![Profile menu change username](documentation/readme_images/edit-username.png)<br>

* After changing username and click save, users will redirect to the profile page with a confirmation message "username updated successfully".

![Profile menu change username msg](documentation/readme_images/edit-username-msg.png)<br><br>

**2.Change Password**
* Users have the ability change their password by enter the new password and confirm it.
* when choosing this option, the user will be redirect to edit password form page.

![Profile menu change password](documentation/readme_images/edit-password.png)<br>

* After changing password and click save, users will redirect to the profile page with a confirmation message "password updated successfully".

![Profile menu change username msg](documentation/readme_images/edit-password-msg.png)<br><br>

### Contact-us Page
 * Users have the ability to contact with the site admin to send any questions or suggestions by sending a message from the contact form.

![contact us Page](documentation/readme_images/contact-form.png)<br><br>

* After sending the form user will get a confirmation message with "Your message has been recieved..." and redirect to the home page.

![contact us Page msg](documentation/readme_images/contact-msg.png)<br><br>




## Full Testing
The testing documentation can be found at [TESTING.md](TESTING.md)

[Back to top](<#contents>)


## Technologies Used
### Languages

* [HTML5](https://en.wikipedia.org/wiki/HTML) - Provides site content and structure.
* [CSS3](https://en.wikipedia.org/wiki/CSS) - Provide the website styling.
* [React](https://react.dev/) - React lets to build user interfaces out of individual pieces called components.

### Frameworks & Software
* [React Bootstrap4](https://react-bootstrap-v4.netlify.app/) -React Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
* [Balsamiq](https://balsamiq.com/) - The Tool that used to create the wireframes.
* [Github](https://github.com/) - Used to host and edit the website.
* [Gitpod](https://www.gitpod.io) - The  development environment that used for the wesite development.
* [Heroku](https://en.wikipedia.org/wiki/Heroku) - A cloud platform that that used to deploy the application.
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Used to test performance, accessibility  of site.
* [a11y Color Contrast Accessibility Validator](https://color.a11y.com/Contrast/) - Used to test color contrast on the website.
* [Favicon](https://favicon.io/) - Used to create the favicon.
* [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to test responsiveness.
* [Am I Responsive](https://ui.dev/amiresponsive)- Used to show the website on variuos devices.
* [Cloudinary](https://cloudinary.com/) - A service that hosts all images in the project.


## Deployment

The project was deployed to [Heroku](https://www.heroku.com). To deploy, please follow these steps:

1. Now you can save all the files and prepare for the first commit and push to Github by writing the lines below.

* ```git add .```
* ```git commit -m "Deployment Commit```
* ```git push```

2. Now it's time for deployment. Scroll to the top of the settings page in Heroku and click the 'Deploy' tab. For deployment method, select 'Github'. Search for the repository name you want to deploy and then click connect.

3. Scroll down to the manual deployment section and click 'Deploy Branch'. Hopefully the deployment is successful!

The live link to the 'Yummy' site on Heroku can be found [here](https://cooking-pp5-f4e5b26840e2.herokuapp.com/). And the Github repository can be found [here](https://github.com/AlaYousef/portfolio-project5).

[Back to top](<#table-of-content>)

### How To Fork 

It is possible to do a independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to do changes in the copy without affecting the original repository. To fork the repository, take these steps:

1. After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.
![Fork the Project](documentation/readme_images/fork.jpg)<br><br>

[Back to top](<#table-of-content>)

### Cloning this Project.

To clone and set up this project follow these steps:

1. When you are in the repository, find the code tab and click it.
2. To the left of the green GitPod button, press the 'code' menu. There you will find a link to the repository. Click on the clipboard icon to copy the URL.
3. Use an IDE and open Git Bash. Change directory to the location where you want the cloned directory to be made.
4. Enter the command git clone followed by the copied URL
5. Your clone was created.

[Back to top](<#contents>)

## Credits

### Content
* All recipes content and details was taken from this recipes website [Delish](https://www.delish.com/)

### Resources
* Website inspiration from [Code Institute: Moments Application](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/).

* Agile methodology inspired from [Knowledgehut](https://www.knowledgehut.com/blog/agile/features-in-agile-methodology).


* User stories inspired from [Code Institute: Moments Application](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/).

* Notification messages inspired from this application [worth-a-trip](https://worth-a-trip-drf-40e2fa952827.herokuapp.com/)

* How to add these notifications is from [DEV](https://dev.to/adyasha8105/react-notifications-33do).

### Code

* Code of creating profile, posts, authentication components inspired from [Code Institute: Moments](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/).



[Back to top](<#contents>)

## Acknowledgements
This App was completed as a Portfolio Project 5 for the Full Stack Software Developer Diploma at the [Code Institute](https://codeinstitute.net/). I would like to thank a lot my mentor [Gareth McGirr](https://github.com/Gareth-McGirr), the Slack community and specially tutor support. And all at the Code Institute for their help.

[Back to top](<#contents>)


