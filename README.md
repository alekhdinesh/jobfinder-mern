# JobFinder – MERN Job Portal Application

A full-stack **Job Portal Web Application** built using the **MERN stack** with role-based authentication and real-world features for **Users** and **Employers**.

This project demonstrates complete end-to-end functionality including authentication, authorization, job posting, job applications, application tracking, and role-based dashboards.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based login system
* Role-based access control (User / Employer)
* Protected routes
* Secure token storage using Redux

### 👤 User Features

* View all available jobs
* Apply for jobs
* Track applied jobs
* View application status (Pending / Viewed / Accepted / Rejected)

### 🧑‍💼 Employer Features

* Post new jobs
* View posted jobs
* View applicants for each job
* Update applicant status

### 🎨 UI & UX

* Clean, modern light theme
* Card-based layout
* Responsive pages
* Consistent design across all pages

---

## 🛠 Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router
* Axios
* Custom CSS

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```
client/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── redux/
 │   ├── App.jsx
 │   └── main.jsx

server/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 └── server.js
```

---

## 🔑 Roles

| Role     | Capabilities                                          |
| -------- | ----------------------------------------------------- |
| User     | View jobs, apply jobs, track applications             |
| Employer | Post jobs, view applicants, update application status |

---

## 🔄 Application Flow

1. User/Employer registers and logs in
2. JWT token generated and stored in Redux
3. Role extracted from token
4. Dashboard rendered based on role
5. Authorized API access using token

---

## 📸 Screenshots

> Add screenshots of:

* Login page
* User dashboard
* Employer dashboard
* Job list
* Applicant list

---

## 🧠 Key Learnings

* Role-based authentication using JWT
* Redux state management
* Secure API communication
* MongoDB relationships using `ref` & `populate`
* Real-world project architecture

---

## 📌 How to Run the Project

### Backend

```bash
cd server
npm install
npm start
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 👨‍💻 Author

**Alekh Dinesh**
B.Tech Computer Science Graduate
📍 Kerala, India

* GitHub: [https://github.com/alekhdinesh](https://github.com/alekhdinesh)
* LinkedIn: [https://linkedin.com/in/alekhdinesh](https://linkedin.com/in/alekhdinesh)

---

## ⭐ Final Note

This project is built to reflect **real-world MERN stack development practices** and is suitable for **job applications, interviews, and portfolio showcase**.

If you like this project, feel free to ⭐ the repository!
