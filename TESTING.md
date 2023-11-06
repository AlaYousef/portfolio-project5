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
| Test               | Action     | Expected Outcome                                                    | Pass/Fail |
|-----------------------|------------|--------------------------------------------------------------------|-----------|
| **NavBar**              |            |                                                                    |           |
| Site Name (logo) | Click      | Redirect to home page                                                | Pass      |
| Home Link             | Click      | Redirect to home page                                                | Pass      |
| Dinner Link   | Click      | Open Dinner Recipes Page                                           | Pass      |
| Sweets Link   | Click      | Open Sweets Recipes Page                                           | Pass      |
| Coctailes Link   | Click      | Open Coctailes Recipes Page                                           | Pass      |
| Add Recipe Link       | Click      | Open Add Recipe Form Page                                             | Pass      |
| Add Recipe Link       | Unvisible    | Only Visible if User is Authenticated                                    | Pass      |
| Profile Dropdown Menu     | Click      | Open profile dropdown menu (My Bookmarks, My Recipes)                                            | Pass      |
| Profile Dropdown Menu | Unvisible      | Only Visible if User is Authenticated                                            | Pass      |
| My Bookmarks Link       | Click      | Open My Bookmarks page                                               | Pass      |
| My Recipes Link       | Click    | Open My Added Recipes page                                   | Pass      |
| Log In Link           | Click      | Open Login Form Page                                                    | Pass      |
| Log In Link           | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Register Link          | Click      | Open Sign up Form page                                                  | Pass      |
| Register Link          | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Logout Link           | Click      | Display logout confirmation message                                            | Pass      |
| Logout Link           | Unvisible    | Only visible if user is logging in                                    | Pass      |
| Nav Links         | Hover      | Resize text (larger), Borderd                                                     | Pass      
| **Mobile View**           |            |                                                                    |           |
| Hamburger Icon        | Responsive | Display when screen size width is less than 1000px                     | Pass      |
| Hamburger Icon        | Click | Display Offcanvas with navs menu                    | Pass      |
| Site Name (logo) | Click      | Redirect to home page                                           | Pass      |
| Home Link             | Click      | Redirect to home page                                                  | Pass      |
| Dinner Link   | Click      | Open Dinner Recipes Page                                           | Pass      |
| Sweets Link   | Click      | Open Sweets Recipes Page                                           | Pass      |
| Coctailes Link   | Click      | Open Coctailes Recipes Page                                           | Pass      |
| Add Recipe Link       | Click      | Open Add Recipe Form Page                                             | Pass      |
| Add Recipe Link       | Unvisible    | Only Visible if User is Authenticated                                    | Pass      |
| Profile Dropdown Menu     | Click      | Open profile dropdown menu (My Bookmarks, My Recipes)                                            | Pass      |
| Profile Dropdown Menu | Unvisible      | Only Visible if User is Authenticated                                            | Pass      |
| My Bookmarks Link       | Click      | Open My Bookmarks page                                               | Pass      |
| My Recipes Link       | Click    | Open My Added Recipes page                                   | Pass      |
| Log In Link           | Click      | Open Login Form Page                                                    | Pass      |
| Log In Link           | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Register Link          | Click      | Open Sign up Form page                                                  | Pass      |
| Register Link          | Unvisible    | Unvisible if user is Authenticated                                     | Pass      |
| Logout Link           | Click      | Display logout confirmation message                                            | Pass      |
| Logout Link           | Unvisible    | Only visible if user is logging in                                    | Pass      |
| Nav Links         | Hover      | Resize text (larger), Borderd                                                     | Pass      
|                       |            |                                                                    |           |
| **Footer**               |            |                                                                    |           |
| All Social Media links             | Click      | Open in new tab and to correct location                            | Pass      |

### Home Page
| Test               | Action     | Expected Outcome                                                    | Pass/Fail |
|-----------------------|------------|--------------------------------------------------------------------|-----------|
| Dinner Recipes Card | Click   | Open Dinner Recipes page               | Pass      |
| Sweets Recipes Card | Click   | Open Sweets Recipes page               | Pass      |
| Coctailes Recipes Card | Click   | Open Coctailes Recipes page               | Pass      |
| **Recent Recipes** |  |   |       |
| Recipe Card Title  | Click   | Open Recipe Details page            | Pass      |
| Top Arrow | Click | Navigate to Home Page Top | Pass      |
| Top Arrow | Hover | Change Background Color | Pass      |

