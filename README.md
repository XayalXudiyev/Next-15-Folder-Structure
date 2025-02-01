# 🚀 Next.js 15 Folder Structure  

This repository provides a well-organized folder structure for **Next.js 15** projects, ensuring **scalability, maintainability, and best practices**.  

📌 **Why use this structure?**  
✅ Clean and modularized code  
✅ Better separation of concerns  
✅ Organized component hierarchy  
✅ Easy to maintain and scale  

---

## 📂 Project Structure  

# 🚀 Next.js 15 Folder Structure  

This repository provides a well-organized folder structure for **Next.js 15** projects, ensuring **scalability, maintainability, and best practices**.  

📌 **Why use this structure?**  
✅ Clean and modularized code  
✅ Better separation of concerns  
✅ Organized component hierarchy  
✅ Easy to maintain and scale  

---

## 📂 Project Structure  

```yaml


src/
├── app/                     # Main Next.js app directory
│   ├── _components/         # Internal components specific to app pages
│   ├── about/               # About page directory
│   │   ├── page.tsx         # About page component
│   ├── api/                 # API routes
│   │   ├── auth/            # Authentication API
│   │   │   ├── [...nextauth]/route.ts  # NextAuth.js API route
│   ├── contact/             # Contact page directory
│   │   ├── page.tsx         # Contact page component
│   ├── feed/                # Feed page directory
│   │   ├── loading.tsx      # Loading state for feed
│   │   ├── globals.css      # Global styles for feed
│   │   ├── layout.tsx       # Feed layout
│   │   ├── not-found.tsx    # 404 page for feed
│   │   ├── page.tsx         # Feed main page
│
├── components/              # Reusable UI components
│   ├── about/               # About section components
│   ├── contact/             # Contact section components
│   ├── footer/              # Footer components
│   ├── header/              # Header components
│   │   ├── auth-buttons.tsx # Authentication buttons
│   │   ├── index.tsx        # Header index
│   │   ├── Navbar.tsx       # Navigation bar
│   ├── ui/                  # UI-related components
│
├── constants/               # Global constants
│   ├── enums.ts             # Enum types
│
├── lib/                     # Utility libraries
│   ├── providers/           # Global providers
│   │   ├── NextAuthSessionProvider.tsx  # NextAuth.js session provider
│   │   ├── ReduxProvider.tsx            # Redux store provider
│
├── server/                  # Server-side logic
│   ├── auth.ts              # Authentication utilities
│
├── store/                   # State management (Redux)
│   ├── hooks.ts             # Custom Redux hooks
│   ├── index.ts             # Store configuration
│
├── validations/             # Validation schemas
│   ├── auth.ts              # Authentication validation schemas
│
├── .gitignore               # Files to be ignored by Git
├── components.json          # Component structure JSON
├── next-env.d.ts            # TypeScript environment declarations
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── README.md                # Documentation
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── yarn.lock                # Yarn lock file

---

## 🚀 Getting Started  

To set up the project locally, follow these steps:  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/XayalXudiyev/Next-15-Folder-Structure.git
cd Next-15-Folder-Structure

yarn install

yarn dev

🛠 Features
✅ Modular and scalable project structure
✅ Next.js 15 App Router integration
✅ Redux Toolkit for state management
✅ NextAuth.js for authentication
✅ Tailwind CSS for styling
✅ TypeScript for type safety

🤝 Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

⭐ Support the Project!
If you find this repository helpful, please consider giving it a ⭐ STAR on GitHub!

📌 Author: https://github.com/XayalXudiyev 
