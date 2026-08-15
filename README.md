# 🛒 FreshCart — Modern Full-Featured E-Commerce Web Application

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-22c55e?style=for-the-badge&logo=vercel&logoColor=white)](https://freshcart-three-omega.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/a7medabdelmon3m/E-commerce-Freshcart-.git)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📌 Overview

**FreshCart** is a modern, responsive, and performance-driven E-Commerce platform built from the ground up as the **Final Graduation Project** for the **Route Academy Front-End Diploma**. 

The application is engineered with a strict focus on scalable frontend architecture, clean code principles (DRY, Separation of Concerns), dynamic component reusability, and robust type safety with TypeScript and Zod.

---

## ✨ Key Features

- 🔐 **Authentication & Authorization**: Secure session handling, sign-up, sign-in, and protected routes using `next-auth`.
- 🛍️ **Interactive Product Browsing**: Fast product search, category filtering, subcategory views, and dynamic sorting.
- 📦 **Cart & Wishlist Management**: Add/remove products, real-time quantity updates, and cart state synchronization.
- 💳 **Checkout & Order Flow**: Multi-step checkout with address inputs and integration-ready payment handlers.
- 🎨 **Modern & Accessible UI**: Clean design crafted with `shadcn/ui` (Radix UI primitives) and styled via `Tailwind CSS v4`.
- ⚡ **Rich Animations & Sliders**: Smooth page and micro-interactions powered by `Framer Motion` and carousel sliders built with `Swiper`.
- 📝 **Robust Form Handling & Validation**: High-performance form state control with `react-hook-form` paired with strict `Zod` schemas.
- 🔔 **Instant Feedback**: Toast notifications via `react-toastify`, modal alerts with `SweetAlert2`, and smooth loader indicators using `react-spinners`.

---

## 🏗️ Architectural Highlights & Best Practices

- **Next.js App Router**: Optimized routing utilizing Server and Client Components where appropriate.
- **Component-Driven Development**: Modular, flexible components that adapt seamlessly based on dynamic props.
- **Separation of Concerns**: Business logic, data transformations, and API communications are decoupled into dedicated `services/` and `actions/` directories.
- **Unified API Client (DRY)**: Centralized API requester utility to handle endpoints, error states, and headers uniformly without code repetition.
- **React Patterns & Suspense**: Strategic usage of React `Suspense` and streaming fallbacks for instant visual feedback during data fetching.
- **State Management**: Scalable global state powered currently by `Context API` (with an upcoming migration roadmap to `Redux Toolkit`).

---

## 🛠️ Tech Stack & Dependencies

### **Core Framework & Language**
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

### **State & Data Management**
- **Authentication**: `next-auth`
- **Global State**: React Context API (Roadmap: Redux Toolkit)
- **Form Management**: `react-hook-form`
- **Schema Validation**: `zod`

### **UI, Animations & Utilities**
- **Primitives**: `@radix-ui` / [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: `framer-motion`
- **Carousels / Sliders**: `swiper`
- **Alerts & Toasts**: `sweetalert2`, `react-toastify`
- **Loading Indicators**: `react-spinners`

### **Tooling & DevOps**
- **IDE**: VS Code
- **API Testing**: Postman
- **Version Control**: Git & GitHub
- **Deployment**: Vercel

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                 # Next.js App Router (pages, layouts, error & loading handlers)
│   ├── components/          # Reusable UI & Business components
│   │   ├── ui/              # Radix / shadcn base components
│   │   ├── layout/          # Navbar, Footer, Sidebar
│   │   └── modules/         # Feature-specific components (Cart, Products, Auth, etc.)
│   ├── context/             # Global Context providers (Auth, Cart, Wishlist)
│   ├── services/            # Unified API fetchers and external service handlers
│   ├── actions/             # Server / Client action handlers
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript interfaces and types
│   ├── schemas/             # Zod validation schemas
│   └── lib/                 # Utility functions and helper libraries
├── public/                  # Static assets and images
├── .env.example             # Environment variables template
├── package.json
└── README.md
