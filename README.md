# 🛒 FreshCart — Modern Full-Featured E-Commerce Web Application

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-22c55e?style=for-the-badge&logo=vercel&logoColor=white)](https://freshcart-three-omega.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/a7medabdelmon3m/E-commerce-Freshcart-.git)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📌 Overview

**FreshCart** is a modern, high-performance E-Commerce platform built from scratch as the **Final Graduation Project** for the **Route Academy Front-End Diploma**.

The application is engineered with a strict focus on scalable frontend architecture, clean code principles (DRY, Separation of Concerns), dynamic component reusability, and robust type safety with TypeScript and Zod.

---

## ✨ Key Features

- 🔐 **Authentication & Authorization**: Complete Auth flow with `next-auth` (Credentials provider), route protection, login, registration, and password recovery.
- 🛍️ **Product Catalog & Dynamic Browsing**: Real-time product search with debounce, multifaceted filtering (categories, price, rating), category-specific pages, subcategories, and brands.
- 📦 **Cart System**: Real-time cart state synchronization via Context API, dynamic quantity selector, clear cart, and item deletion handlers.
- ❤️ **Wishlist Feature**: Dedicated wishlist management with instant feedback and state updates.
- 💳 **Checkout & Address Management**: Multi-step checkout with address selection, address management modal (Add / Edit / Delete), and online payment session redirection.
- ⭐ **Product Reviews**: Full interactive reviews section supporting review creation, editing, and pagination.
- 🎨 **Accessible & Responsive UI**: Built with accessible Radix primitives (`shadcn/ui`), styled using **Tailwind CSS v4**, featuring interactive carousels (`Swiper`) and smooth animations (`Framer Motion`).
- 🔔 **User Feedback**: Custom skeletons for data streaming (`Suspense`), toast alerts via `react-toastify`, and confirmation modals via `sweetalert2`.

---

## 🏗️ Architectural Highlights & Best Practices

- **Next.js App Router**: Route groupings `(auth)`, dynamic routes (`/categories/[id]`, `/products/[id]`), and server/client boundary optimization.
- **Centralized API Architecture (DRY)**: Reusable service methods in `src/api/services/` and server/client actions in `src/api/actions/` ensuring zero duplicate fetch code.
- **Strict Validation & Schemas**: Modular Zod schema definitions (`login.schema.ts`, `register.schema.ts`, `checkout.schema.ts`, `forgetPassword.schemes.ts`) paired with `react-hook-form`.
- **Component Modularity**: Highly reusable components (`AppForm`, `ProductCard`, `CategoryCard`, `QuantitySelector`, `ReviewsContainer`) designed to adapt dynamically via props.
- **Streaming & Suspense**: Loading skeletons and Suspense boundaries for zero Cumulative Layout Shift (CLS).
- **State Management**: State handled across the app via `CartContext` and `SessionProviderWrapper`, with planned Redux Toolkit integration.

---

## 🛠️ Tech Stack & Dependencies

### **Core Framework & Language**
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS

### **State & Authentication**
- **Authentication**: `next-auth`
- **Global State**: React Context API (`CartContext`)
- **Forms**: `react-hook-form`
- **Validation**: `zod`

### **UI, Animations & Utilities**
- **Primitives**: `@radix-ui` / [shadcn/ui](https://ui.shadcn.com/)
- **Carousels**: `swiper`
- **Animations**: `framer-motion`
- **Notifications**: `react-toastify`, `sweetalert2`
- **Loaders**: `react-spinners`

### **Tooling & Environment**
- **IDE**: VS Code
- **API Testing**: Postman
- **Version Control**: Git & GitHub
- **Deployment**: Vercel

---

## 📂 Project Structure

```text
E-commerce-Freshcart/
├── public/
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── api/
│   │   ├── actions/
│   │   │   └── routea.ctions.ts         # Unified Server / Client Actions
│   │   ├── services/
│   │   │   └── route.services.ts        # Centralized API Fetcher & Endpoints
│   │   └── types.ts                     # Global API Response Interfaces
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/                   # Login Page, Form, Action, Schema & Types
│   │   │   └── register/                # Register Page, Form, Action, Schema & Types
│   │   ├── _component/                  # Shared UI & Feature Components
│   │   │   ├── appForm/                 # Reusable Generic Form
│   │   │   ├── category.UI/             # Category Lists & Skeletons
│   │   │   ├── footer/ & footerList/    # Footer Layout
│   │   │   ├── forgetPasswordUI/        # Forgot Password Form & Components
│   │   │   ├── navbar/                  # Main Navbar & Responsive Navigation
│   │   │   ├── productCard/             # Product Card & AddToCart Button
│   │   │   ├── quantitySelector/        # Counter / Quantity Controls
│   │   │   ├── relatedProductSwiper/    # Product Carousel Sliders
│   │   │   ├── reviewsUI/               # AddReview, ReviewCard, EditCard & Pagination
│   │   │   ├── sectionHeader/           # Section Titles
│   │   │   ├── sessionProviderWrapper/  # NextAuth Session Provider
│   │   │   └── skeleton/                # Detail & Card Loading Skeletons
│   │   ├── _context/
│   │   │   └── CartContext.tsx          # Global Cart State Provider
│   │   ├── account/                     # User Profile, Password & Saved Addresses
│   │   ├── api/auth/[...nextauth]/      # NextAuth Route Handler
│   │   ├── brands/                      # Brands Catalog
│   │   ├── cart/                        # Cart Page, CartItem, Update & Clear Actions
│   │   ├── categories/ & [id]/          # Category Listing & Subcategories View
│   │   ├── checkout/                    # Checkout Flow, Schema & Actions
│   │   ├── contact/                     # Contact Us Page & Form
│   │   ├── forget-password/             # Forgot Password Wizard
│   │   ├── orders/                      # User Order History
│   │   ├── privacy/ & terms/            # Legal & Privacy Pages
│   │   ├── products/ & [id]/            # Products Listing & Dynamic Details Page
│   │   ├── search/                      # Advanced Search, Sorting, Side Filters & Layout Switcher
│   │   ├── wishlist/                    # User Wishlist Page & Product Card
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── assets/
│       └── image/                       # Payment Logos (Visa, Mastercard, Amex) & Static Media
├── components.json                      # shadcn/ui Configuration
├── next.config.ts
├── package.json
└── tsconfig.json
