# Testing

Back to [README.md](README.md)<br>

## Table of contents
* [User Story and Feature Testing](#user-story-and-feature-testing)
* [Manuall Test](#manuall-test)
* [Code Validation](#code-validation)
* [Browser Testing](#browser-testing)
* [Responsiveness Tes](#responsiveness-test)
* [LightHouse](#lighthouse)
* [A11y Color Contrast Accessibility Validator](#a11y-color-contrast-accessibility-validator)
* [Bugs](#bugs)


## User Story and Feature Testing
### EPIC | User Navigation
#### Content Navigation
 _As a Site User I can navigate easily around site contents so that I know if it meets my neeeds._

- Navigation bar is visible on every page of the website and fully responsive on different screen sizes.

![Navigation Bar](documentation/readme_images/navigation-bar.png)<br>
- Arrow at the end of each page help users to navigate easily to the top especially in the home page.

![Arrow](documentation/readme_images/arrow-top.png)<br><br>


#### Site Pagenation
* _As a Site User I can view paginated list of reciepes so that easily select one to view._

- On clicking on any recipe category will display a list of recipes. Each page has 6 recipe and the other recipes displayed on the next page that can be displayed on clicking on the next button. 

![Navigation Bar](documentation/readme_images/next-btn.png)<br><br>

### EPIC | User Profile
#### Account Registration
 _As a Site User I can register an account so that I can comment and like._

- Navigation bar is visible on every page of the website and fully responsive on different screen sizes.

![Navigation Bar](documentation/readme_images/navigation-bar.png)<br>
- Arrow at the end of each page help users to navigate easily to the top especially in the home page.

![Arrow](documentation/readme_images/arrow-top.png)<br><br>

#### Account Registration
 _As a Site User I can register an account so that I can comment and like._

* Users can see _Register_ link in the navbr, when clicked user will be navigate to sign-up page to fill the required information.

#### Log in / out
 _As a Site User I can log in/ out so that I keep my account secure._

* After the user register an account, _log-in_ and _log-out_ links can be accessed.

#### Log in Status
 _As a Site user I can see my status if I logged in or out so that I can interact with contents by leaving comments , like and bookmark recipes._

* Once the user logged in, the user name will be diplayed in the home page, my bookmarke and my recipes pages. 

![Username](documentation/readme_images/user-name.png)<br>

* Also the user will see Add recipe and profile dropdown links after logged-in.
* The user can see comment form, so can leave a comment.
* The user can like/dislike and bookmarke recipes.
* If the user click on like or bookmarke buttons without logging-in, the user will be rdeirect to log-in page to log-in.



#### View Bookmarked recipes
 _As a Logged-in User I can view my bookmarked recipes in my profile so that I can find them easily each time I need them._

* Logged-in users can access profile dropdown menu. So the user can open bookmark page and view all bookmarked recipes.

#### View My Published Recipes
 _As a Site User I can view my published recipes so that I can manage all my added recipes from my profile._

 * Logged-in can access my recipes page and view all his own published recipes.


### EPIC | Recipe Mangagement
#### Mange User Recipe
 _As a Site User I can add my own recipe so that I can share it with other users._

* Logged-in users can add their own recipes and have access to them by editing or deleting.
* The user will get confirmation message to notified that the recipe has been created,updated or deleted successfully. 

![My-Recipes Page](documentation/readme_images/my-recipes.png)<br>

####  Admin Managment.
 _As a Site Admin I can create, read, update and delete recipes so that I can manage my site content and share recipes with other users._

* Site admin has the access all CRUD features from the backend.

### EPIC | Recipe Interaction
#### View Recipeslist
 _As a Site User I can view a list of recipes so that I can select one to read._

* All users can view recipes lists for any category on any time.

#### View Recipe
 _As a Site User I can click on a recipe post so that I can read full recipe details._

* All users can show all the detailes of any recipe separately.

#### View Comments
 _As a Site User/Admin I can view comments on an individual recipe so that I can read the conversation._

* All users can read the comment on each recipe. So, csn get an impression of the recipe before applying it.

#### Comment on a recipe
 _As a Site User I can leave comments on a recipe so that I can be involved in the conversation._

* Looged in users can leave a comment on a specific recipe, so he can write his review or experience for this recipe.

#### View Likes
 _As a Site User/Admin I can view the number of likes on each post so that I can see which is the most popular._

* All users can see the how many likes on each recipe. Therfore, he can easily find out the most delicious recipe and try it.

#### Like / Unlike Recipe
 _As a Site User I can like or unlike recipe so that I can interact with the content._

* Logged in users can like/dislike a specific recipe.

#### Add bookmark
 _As a Site User I can bookmark recipe so that I can save it in my profile._

* Logged in users can save any recipe they liked inthe bookmark page so can return to in needed.

### EPIC | Site Management
#### Approve Comments
 _As a Site Admin I can approve or disapprove comments so that I can filter out objectionable comments._

* All the published comment were approved only by the site admin.

[Back to top](<#contents>)

## Manuall Test

### Site Navigation
| Test               | Action     | Expected Outcome       | Pass/Fail |
|-----------------------|------------|-----------------------------------------------|-----------|
| **NavBar**              |            |                                                                    |           |
| Site logo | Click      | Redirect to home page                                          | Pass      |
| Home Link     | Click      | Redirect to home page                       | Pass      |
| Add Recipe             | Click      | Redirect to add recipe form page (Visible only for authenticated users)              | Pass      |
|  Feed Link   | Click      | Open feeds page (Visible only for authenticated users)               | Pass      |
| Bookmarked Link   | Click      | Open bookmarked recipes Page   (Visible only for authenticated users)               | Pass      |
| Profile Link   | Click      | Open profile Page (Visible only for authenticated users)                           | Pass      |
| Contact us Link       | Click    | Only Visible if User is Authenticated  (Visible only for authenticated users)        | Pass      |
| Sign In Link           | Click      | Open sign in Form Page                                                    | Pass      |
| Sign In Link            | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Sign up Link          | Click      | Open Sign up Form page                                                  | Pass      |
| Sign up Link           | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Sign out Link           | Click      | Redirect to the home page                                             | Pass      |
| Sign out Link            | Unvisible    | Only visible if user is logging in                                    | Pass      |
| Nav Links         | Hover      | color changed with adding shadow                                             | Pass      
| **Mobile View**           |            |                                                                    |           |
| Hamburger Icon        | Responsive | Display when screen size width is less than 800px                     | Pass      |
| Hamburger Icon        | Click | Display the navs menu                    | Pass      |
| Hamburger Icon        | Click Outside | Navs links menu closed                 | Pass      |
| Site logo | Click      | Navs links menu closed, Redirect to home page                                   | Pass      |
| Home Link     | Click      | Navs links menu closed, Redirect to home page                       | Pass      |
| Add Recipe             | Click      | Navs links menu closed, Redirect to add recipe form page (Visible only for authenticated users)              | Pass      |
|  Feed Link   | Click      | Navs links menu closed, Open feeds page (Visible only for authenticated users)               | Pass      |
| Bookmarked Link   | Click      | Navs links menu closed, Open bookmarked recipes Page   (Visible only for authenticated users)               | Pass      |
| Profile Link   | Click      | Navs links menu closed, Open profile Page (Visible only for authenticated users)                           | Pass      |
| Contact us Link       | Click    | Navs links menu closed, Only Visible if User is Authenticated  (Visible only for authenticated users)        | Pass      |
| Sign In Link           | Click      | Navs links menu closed, Open sign in Form Page                                                    | Pass      |
| Sign In Link            | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Sign up Link          | Click      | Navs links menu closed, Open Sign up Form page                                                  | Pass      |
| Sign up Link           | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Sign out Link           | Click      | Navs links menu closed, Redirect to the home page                                             | Pass      |
| Sign out Link            | Unvisible    | Only visible if user is logging in                                    | Pass      |
| Nav Links         | Hover      | color changed, adding shadow                                             | Pass      

### Home Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|-----------------------------------------------------|-----------|
| Search field | Input recipe name  | Get all recipes that have this name in it's title          | Pass      |
| **Most Followed Profiles** |  |   |       |
| Profile Avatar | Click   | redirect to the profile owner page               | Pass      |
| Follow/unfollow buttons | Unvisible   | unvisible for logged-out users              | Pass      |
| Follow/unfollow buttons | Click   | follow / unfollow actions              | Pass      |
| **Recipes Post** |  |   |       |
| Recipe Image  | Click   | Redirect to the recipe details page           | Pass      |
| **Recipe Dropdown Menu**| Visible | Visible only for authenticated and recipe owner | Pass      |
| Recipe Dropdown Menu| Click | dropdown menu with edit and delete icons will displayed | Pass      |
| Recipe Dropdown Menu (Delete Icon)| Hover | Color changed to blue | Pass      |
| Recipe Dropdown Menu (Delete Icon)| Click | Recipe deleted | Pass      |
| Recipe Dropdown Menu (Delete Icon)| Click | A success message "Recipe deleted successfully" will displayed | Pass      |
| Recipe Dropdown Menu (Edit Icon)| Hover | Color changed to blue | Pass      |
| Recipe Dropdown Menu (Edit Icon)| Click | Redirect to edit recipe form filled with previous recipe data, add/edit and delete this data  | Pass      |
| Recipe Dropdown Menu (Edit Icon/Save Button)| Click Save | All text fields validated and checked for errors | Pass      |
| Recipe Dropdown Menu (Edit Icon/Save Button)| Click Save | With errors, users will required to adding correct data  |
| Recipe Dropdown Menu (Edit Icon/Save Button)| Click Save | If all correct, recipe will updated, success message "Recipe updated successfully will displayed", users will redirect to this recipe details page  |
| Recipe Dropdown Menu (Edit Icon/Cancle Button)| Click Cancle | Users will redirect to previous page  |
| Like Icon | Click | "log in to like recipe" message will display for unlogged users | Pass      |
| Like Icon | Click | Increase the number of likes by 1 & the icon color changed to blue  | Pass      |
| Like Icon | Click Again | Unlike the recipe and the number of likes decrease by  | Pass      |
| Bookmark Icon | Click | "log in to bookmark recipe" message will display for unauthenticated users | Pass      |
| Bookmark Icon | Click | Save the recipe into bookmark page & the icon color changed to blue | Pass      |
| Bookmark Icon | Click Again | Delete the recipe from bookmark page | Pass      |
| Comment Icon | Click | Redirect to recipe details page so users can read all comments for unauthenticated users. | Pass      |
| Comment Icon | Click | For authenticated users, redirect to recipe details page so users can add new comment in the comment text field | Pass      |
| Comment Icon (Send Button)| Click | Comment created and listed over comments, number of comments increase by 1 | Pass      |
| **Comment Dropdown Menu**| Visible | Visible only for authenticated and comment owner | Pass      |
| Comment Dropdown Menu| Click | dropdown menu with edit and delete icons will displayed | Pass      |
| Comment Dropdown Menu (Delete Icon)| Hover | Color changed to blue | Pass      |
| Comment Dropdown Menu (Delete Icon)| Click | Comment deleted | Pass      |
| Comment Dropdown Menu (Delete Icon)| Click | An info message "Comment deleted" will displayed | Pass      |
| Comment Dropdown Menu (Edit Icon)| Hover | Color changed to blue | Pass      |
| Comment Dropdown Menu (Edit Icon)| Click | Comment text field active and can add or edit the previouse comment | Pass      |
| Comment Dropdown Menu (Edit Icon)| Click | Save / Cancle buttons will displayed | Pass      |
| Comment Dropdown Menu (Edit Icon/Save Button)| Click | Comment updated | Pass      |
| Comment Dropdown Menu (Edit Icon/Save Button)| Click | An info message "Comment edited" will displayed| Pass  |



### New Recipe Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| New Recipe Nav Link             | Display     | Display only if user is authenticated | Pass      |
| New Recipe Nav Link             | Hover     | Color changed to blue, shadow added | Pass      |
| New Recipe Nav Link             | Click     | Color changed to blue, redirect to create recipe form page| Pass      |
| **Create Recipe Form Page** |    |  |  |
| Recipe Form Page | Click Submit       | If any field leaves blank: Display an error alert and form won't Submit  | Pass |
| Recipe Form Page | Click Submit       | check if image size is less or more than the specified size an error alert will displayed allerts the user with the appropriate size | Pass |
| Recipe Form Page | Click Image Field     | choose image window from your device will displayed to choose the image | Pass |
| Recipe Form Page | Click Image Field     |  After choosing image, Change the image button will display| Pass |
| Recipe Form Page / Image Field |  Click Change the image button    | choose image window from your device will displayed to choose the image  | Pass |
| **Submit Button** | Hover     | button background changed to white and button text color changed to blue   | Pass      |
| Submit Button | Click       | If all form fields filled with correct data:1. recipe will created 2. users get a success message "recipe created successfully" 3. user will redirect to this recipe details page | Pass |
| **Cancel Button** | Hover     | button background changed to white and button text color changed to blue   | Pass      |
| Cancel Button | Click       | Users redirect to the previouse page | Pass |

### Feed Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Feed Nav Link     | Display     | Display only if user is authenticated | Pass      |
| Feed Nav Link      | Hover  | Color changed to blue, shadow added | Pass      |
| Feed Nav Link      | Click  | Color changed to blue while feed page is opened, redirect to feed page  | Pass      |
| Feed Nav Link      | Click  |  Feed page display all recipes  created by others  | Pass     |

### Bookmarked Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Bookmarked Nav Link     | Display     | Display only if user is authenticated | Pass      |
| Bookmarked Nav Link      | Hover  | Color changed to blue, shadow added | Pass      |
| Bookmarked Nav Link      | Click  | Color changed to blue while bookmarked page is opened, redirect to bookmarked page  | Pass      |
| Bookmarked Nav Link      | Click  |  Bookmarked page display all recipes that the user bookmarked | Pass     |

### Profile Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Profile Nav Link     | Display     | Display only if user is authenticated | Pass      |
| Profile Nav Link      | Hover  | Color changed to blue, shadow added | Pass      |
| Profile Nav Link      | Click  | Color changed to blue while Profile page is opened  | Pass      |
| Profile Nav Link     | Click  |  Redirect to Profile page | Pass     |
| Profile Page    | Display  |  1. Display profile owner avatar and username.  2. Display number of recipes posts, number of followers and number of following the profile owner was made.  3. Display profile Bio if exist  3. Display all recipes created by profile owner. | Pass     |
| **Profile Page dropdown menu**   | Visible  |  Visible only for profile owner  | Pass     |
| Profile Page dropdown menu   | Hover  |  Icon Color changed to blue | Pass     |
| Profile Page dropdown menu   | Click  |  Display dropdown menu options with: 1. Edit profile 2. Change username 3. Change password | Pass     |
| Profile Page dropdown menu / Edit Profile   | Hover  |  Background color changed to blue  | Pass     |
| Profile Page dropdown menu / Edit Profile   | Click  |  Redirect to edit profile form page   | Pass     |
| Profile Page dropdown menu / Edit Profile   | Click  |  Add data to Bio  field  | Pass     |
| Profile Page dropdown menu / Edit Profile   | Click change image   |  open device window to choose an image  | Pass     |
| Profile Page dropdown menu / Edit Profile page  | Click Save  |  Profile will edited with updated data, users get a success message "profile edited successfully" and redirected to profile page.  | Pass     |
| Profile Page dropdown menu / Edit Profile page  | Click Cancle  |  Redirected to the previouse page  | Pass     |
| Profile Page dropdown menu / Change Username  | Hover  |  Background color changed to blue  | Pass     |
| Profile Page dropdown menu / Change Username  | Click  |  Redirect to edit username form page, username textfield contains the current username   | Pass     |
| Profile Page dropdown menu / Change Username   | Click  |  Add new username | Pass     |
| Profile Page dropdown menu / Change Username | Click Save  |  username will updated, user get success message "username updated successfully", redirect to the profile page | Pass     |
| Profile Page dropdown menu / Change Username | Click Cancle  |  Redirect back to the profile page | Pass     |
| Profile Page dropdown menu / Change Password  | Hover  |  Background color changed to blue  | Pass     |
| Profile Page dropdown menu / Change Password  | Click  |  Redirect to edit Password form page| Pass     |
| Profile Page dropdown menu / Change Password   | Click  | Two passwords textfields, password and confirm password| Pass     |
| Profile Page dropdown menu / Change Password   | Click  | Input new password, If textfields doesn't not match users will get an error alert | Pass     |
| Profile Page dropdown menu / Change Password | Click Save  |  Password will updated, user get success message "password updated successfully", redirect to the profile page | Pass     |
| Profile Page dropdown menu / Change Password | Click Cancle  |  Redirect back to the profile page | Pass     |


### Contact Us Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Contact Us Nav Link             | Display     | Display only if user is authenticated | Pass      |
| Contact Us Nav Link             | Hover     | Color changed to blue, shadow added | Pass      |
| Contact Us Nav Link             | Click     | Color changed to blue, redirect to Contact Us form page| Pass      |
| **Contact Us Form Page** |    |  |  |
| Contact Us Form Page | Hover Send button      | Background color changed to white and text color changed to blue| Pass |
| Contact Us Form Page | Click Send       | If any field leaves blank: Display an error alert & error message, form won't Submit  | Pass |
| Contact Us Form Page | Click Send       | If form fields filled correctly, data will posted to the and the user get a success message with "Thank you for your message.." and the user redirected to the home page | Pass |
| Contact Us Form Page | Hover Cancle button      | Background color changed to white and text color changed to blue| Pass |
| Contact Us Form Page | Click Cancle       | User will redirected to the previouse page | Pass |

### Django Authentiaction Pages
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| **Sign up Page**    |                                          |                                            |           |
| Sign up Link              | Visible               | Visisble to logged out users                     | Pass      |
| Sign up Link              | Hover               | Color changed to blue, shadow added              | Pass      |
| Sign up Link              | Click               | Redirect to sign up form page          | Pass      |
| Username field             | Leave blank, Insert an exist username            | On submit: alert error message will disply          | Pass      |
| Password field             | Insert incorrect format                   | On submit: alert error message will disply    | Pass      |
| Password field             | Passwords don't match                     | On submit: alert error message will disply    | Pass      |
| Sign Up button(form valid) | Hover  | Button background changed to blue, button text changed to white               | Pass      |
| Sign Up button(form valid) | Click                                     | Redirect to Sign in page                  | Pass      |
| Sign Up button(form valid)   | Click              | Success message confirming sign up displayed    | Pass      |
| Success message | Disappear     | Success message disappear after 3 seconds     | Pass      |
| **Sign In Page**                   |                                           |                                            |           |
| Username field             | Leave blank                               | On submit: alert error message will disply    | Pass      |
| Username field             | Insert wrong username                     | On submit: alert error message will disply   | Pass      |
| Password field             | Leave blank                               | On submit: alert error message will disply           | Pass      |
| Password field             | Insert wrong password                     |      On submit: alert error message will disply        | Pass      |
| Login button(form valid)   | Hover           |Button background changed to blue, button text changed to white       | Pass      |
| Login button(form valid)   | Click             | Redirect to Home page                      | Pass      |
| Login button(form valid)   | Click              | Success message confirming sign in displayed   | Pass      |
| Success message | Disappear     | Success message disappear after 3 seconds     | Pass      |


[Back to top](<#contents>)


## Code Validation
### CSS
The CSS code was tested by direct input using [W3 Jigsaw Validator](https://jigsaw.w3.org/css-validator/) with no errors.<br>

![CSS-validate](documentation/readme_images/css-validator.png)<br><br>


## Browser Testing
The website was tested on different browsers for assuring the features work accordingly.
* Chrome
* Edge
* Firefox


[Back to top](<#contents>)

## Responsiveness Test
- The website was tested on a variety of devices such as Desktop, Laptop, iPhone SE, iPhoneXR, iPhone 12 Pro iPad, and iPad Air to ensure responsiveness on different screen sizes on [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/).


| Desktop    | Display <1280px       | Display >1280px    |
|------------|-----------------------|--------------------|
| Render     | pass                  | pass               |
| Images     | pass                  | pass               |
| Links      | pass                  | pass               |

| Tablet     | iPad                  |iPad Air            | iPad Pro  | Surface Pro 7 |
|------------|-----------------------|--------------------|-----------|----------|
| Render     | pass                  | pass               | pass      | pass     |
| Images     | pass                  | pass               | pass      | pass     |
| Links      | pass                  | pass               | pass      | pass     |

| Phone      | iPhone SE/XR       |   iPhone 12pro     |  Samsung Galaxy S8+       |
|------------|-----------------------|--------------------|----------------------|
| Render     | pass                  | pass               | pass      | 
| Images     | pass                  | pass               | pass      | 
| Links      | pass                  | pass               | pass      | 

[Back to top](<#contents>)

## LightHouse 
Th application was tested using Google Lighthouse in Chrome Developer Tools. All project's pages was tested and get the following results:

<details><summary><b>Lighthouse Home Page Result</b></summary>

![Lighthouse Home](documentation/readme_images/lighthouse.png)<br>
</details><br/>

<details><summary><b>Lighthouse Add Recipe Page</b></summary>


![Lighthouse Lighthouse Add Recipe Page](documentation/readme_images/addrecipe-lighthouse.png)
</details><br/>

<details><summary><b>Lighthouse Feed Page</b></summary>

![Lighthouse Sweets](documentation/readme_images/feed-lighthouse.png)
</details><br/>


<details><summary><b>Lighthouse Bookmarked Page</b></summary>

![Lighthouse Bookmarked](documentation/readme_images/bookmarked-lighthouse.png)
</details><br/>


<details><summary><b>Lighthouse Profile Page</b></summary>

![Lighthouse Profile](documentation/readme_images/profile-lighthouse.png)
</details><br/>


<details><summary><b>Lighthouse Contact-us</b></summary>

![Lighthouse Contact us](documentation/readme_images/contact-lighthouse.png)
</details><br/>


<details><summary><b>Lighthouse Sign In Page</b></summary>

![Lighthouse Sign in ](documentation/readme_images/signin-lighthouse.png)
</details><br/>


<details><summary><b>Lighthouse Sign Up Page</b></summary>

![Lighthouse Sign Up Page](documentation/readme_images/signup-lighthouse.png)
</details><br/>


## A11y Color Contrast Accessibility Validator
![Accessibility Validator](documentation/readme_images/color-contract.png)<br>


[Back to top](<#contents>)

## Bugs 
### Resolved

* 1. Bug: Uncaught runtime errors:ERROR Script error. Solution was to add 
    "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    } to package.json file. This solution is from [stackoverflow](https://stackoverflow.com/questions/76204100/uncaught-runtime-errors-in-localhost3000)


* 2. Bug: POST unutherized error. Solution is to install jwt-decoded.

* 3. Bug:  Attempted import error: 'jwt-decode' does not contain a default export (imported as 'jwtDecode'). solution was  import * as jwt_decode from 'jwt-decode';

* 4. Warning: Warning findDOMnODE. Solution : delete  <React.StrictMode> from index.js

[Back to top](<#contents>)


Back to [README.MD](README.md)