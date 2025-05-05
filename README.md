# 🚀 __angular-routing-navigation__

A beginner-friendly Angular project demonstrating how to implement routing and navigation using RouterModule, routerLink, router-outlet, and dynamic route parameters.

✅ Concepts Covered
Angular AppRoutingModule

Static and dynamic routes

routerLink directive for navigation

<router-outlet> for route rendering

Accessing route parameters using ActivatedRoute

🧠 What You’ll Learn
Set up page navigation (Home, About, User)

Create dynamic user route like /user/101

Pass and extract route parameters


📁 Folder Structure
arduino
Copy
Edit
src/
├── app/
│   ├── home/
│   ├── about/
│   ├── user/
│   ├── app-routing.module.ts
│   └── app.component.ts / .html
🔄 Sample Route Links (in app.component.html)
html
Copy
Edit
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a> |
  <a [routerLink]="['/user', 101]">User 101</a>
</nav>

<router-outlet></router-outlet>
🔧 How to Run
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/angular-routing-navigation.git
cd angular-routing-navigation
Install dependencies:

bash
Copy
Edit
npm install
Run the app:

bash
Copy
Edit
ng serve
Open browser:

arduino
Copy
Edit
http://localhost:4200/
📸 Demo Pages
/ → Home

/about → About

/user/101 → Shows "User ID from route: 101"

💡 Extras
Use ActivatedRoute to fetch route parameters:

ts
Copy
Edit
this.route.params.subscribe(params => {
  this.userId = params['id'];
});