### Dinner Page
| Test               | Action     | Expected Outcome                                                    | Pass/Fail |
|-----------------------|------------|--------------------------------------------------------------------|-----------|
| Recipe Card | Display correct content | Display correct image, recipe title, Preperation Time and Author     | Pass      |
| Recipe Card | Hover | Add Transparent Background     | Pass      |
| Recipe Card Title | Hover | Underline and Change Title Color | Pass      |
| Recipe Card Title | Click | Redirect to Correct Recipe's Detail Page. | Pass      |
| Recipe Card | Order       | Recent Recipe Sorted First                                                 | Pass      |
| **Pagination** |    |    |       |
| Next Button | Visible   | Visible when each page paginate 6 recipe in each page     | Pass      |
| Next Button | Click   | Navigate to the next page which conatin the reset of Recipes  | Pass      |
| Prev Button | Click   | Navigate to the previouse page  | Pass      |

### Sweets Page
| Test               | Action     | Expected Outcome                                                    | Pass/Fail |
|-----------------------|------------|--------------------------------------------------------------------|-----------|
| Recipe Card | Display correct content | Display correct image, recipe title, Preperation Time and Author     | Pass      |
| Recipe Card | Hover | Add Transparent Background     | Pass      |
| Recipe Card Title | Hover | Underline and Change Title Color | Pass      |
| Recipe Card Title | Click | Redirect to Correct Recipe's Detail Page. | Pass      |
| Recipe Card | Order       | Recent Recipe Sorted First                                                 | Pass      |
| **Pagination** |    |    |       |
| Next Button | Visible   | Visible when each page paginate 6 recipe in each page     | Pass      |
| Next Button | Click   | Navigate to the next page which conatin the reset of Recipes  | Pass      |
| Prev Button | Click   | Navigate to the previouse page  | Pass      |

### Coctailes Page
| Test               | Action     | Expected Outcome                                                    | Pass/Fail |
|-----------------------|------------|--------------------------------------------------------------------|-----------|
| Recipe Card | Display correct content | Display correct image, recipe title, Preperation Time and Author     | Pass      |
| Recipe Card | Hover | Add Transparent Background     | Pass      |
| Recipe Card Title | Hover | Underline and Change Title Color | Pass      |
| Recipe Card Title | Click | Redirect to Correct Recipe's Detail Page. | Pass      |
| Recipe Card | Order       | Recent Recipe Sorted First                                                 | Pass      |
| **Pagination** |    |    |       |
| Next Button | Visible   | Visible when each page paginate 6 recipe in each page     | Pass      |
| Next Button | Click   | Navigate to the next page which conatin the reset of Recipes  | Pass      |
| Prev Button | Click   | Navigate to the previouse page  | Pass      |

### Recipe Detail Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Recipe Content   | Display  | Display correct recipe image, title, author, prep/cook time, description, ingredients and Steps                  | Pass      |
| Like button (Outline)      | Click               | If User is not Authenticated, Redirect to Log in Page  | Pass      |
| Like button (Outline)      | Click               | If User is Authenticated, Clicking the outlined Like Button will change it to solid one  | Pass      |
| Like button (Outline)      | Click               | The Likes Number increase by 1 | Pass      |
| Bookmark button (Outline)      | Click               | If User is not Authenticated, Redirect to Log in Page  | Pass      |
| Bookmark button (Outline)      | Click               | If User is Authenticated, Clicking the outlined Like Button will change it to solid one | Pass      |
| Bookmark button (Outline)      | Click               | Recipe Added to My Bookmarks Page | Pass      |
| Bookmark button (Outline)      | Click               | Success Message will Display Informing Uers that Recipe has been Added to their Bookmarks               | Pass      |
| Bookmark button (Outline)      | Click               | Success message disappear after 3 seconds       | Pass      |
| Bookmark button (Solid)        | Click               | Clicking the solid bookmark changes it back to an outlined bookmark                                                     | Pass      |
| Bookmark button (Solid)        | Click               | Recipe is removed from My bookmarks Page  | Pass      |
| Bookmark button (Solid)        | Click               | Success Message will Display Informing Uers that Recipe has been Removed from their Bookmarks                  | Pass      |
| Bookmark button (Outline)      | Click               | Success Message Disappear after 3 seconds       | Pass      |
| **Comments**                 |              |   |      |
| Comments   | Display             | Displays correct name, time, author and comment content      | Pass      |
| Comments   | Display             | Comments are ordered oldest to newest    | Pass      |
| Leave a Comment Form  | Display   | Display If Uers is Authenticated  | Pass      |
| Submit Button | Click   | If empty On Form will not Submit, Display Error Message | Pass      |
| Comment Form / Submit button | Click Submit  | Update the Page, Display message "Your comment is awaiting approval" | Pass      |
| Comment Form / Submit button | Click | If Approved, the comment will be published in Commets section | Pass  |
| Comment Form / Submit button | Click | If Not Approved, comment will Not be published | Pass  |
| Delete Button  |  |  |   |
| Delete Button  | Visible | Visible If the User is teh Comment Author | Pass  |
| Delete Button  | Click | Display Comment Delete form deleting | Pass  |
| Delete Button/Yes Button  | Click | Comment Deleted, Display message "Comment Deleted Succssfully" | Pass  |
| Delete Button/Cancel Button  | Click | Redirect to Recipe's Details Page | Pass  |



