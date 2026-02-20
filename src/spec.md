# Specification

## Summary
**Goal:** Fix the duplicate email detection logic in the lead submission system to correctly validate whether an email already exists before creating a new lead record.

**Planned changes:**
- Fix the backend createLead function to properly query the Leads Map and check for existing emails (case-insensitive) before insertion
- Ensure the function only returns the "This email is already registered" error when a duplicate email is actually found
- Verify frontend form correctly displays success messages for new emails and error messages for duplicate emails

**User-visible outcome:** Users can successfully submit the lead form with unique emails, and only receive the "This email is already registered" error when submitting an email that actually exists in the system.
