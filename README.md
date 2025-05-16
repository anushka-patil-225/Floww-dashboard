🚀 Floww Frontend Intern Assignment - Documentation

🧱 Part 1: Dashboard Implementation
✅ Tech Stack Used:
React.js (via Create React App)
HTML5 + CSS3 (with Flexbox & Media Queries)
JavaScript (ES6+)
Chart.js (for Statistics Pie Chart)
Local Mock API: public/data.json

🗂 Folder Structure Overview:

floww_dashboard/
├── public/
│   ├── data.json              # Mock API data (user + tasks)
│   └── images/
│       ├── user.png           # Placeholder profile image
│       └── flowdash_logo.png  # Final FlowDash logo
├── src/
│   ├── App.js                 # Main component with data fetching and tab layout
│   ├── App.css                # Fully responsive styles, logo behavior, layout
│   ├── index.js               # Entry point
│   ├── index.css              # Global font + resets
│   └── components/
│       ├── Profile.js         # Profile display + editable modal
│       ├── TaskList.js        # Task listing with checkboxes
│       └── Statistics.js      # Responsive Pie Chart for stats


Key Components:
App.js
Manages state, handles tab switching, integrates all components and responsive layout.
Profile.js
Shows user info (avatar, name, email), includes editable modal with a dummy disclaimer.
TaskList.js
Lists all tasks with completion toggle using local state.
Statistics.js
Displays a responsive pie chart (Completed vs Pending) using Chart.js.

Responsiveness & Styling:
Uses media queries for all screen sizes.
Logo automatically resizes and repositions on mobile.
Dashboard layout adjusts gracefully using flexbox.
Pie chart and modals scale within screen bounds.
Long text like email wraps without overflow.


Part 2: Styled Wireframes
🔐 Login Page
Fields: Username, Password
Actions: Login Button, Forgot Password link
Feedback: Displays error message on incorrect login
📝 Sign-Up Page
Fields: Name, Email, Password, Confirm Password
Actions: Sign-Up Button
Checkbox: Terms & Conditions agreement

📘 How to Run the Project
Install Dependencies:
npm install

Run the Project:
npm start


