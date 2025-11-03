# Product Overview

ICSA Landing Site - The main landing and registration site for ICSA (International Church Support Alliance). This is where churches discover ICSA and join the network.

## Purpose

This is the primary landing site for ICSA that introduces the organization and handles church registration. A separate showcase site (voices.icsa.church) displays approved projects.

## Key Features

### 1. Landing Page

- Explains ICSA's mission and vision
- Highlights benefits for pastors and churches
- Shows how the program works
- Features testimonials and success stories
- Includes FAQ section
- Call-to-action to join

### 2. Join Form (`/join`)

Collects church registration information:

- Church name
- Contact person name
- Email address
- Country (from predefined list)
- Preferred language

### 3. Registration Flow

When a church submits the join form:

1. Data is saved to Supabase `churches` table
2. A unique private token is generated
3. Welcome email is sent via Brevo with the token link
4. Church receives access to submit their program/project

### 4. Program Submission (Token-Protected)

Churches use their private link to submit:

- Project/program story and details
- One required photo (max 5MB)
- One optional video (max 50MB or embed link)
- Submission status starts as "pending"

## What This Site Does

✅ Church discovery and education about ICSA
✅ Church registration and onboarding
✅ Email notifications via Brevo
✅ Initial program/project submission
✅ Multilingual support (English, Bengali)

## What This Site Does NOT Do

❌ No public project showcase (that's voices.icsa.church)
❌ No admin review panel (handled elsewhere)
❌ No payment or donation processing
❌ No user accounts or login system
❌ No certificate generation or verification