### My Bookmarks Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| My Bookamarks Page          | Click               | Dispaly All User's Bookkmarked Recipes   | Pass   |
| Recipe Card       | Display | Display correct recipe image, title,author    | Pass      |
| Recipe Card       | Click on Recipe Title  | Redirect to the recipe's detail page | Pass      |
| Recipe Card       | Pagination           | Bookmarks page have 6 Recipes, after that user can paginate to next page | Pass      |


### My Recipes Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| My Recipes Page          | Click               | Dispaly All User's Created Recipes   | Pass      |
| Recipe Card       | Display | Display correct recipe image, title,author    | Pass      |
| Recipe Card          | Display  |   Dispaly User Name as Author   | Pass      |
| Recipe Card       | Click on Recipe Title  | Redirect to the recipe's detail page | Pass      |
| **Edit Button**         |   |      |       |
| Edit Recipe Button      | Display     | visible only if the user is the recipe author | Pass      |
| Edit Recipe Button      | Hover               | Text Link undelined and color changed | Pass      |
| Edit Recipe Button       | Click               | Open Edit Recipe Form   | Pass      |
| **Delete Button**      |                |    |       |
| Delete Recipe Button       | Display     | visible only if the user is the recipe author | Pass      |
| Delete Recipe Button     | Hover        | Text Link undelined and color changed   | Pass      |
| Delete Recipe Button       | Click      | Display Delete Recipe Form  | Pass      |
| Delete Recipe Button / Yes Button     | Click      | Recipe Deleted, Diaply success Delete Message| Pass      |
| Delete Recipe Button / No Button     | Click      | Redirect to My Recipes Page| Pass      |


### Add Recipe Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Add Recipe Link                   | Display     | Display only If User is Authenticated | Pass      |
| Add Recipe Form (if required) | Submit         | If leave blank: Display Warning, form won't Submit  | Pass |
| Recipe Title   | Enter exist name and click submit   | If leave blank: Display Warning, form won't submit  | Pass      |
| Choose Image Button      | Click       | Open device storage to select image   | Pass      |
| Choose Image Button      | Not Clicked     | Default image will be set for the recipe card | Pass      |
| **Submit Button** | Click     | If all Fields are Valid, Redirect to this My Recipes page   | Pass      |
| Submit Button | Click   | Success message display informing the user that the recipe has been created successfully    | Pass      |
| Success message | Disappear     | Success message disappear after 3 seconds     | Pass      |
| **Cancel Button**  | Click                 | Redirect to Home Page        | Pass      |

### Edit Recipe Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Edit Recipe Button     | Display  | Display Only for the recipe's author | Pass      |
| Edit Recipe Button     | Hover  | Underline and Change Text Color | Pass      |
| Edit Recipe Button     | Click  | Redirect to Add Recipe Form to Edit the Recipe's Fields  | Pass      |
| **Submit Button**    | Click  | Redirect to My Recipes page withe edited information  | Pass      |
| Submit Button     | Click   | Success message display informing the user that the recipe has been created successfully    | Pass      |
| Success message | Disappear     | Success message disappear after 3 seconds     | Pass      |
| **Cancel Button**   | Click   | User is redirected back to My Added Recipe | Pass      |

