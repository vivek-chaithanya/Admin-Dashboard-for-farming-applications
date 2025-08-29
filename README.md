🌱 Farming Platform – Admin Dashboard

Project Overview

The Farming Platform Admin Dashboard is designed to manage crops, subscriptions, notifications, and user roles 
for farming-related applications. It supports CRUD operations for crop data, subscription maintenance, 
push notifications, analytics, and more.

This project covers end-to-end development:

Figma designs
Frontend & Backend implementation
Deployment
Documentation

🛠️ Technology Stack

Frontend: React.js + Tailwind CSS
Backend: Django
Database: PostgreSQL (primary) + Redis (caching)
Design: Figma (Wireframes & Prototypes)
Authentication: JWT / OAuth2 with RBAC
Notifications: Firebase Cloud Messaging (FCM) / OneSignal, Email, SMS
Payments: Razorpay (subscriptions)
Hosting: Vercel (Frontend), Render/Firebase (Backend)

📦 Core Modules

Crops & Data Management
CRUD for crops, varieties, seasons, regions
Attach practices (sowing, irrigation, pest control, inputs)
Media attachments (images, PDFs, videos)
Subscription Maintenance

Plans: Free, Pro, Enterprise
Pricing, trials, renewals, refunds
Usage limits & feature toggles

Push Notifications
Segmented & scheduled campaigns
Templates with placeholders
Real-time delivery analytics
Emergency advisories

User & Role Management
Roles: Super Admin, Admin, Agronomist, Support
Role-based Access Control (RBAC)
Audit logs

Analytics & Reports
Crop usage stats
Notification reach & engagement
Subscriber growth & churn
Revenue dashboard

Settings
Branding, locales, API keys, content taxonomy
