# Full-Stack Authentication Application

## 🚀 Project Overview
This project is a modern full-stack authentication system built with:

- **Frontend**: React with Next.js and TypeScript
- **Backend**: Node.js with Express and TypeScript
- **Database**: PostgreSQL with Prisma ORM

### 🌟 Features
- User registration & login
- Protected dashboard access
- Session management
- Form validation
- Robust error handling

## 🛠️ Tech Stack

### **Frontend**
- **Next.js**: Server-side rendering, API routes, and optimization.
- **TypeScript**: Type-safe development for better code quality.
- **React Hook Form**: Efficient form state management and validation.
- **Zod**: Schema validation for form inputs.
- **React Query**: Manages server-state, caching, and data fetching.

### **Backend**
- **Node.js with Express**: Handles API requests and authentication.
- **Prisma**: ORM for defining and querying the PostgreSQL database.
- **JWT (JSON Web Tokens)**: Secure authentication tokens.
- **bcrypt**: Secure password hashing.

## 📂 Project Structure
### Frontend (`/frontend`)
```
/frontend
 ├── components/     # UI components
 ├── hooks/          # Custom hooks
 ├── pages/          # Next.js routes
 ├── services/       # API interaction logic
 ├── utils/          # Helper functions
 ├── styles/         # CSS modules or Tailwind styles
```
### Backend (`/backend`)
```
/backend
 ├── src/
 │   ├── controllers/  # Business logic for API endpoints
 │   ├── routes/       # Express.js API routes
 │   ├── middleware/   # Error handling, authentication
 │   ├── prisma/       # Prisma schema and database interaction
 │   ├── server.ts     # Main Express server file
```

## 🎯 Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v16+)
- PostgreSQL database
- Yarn or npm

### Backend Setup
```sh
cd backend
npm install  # or yarn install
cp .env.example .env  # Add database connection string
npx prisma migrate dev  # Run database migrations
npm run dev  # Start backend server
```

### Frontend Setup
```sh
cd frontend
npm install  # or yarn install
npm run dev  # Start frontend server
```

## 🔐 Authentication Flow
1. User registers an account.
2. Password is securely hashed using bcrypt.
3. JWT token is generated upon successful login.
4. Protected pages are only accessible with a valid token.

## 📊 Database Schema (Prisma)
```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🛡️ Security Measures
- **Password Hashing**: Secure storage using bcrypt.
- **JWT Authentication**: Stateless authentication for users.
- **Validation**: Form validation using Zod & React Hook Form.
- **Error Handling**: Graceful error messages for better UX.

## 🚀 Deployment (Optional)
- **Frontend**: Deploy on Vercel.
- **Backend**: Deploy on Railway, Heroku, or AWS Lambda.
- **Database**: Use a managed PostgreSQL service.

## 🎥 Video Demonstration
A walkthrough video showcasing the working project is available [here](#).

## 📌 Submission Guidelines
- GitHub repo must contain both `/frontend` and `/backend` directories.
- Ensure the project is fully functional and meets requirements.
- Deadline: **March 31, 2025**.

---
💡 **Note:** This project is designed for learning best practices in full-stack development with modern tools. Feel free to improve and expand its features! 🎉