### Delete Recipe Page
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| Delete Recipe Button     | Display  | Display Only for the recipe's author | Pass      |
| Delete Recipe Button     | Hover  | Underline and Change Text Color | Pass      |
| Delete Recipe Button     | Click  | Redirect to Delete Confirmation Form  | Pass      |
| **Delete Button** | Click  | Recipe deleted and removed from user's My Recipes page    | Pass      |
| Delete Button | Click  | Success message display informing the user that the recipe has been created successfully | Pass      |
| Success message | Disappear     | Success message disappear after 3 seconds     | Pass      |
| Delete Button | Click  | Redirect back to the My recipes page       | Pass      |
| **Cancel Button** | Click  | Redirect to My Recipes page      

### Django Authentiaction Pages
| Test               | Action     | Expected Outcome             | Pass/Fail |
|-----------------------|------------|--------------------------------------------|-----------|
| **Register Page**    |                                          |                                            |           |
| Register Link              | Click                                     | Redirect to Sign Up page                     | Pass      |
| Username field             | Leave blank                               | On submit: form won't submit             | Pass      |
| Username field             | Insert correct format                     | On submit: form submit                     | Pass      |
| Username field             | Insert an exist username                  | On submit: form won't submit               | Pass      |
| Username field             | Insert an exist username                 | Error message displays                     | Pass      |
| Email field                | Insert incorrect format                   | On submit: form won't submit               | Pass      |
| Email field                | Insert incorrect format                   | Error message displays                     | Pass      |
| Email field                | Insert correct format                     | On submit: form submit                     | Pass      |
| Email field                | Leave empty                               | On submit: form submit                     | Pass      |
| Email field                | Insert an exist email                    | On submit: form won't submit               | Pass      |
| Email field                | Insert an exist email                    | Error message displays                     | Pass      |
| Password field             | Insert incorrect format                   | On submit: form won't submit               | Pass      |
| Password field             | Insert incorrect format                   | Error message displays                     | Pass      |
| Password field             | Passwords don't match                     | On submit: form won't submit               | Pass      |
| Password field             | Passwords don't match                     | Error message displays                     | Pass      |
| Password field             | Insert correct format and passwords match | On submit: form submit                     | Pass      |
| Sign Up button(form valid) | Click                                     | Form submit                                | Pass      |
| Sign Up button(form valid) | Click                                     | Redirect to Home page                      | Pass      |
| Sign Up button(form valid) | Click                                     | Success message confirming login appears   | Pass      |
| Success message            | Disappear                         | Success message disappear after 3 seconds     | Pass      |
| **Log In Link**                   |                                           |                                            |           |
| Username field             | Leave blank                               | On submit: form won't submit               | Pass      |
| Username field             | Leave blank                               | Error message displays                     | Pass      |
| Username field             | Insert wrong username                     | On submit: form won't submit               | Pass      |
| Username field             | Insert wrong username                     | Error message displays                     | Pass      |
| Password field             | Leave blank                               | On submit: form won't submit               | Pass      |
| Password field             | Leave blank                               | Error message displays                     | Pass      |
| Password field             | Insert wrong password                     | On submit: form won't submit               | Pass      |
| Password field             | Insert wrong password                     | Error message displays                     | Pass      |
| Login button(form valid)   | Click                                     | Form submit                                | Pass      |
| Login button(form valid)   | Click                                     | Redirect to Home page                      | Pass      |
| Login button(form valid)   | Click                                     | Success message confirming login appears   | Pass      |
| Success message | Disappear     | Success message disappear after 3 seconds     | Pass      |
|  **Log Out Link**   |                                           |                                            |           |
| Log Out Link       |     Click                  |     Display Confirmation Message                                       |           |
| **Yes button**              | Click             | Redirect to Homepage, NavBar link Changed       | Pass      |
| Logout button              | Click         | Success message confirming log out appears | Pass      |
| Login button(form valid)   | Click                                     | Success message confirming login appears   | Pass      |
| **No Button**   | Click           | Still in the current page  | Pass      |

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