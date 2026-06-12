# @n8n-dev/n8n-nodes-loket

![loket Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-loket.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-loket)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing loket API integrations by hand.**

Every time you connect n8n to loket, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to loket took 5 minutes, not half a day?**

This node gives you **169+ resources** out of the box: **Achmea**, **AOW Date**, **Application**, **Absence**, **Absence Progress**, and 164 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-loket
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-loket`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **loket API** → paste your API key
3. Drag the **loket** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Achmea</b> (2 operations)</summary>

- Get list of insurance contracts
- Get list of wage percentages for an insurance contract

</details>

<details>
<summary><b>AOW Date</b> (1 operations)</summary>

- Get Acquire the AOW date

</details>

<details>
<summary><b>Application</b> (4 operations)</summary>

- Get Authorizations for the application
- Get Download the application logo
- Get List of all the applications available to the employer
- Get List of all the users linking the applications and the employer

</details>

<details>
<summary><b>Absence</b> (8 operations)</summary>

- Delete a specific absence record
- Get Details of an Absence
- Put Edit the details of a Absence
- Patch Close an absence
- Patch Reopen an absence
- Get List of absences for an employee
- Post Create an Absence for an employee
- Get Download the absence overview for an employee

</details>

<details>
<summary><b>Absence Progress</b> (5 operations)</summary>

- Delete a specific Absence Progress record
- Get Details of an Absence Progress
- Put Edit the details of an absence progress
- Get List of absence progress for an absence
- Post Create an Absence Progress for an Absence

</details>

<details>
<summary><b>Contact History</b> (5 operations)</summary>

- Delete a specific record
- Get Details of a contact history
- Put Edit the details of a contact history
- Get Contact history for an absence
- Post Create a contact history for an Absence

</details>

<details>
<summary><b>Contact</b> (5 operations)</summary>

- Delete a specific contact
- Get Details of a single contact
- Put Edit a contact
- Get List of contacts for an employee
- Post Create a contact for an employee

</details>

<details>
<summary><b>Employer</b> (11 operations)</summary>

- Get List of employers
- Get List of employers with fewer fields for performance reasons
- Get Details of an employer
- Put Edit the details of an employer
- Delete the employer logo
- Get Logo of an employer
- Post Upload a logo for the employer
- Get Logo of an employer
- Get Provider logo
- Get Provider logo
- Post Create an employer

</details>

<details>
<summary><b>Concept Employee</b> (10 operations)</summary>

- Get Details of a concept employee with fewer fields
- Put Edit the details of a concept employee with fewer fields
- Delete a concept employee
- Get Details of a concept employee
- Put Edit the details of a concept employee
- Get Citizen service number of a concept employee
- Put Update the citizen service number of a concept employee
- Patch Convert a concept employee to an employee
- Get List of concept employee for an employer
- Post Create a concept employee for an employer

</details>

<details>
<summary><b>Announcement</b> (2 operations)</summary>

- Patch Mark one or more announcements as read
- Get a list of announcements for an employer

</details>

<details>
<summary><b>Data New Business</b> (3 operations)</summary>

- Get a list of functions
- Get Data New Business token
- Get Data New Business token for an employer

</details>

<details>
<summary><b>Departments</b> (5 operations)</summary>

- Get Details of a department
- Put Edit the details of a department
- Get List of departments
- Post Create a department for an employer
- Get List of user accessible departments

</details>

<details>
<summary><b>Custom Holiday</b> (5 operations)</summary>

- Delete a custom holiday record
- Get Details of a custom holiday
- Put Edit a custom holiday record
- Get List custom holidays for an employer
- Post Add a custom holiday for an employer

</details>

<details>
<summary><b>Preboarding Trajectory</b> (2 operations)</summary>

- Patch Change status of a preboarding trajectory
- Post Add a preboarding trajectory

</details>

<details>
<summary><b>Benefits And Deductions</b> (5 operations)</summary>

- Delete a specific benefit or deduction record
- Get Detail of a benefit or deduction record
- Put Edit the details of a benefit or deduction record
- Get list of benefits and deductions
- Post Add a benefit or deduction record for the employment

</details>

<details>
<summary><b>Chamber Of Commerce</b> (1 operations)</summary>

- Get Acquire company information

</details>

<details>
<summary><b>Abp Funds</b> (5 operations)</summary>

- Delete a specific abp fund record
- Get Details of an abp fund
- Put Edit a abp fund record
- Get List of abp funds the employment partakes in
- Post Activate an abp fund for an employment

</details>

<details>
<summary><b>Base For Employment Fund Calculation</b> (5 operations)</summary>

- Delete a specific record
- Get Details of an base for employment fund calculations
- Put Change the properties of a base for employment fund calculation
- Get List of bases for employment fund calculations
- Post Add a base for employment fund calculation

</details>

<details>
<summary><b>Base For Calculation</b> (5 operations)</summary>

- Delete a specific record
- Get Details of an base for employment fund calculations
- Put Change the properties of a base for calculation
- Get List of bases for employment fund calculations
- Post Add a base for calculation

</details>

<details>
<summary><b>Attachment Of Earnings</b> (5 operations)</summary>

- Delete an attachment of earnings record
- Get the details of an attachment of earnings record
- Put Edit the details of an attachment of earnings record
- Get a list of attachment of earnings records
- Post Create a new attachment of earnings record

</details>

<details>
<summary><b>Provider</b> (3 operations)</summary>

- Get List of providers
- Get Download the provider logo
- Get Download the provider logo

</details>

<details>
<summary><b>Authorization Sets</b> (2 operations)</summary>

- Get Details of a authorization set
- Get List of authorization sets

</details>

<details>
<summary><b>Address</b> (1 operations)</summary>

- Get Acquire the address for a combination of postalCode and houseNumber

</details>

<details>
<summary><b>Child</b> (5 operations)</summary>

- Delete a specific child record
- Get Details of a child
- Put Edit the details of a child
- Get List of children for an employee
- Post Create an child for an employee

</details>

<details>
<summary><b>Paygrade</b> (1 operations)</summary>

- Get Paygrade metadata for concept employee

</details>

<details>
<summary><b>Concept Employee Dossier</b> (8 operations)</summary>

- Get a list of concept employee dossier documents
- Post Upload a document to the concept employee dossier
- Delete a document in the concept employee dossier
- Get Download concept employee dossier document
- Put Edit the details of an concept employee dossier document
- Get audittrail for the document in the concept employee dossier
- Delete the complete concept employee dossier
- Get Document count

</details>

<details>
<summary><b>Assessment</b> (2 operations)</summary>

- Post Initiate assessment
- Get List of assessments

</details>

<details>
<summary><b>Benefit In Kind</b> (5 operations)</summary>

- Delete a benefit in kind record
- Get Details of an benefit in kind
- Put Edit a benefit in kind record
- Get List Benefits in kind
- Post Add a Benefit in kind for an employment

</details>

<details>
<summary><b>Education</b> (5 operations)</summary>

- Delete a specific education
- Get Details of a single education
- Put Edit a Education
- Get List of educations for an employee
- Post Create a education for an employee

</details>

<details>
<summary><b>Employee Custom Field</b> (5 operations)</summary>

- Delete an employee custom field record
- Get Details of an employee custom field
- Put Edit an employee custom field record
- Get List employee custom fields for an employee
- Post Add an employee custom field for an employee

</details>

<details>
<summary><b>Custom Field</b> (5 operations)</summary>

- Delete a custom field record
- Get Details of a custom field
- Put Edit a custom field record
- Get List custom fields for an employer
- Post Add a custom field for an employer

</details>

<details>
<summary><b>Education Type</b> (5 operations)</summary>

- Delete an education type record
- Get Details of an education type
- Put Edit an education type record
- Get List education types for an employer
- Post Add an education type for an employer

</details>

<details>
<summary><b>Education Further Indication</b> (5 operations)</summary>

- Delete an education further indication record
- Get Details of an education further indication
- Put Edit an education further indication record
- Get List education further indications for an employer
- Post Add an education further indication for an employer

</details>

<details>
<summary><b>Contract Code</b> (5 operations)</summary>

- Delete a contract code record
- Get Details of a contract code
- Put Edit a contract code record
- Get List contract codes for an employer
- Post Add a contract code for an employer

</details>

<details>
<summary><b>Benefit In Kind Type</b> (5 operations)</summary>

- Delete an benefit in kind type record
- Get Details of an benefit in kind type
- Put Edit an benefit in kind type record
- Get List benefit in kind types for an employer
- Post Add an benefit in kind type for an employer

</details>

<details>
<summary><b>Generate Document</b> (5 operations)</summary>

- Post Generate a document for an concept employee
- Post Generate a document for an concept employee preview
- Post Generate a document for an employment
- Post Generate a document for an employment preview
- Post Generate documents for selected employments

</details>

<details>
<summary><b>Sign Document</b> (8 operations)</summary>

- Delete signature Conceptemployee
- Get Signature details Conceptemployee
- Post Initiate signature Conceptemployee
- Get Retrieve the report of the signing Conceptemployee
- Delete signature Employment
- Get Signature details Employment
- Post Initiate signature Employment
- Get Retrieve the report of the signing Employment

</details>

<details>
<summary><b>Applicationsets</b> (8 operations)</summary>

- Delete a specific applicationset
- Put Edit the details of an applicationset
- Get List of applicationsets for a provider
- Post Create an applicationset for a provider
- Delete a specific applicationset for a user
- Put Edit the details of an applicationset for a user
- Get List of applicationsets for a user
- Post Create an applicationset for a user

</details>

<details>
<summary><b>Email Identities</b> (10 operations)</summary>

- Delete an EmailIdentity for a provider
- Post Provider emailIdentity test email
- Delete an EmailIdentity for an employer
- Post Employer emailIdentity test email
- Get List of EmailIdentities for an employer
- Post Create an EmailIdentity for an employer
- Post Verify an EmailIdentity for an employer
- Get List of EmailIdentities for a provider
- Post Create an EmailIdentity for a provider
- Post Verify an EmailIdentity for a provider

</details>

<details>
<summary><b>Import</b> (1 operations)</summary>

- Patch Import concept employees via a file

</details>

<details>
<summary><b>Concept Employee Self Service</b> (2 operations)</summary>

- Get Details of a Concept employee self service portal status
- Get List of Concept employee s and their ESS WNL status

</details>

<details>
<summary><b>Leave</b> (11 operations)</summary>

- Delete a specific leave record
- Get A single leave entry
- Put Edit the details of a leave
- Get the values for the metadata fields
- Get List of all the leave entries
- Post Create a leave record for an employment
- Get the default values to be used when POSTing a new record
- Get the values for the metadata fields
- Get Download the leave overview for an employment and year
- Get the proposed number of leave hours for an employment
- Get the proposed number of leave hours for all employments of an employer

</details>

<details>
<summary><b>Leave Request</b> (5 operations)</summary>

- Patch Change the status of leave requests
- Get Details of a leave request
- Put Change the details of a leave request
- Get leave requests by employment
- Get List of leave requests for the employees of an employer

</details>

<details>
<summary><b>Leave Balance</b> (3 operations)</summary>

- Get List of yearly leave balances for each leave type
- Get The leave balance for all employments
- Get Summed up leave balance total and grouped by

</details>

<details>
<summary><b>Leave Policy And Employment Links</b> (4 operations)</summary>

- Get list of linked leave policies for the employment
- Patch Link or unlink leave policies for the employment
- Get list of linked employments for the leave policy
- Patch Create or delete multiple linked employments for the leave policy

</details>

<details>
<summary><b>Employment</b> (10 operations)</summary>

- Get Details of an employment
- Patch Edit the type of an employment
- Put Edit the details of an employment
- Patch Correct the start employment date for an employment
- Patch Undo termination for an employment
- Patch Terminate an employment
- Get List of employments for an employee
- Get List of employments for an employer
- Get List of employments with additional entities
- Get List of employments with fewer fields for performance reasons

</details>

<details>
<summary><b>Organizational Entity</b> (5 operations)</summary>

- Delete a specific organizational entity record
- Get Details of an organizational entity
- Put Edit the details of an organizational entity
- Get List of organizational entities for an employment
- Post Create an organizational entity for an employment

</details>

<details>
<summary><b>Payroll Period Data</b> (6 operations)</summary>

- Delete a specific payroll period data record
- Get Details of a payroll period data
- Put Edit the details of an payroll period data
- Get list of payroll period data
- Patch Insert or update payroll period data
- Post Create an payroll period data record for an employment

</details>

<details>
<summary><b>Wage</b> (5 operations)</summary>

- Delete a specific wage record
- Get Details of a single wage
- Put Edit a wage
- Get List of wages for an employment
- Post Create an wage for an employment

</details>

<details>
<summary><b>Working Hours</b> (5 operations)</summary>

- Delete a specific working hours record
- Get Details of the working hours
- Put Edit the working hours
- Get List of working hours for an employment
- Post Create the working hours for an employment

</details>

<details>
<summary><b>Payslip</b> (6 operations)</summary>

- Get payroll period results of an employment for a year
- Get List of payslips for an employment
- Get Download a cummulative payslip for a single payroll period
- Get Download payslips of an employment for a payrollrun
- Get Download payslips for an employment and year
- Get Download wage sheets for an employment

</details>

<details>
<summary><b>Year End Statement</b> (2 operations)</summary>

- Get Year end statements for the employment
- Get Download year end statement of an employment for a year

</details>

<details>
<summary><b>Payment Information</b> (5 operations)</summary>

- Delete a specific SEPA payment record record
- Get the details of a payment information sepa
- Put change the details of a payment information sepa
- Get a list of payment information sepa
- Post create a new payment information sepa record

</details>

<details>
<summary><b>Payment Information Separate Payments</b> (5 operations)</summary>

- Delete a payment information SEPA separate payment record
- Get the details of a payment information SEPA separate payment record
- Put Edit the details of a payment information separate payment record
- Get a list of payment information SEPA separate payment records
- Post Create a new payment information SEPA separate payment record

</details>

<details>
<summary><b>Payment Information Non SEPA</b> (5 operations)</summary>

- Delete a payment information non SEPA record
- Get the details of a payment information non SEPA
- Put Change the details of a payment information non SEPA
- Get a list of payment information non SEPA
- Post Create a new payment information non SEPA record

</details>

<details>
<summary><b>Fiscal Properties</b> (5 operations)</summary>

- Delete a specific fiscal properties record
- Get Details of a fiscal record
- Put Edit the details of a fiscal record
- Get List of fiscal properties for an employment
- Post Create a fiscal record for an employment

</details>

<details>
<summary><b>Fiscal Company Car</b> (6 operations)</summary>

- Delete a specific fiscal company car record
- Get Details of a fiscal company car record
- Put Edit the details of a fiscal company car record
- Get List of fiscal company cars for an employment
- Post Create a fiscal company car record for an employment
- Get Acquire the additional tax liability by the license plate number company car

</details>

<details>
<summary><b>Company Car</b> (5 operations)</summary>

- Delete a specific company car record
- Get Details of a company car record
- Put Edit the details of a company car record
- Get List of company cars for an employment
- Post Create a company car record for an employment

</details>

<details>
<summary><b>Other Payroll Variables</b> (5 operations)</summary>

- Delete a specific other payroll variables record
- Get Details of other payroll variables for an employment
- Put Change the details of an other payroll variables record
- Get List of other payroll variables for an employment
- Post Add other payroll variables for an employment

</details>

<details>
<summary><b>Employment Funds</b> (5 operations)</summary>

- Delete a specific employment fund record
- Get Details of an employment fund
- Put Edit a employment fund record
- Get List of funds the employment partakes in
- Post Activate a fund for an employment

</details>

<details>
<summary><b>Social Security</b> (5 operations)</summary>

- Delete a specific social security record
- Get Details of a social security record
- Put Edit the details of a social security record
- Get List of social security records for an employment
- Post Create a social security record for an employment

</details>

<details>
<summary><b>Social Security Benefits</b> (5 operations)</summary>

- Delete a specific social security benefits record
- Get Details of a social security benefits record
- Put Edit the details of a social security benefits record
- Get List of social security benefits records for an employment
- Post Create a social security benefits record for an employment

</details>

<details>
<summary><b>Healthcare Insurance Act</b> (5 operations)</summary>

- Delete a specific Healthcare Insurance Act record
- Get Details of a Healthcare Insurance Act record
- Put Edit the details of a Healthcare Insurance Act record
- Get List of Healthcare Insurance Act records for an employment
- Post Create a Healthcare Insurance Act record for an employment

</details>

<details>
<summary><b>Protected Earnings</b> (5 operations)</summary>

- Delete an protected earnings record
- Get the details of an protected earnings record
- Put Edit the details of an protected earnings record
- Get a list of protected earnings records
- Post Create a new protected earnings record

</details>

<details>
<summary><b>Deviating AWF Contribution</b> (5 operations)</summary>

- Delete a specific Deviating AWF contributions record
- Get Details of a Deviating AWF contributions record
- Put Edit the details of a Deviating AWF contributions record
- Get List of Deviating AWF contributions records for an employment
- Post Create a Deviating AWF contributions record for an employment

</details>

<details>
<summary><b>Transition Compensation</b> (2 operations)</summary>

- Post Calculate transition compensation
- Get default input parameters transition compensation

</details>

<details>
<summary><b>Activate Employee Profile</b> (1 operations)</summary>

- Patch Activate employee profile for the employment

</details>

<details>
<summary><b>Pension Benefit</b> (5 operations)</summary>

- Delete a pension benefit record
- Get Details of an pension benefit
- Put Edit a pension benefit record
- Get List pension benefit
- Post Add a pension benefit for an employment

</details>

<details>
<summary><b>Journal Allocation</b> (5 operations)</summary>

- Delete a specific journal allocation record
- Get Details of a journal allocation
- Put Edit the details of a journal allocation record
- Get List of journal allocations for an employment
- Post Create a new journal allocation record for an employment

</details>

<details>
<summary><b>Partner</b> (5 operations)</summary>

- Delete a specific partner record
- Get Details of a single partner
- Put Edit the details for a partner
- Get List of partners for an employee
- Post Create the partner for an employee

</details>

<details>
<summary><b>Declarations</b> (6 operations)</summary>

- Patch Process approved declarations
- Patch Review accept or reject open declarations
- Get Details of a declaration
- Get Audit trail of a declaration
- Get List of declarations for an employment
- Get List of declarations for the employees of an employer

</details>

<details>
<summary><b>Declarations Attachments</b> (2 operations)</summary>

- Get Download attachment
- Get a list of declarations with attachment

</details>

<details>
<summary><b>Employment Dossier</b> (6 operations)</summary>

- Get a list of employment dossier documents
- Post Upload a document to the employment dossier
- Delete a document in the employment dossier
- Get Download employment dossier document
- Put Edit the details of an employment dossier document
- Get audittrail for the document in the employment dossier

</details>

<details>
<summary><b>Cost Per Hour</b> (5 operations)</summary>

- Delete a cost per hour record
- Get Details of cost per hour
- Put Edit a cost per hour record
- Get List of costs per hour for an employment
- Post Add a cost per hour for an employment

</details>

<details>
<summary><b>Create Employment</b> (2 operations)</summary>

- Post Create transition compensation employment for existing employment
- Post Create employment for existing employee

</details>

<details>
<summary><b>Deviating Hourly Wage</b> (5 operations)</summary>

- Delete a deviating hourly wage record
- Get Details of an deviating hourly wage
- Put Edit a deviating hourly wage record
- Get List deviating hourly wage
- Post Add a deviating hourly wage for an employment

</details>

<details>
<summary><b>Wachtgeld</b> (5 operations)</summary>

- Delete a wachtgeld record
- Get Details of wachtgeld
- Put Edit a wachtgeld record
- Get List wachtgeld
- Post Add a wachtgeld for an employment

</details>

<details>
<summary><b>Custom Notification</b> (5 operations)</summary>

- Delete a custom notification record
- Get Details of a custom notification
- Put Edit a custom notification record
- Get List custom notification
- Post Add a custom notification for an employment

</details>

<details>
<summary><b>Employment Custom Field</b> (5 operations)</summary>

- Delete an employment custom field record
- Get Details of an employment custom field
- Put Edit an employment custom field record
- Get List employment custom fields for an employment
- Post Add an employment custom field for an employment

</details>

<details>
<summary><b>Email Identities</b> (10 operations)</summary>

- Delete an EmailIdentity for a provider
- Post Provider emailIdentity test email
- Delete an EmailIdentity for an employer
- Post Employer emailIdentity test email
- Get List of EmailIdentities for an employer
- Post Create an EmailIdentity for an employer
- Post Verify an EmailIdentity for an employer
- Get List of EmailIdentities for a provider
- Post Create an EmailIdentity for a provider
- Post Verify an EmailIdentity for a provider

</details>

<details>
<summary><b>Wage Proposal</b> (2 operations)</summary>

- Patch Accept or reject wage proposals
- Get List of wage proposals for the employments of an employer

</details>

<details>
<summary><b>Employment Notes</b> (5 operations)</summary>

- Delete an employment note record
- Get Details of an employment note
- Put Edit an employment note record
- Get a list of notes for an employment
- Post Add a note for an employment

</details>

<details>
<summary><b>Payroll Simulator</b> (1 operations)</summary>

- Get Overview of the data used in a payroll simulation

</details>

<details>
<summary><b>Wage Projection</b> (4 operations)</summary>

- Post Perform a wage projection
- Post Perform a wage projection based on a default CLA configuration
- Get Wage projection Collective labor agreements defaults
- Get List of collective labor agreements CLA

</details>

<details>
<summary><b>Employee Notes</b> (5 operations)</summary>

- Delete an employee note record
- Get Details of an employee note
- Put Edit an employee note record
- Get a list of notes for an employee
- Post Add a note for an employee

</details>

<details>
<summary><b>Employee Self Service</b> (4 operations)</summary>

- Patch Change the employee s self service ESS access
- Get Details of and employees self service portal status
- Get List of employee s and their ESS WNL status
- Patch Change the ESS access for several employees

</details>

<details>
<summary><b>Employee</b> (10 operations)</summary>

- Get Details of an employee
- Put Edit the details of an employee
- Get Citizen service number of an employee
- Put Update the citizen service number of an employee
- Delete employee photo
- Get Photo of an employee
- Post employee photo
- Get Photo of an employee
- Patch Set the date on which to revoke ESS access
- Get List of employees for an employer

</details>

<details>
<summary><b>Employee Benefits</b> (2 operations)</summary>

- Get Benify URL for an employee
- Get Yourcampus URL for a user

</details>

<details>
<summary><b>Leave Policy</b> (21 operations)</summary>

- Delete an age based leave record
- Get An age based leave record
- Put Edit the details of an age based leave
- Delete a wage based leave record
- Get A wage based leave record
- Put Edit the details of a wage based leave
- Delete an years of service based leave record
- Get A years of service based leave record
- Put Edit the details of a years of service based leave
- Delete a leave policy
- Get A single leave policy
- Put Edit the details of a leave policy
- Get Age based leave
- Post Create an age based leave record
- Get Wage based leave
- Post Create a wage based leave record
- Get years of service based leave
- Post Create a years of service based leave record
- Get List of all the leave policies
- Patch Create a leave policy based on an existing leave policy
- Post Create a leave policy

</details>

<details>
<summary><b>Payroll Administration Process Overview</b> (1 operations)</summary>

- Get Process Information about a payroll on administration level

</details>

<details>
<summary><b>Payroll Administration Reports</b> (7 operations)</summary>

- Get Download accumulated basic journal results report
- Get Download accumulations and balances reports
- Get Download annual payroll tax return report
- Get Download annual wage sheet report
- Get Download attachment of earnings report
- Get Download WAB deviations report
- Get Download payroll administration configuration report

</details>

<details>
<summary><b>Payroll Component Set</b> (1 operations)</summary>

- Get Available payroll component sets

</details>

<details>
<summary><b>Occupational Disability</b> (1 operations)</summary>

- Get List of occupational disabilities for an employee

</details>

<details>
<summary><b>Change Address Request</b> (1 operations)</summary>

- Post Start the change address workflow for an employee

</details>

<details>
<summary><b>Change Contactinformation Request</b> (1 operations)</summary>

- Post Start the change contactinformation workflow for an employee

</details>

<details>
<summary><b>Notification</b> (2 operations)</summary>

- Patch Mark one or more notifications as read
- Get a list of notifications for an employer

</details>

<details>
<summary><b>Functions</b> (4 operations)</summary>

- Get Details of a function
- Put Edit the details of a function
- Get List of functions
- Post Create a function for an employer

</details>

<details>
<summary><b>Year End Statement At Administration Level</b> (2 operations)</summary>

- Get Year end statements for the payroll administration
- Get Download year end statement of a payroll administration for a year

</details>

<details>
<summary><b>Audit Trail</b> (3 operations)</summary>

- Get payroll period data audit trail
- Get Download the audit trail for the payroll period data
- Get the employee data audit trail

</details>

<details>
<summary><b>Payroll Results</b> (2 operations)</summary>

- Get the results of the given payroll period and the one before
- Get payroll results for the given payroll period

</details>

<details>
<summary><b>Payroll Run</b> (2 operations)</summary>

- Get Details of a payrollrun
- Get List of payroll runs for an administration

</details>

<details>
<summary><b>Payroll Run Downloads</b> (12 operations)</summary>

- Get Download a SEPA file
- Get payroll run balance sheet
- Get Download the default set of downloads for a payroll run
- Get Download errors and warnings for a payroll run
- Get Download the journal entries by distribution Unit
- Get Download payment overviews for a payroll run
- Get Download payroll control register for a payroll run
- Get Download payslips for a payroll run
- Get Download run overviews for a payroll run
- Get a list of SEPA files for a payroll run
- Get Download a total SEPA file
- Get Download wage sheets for a payroll run

</details>

<details>
<summary><b>Payroll Run Results</b> (1 operations)</summary>

- Get results for a payroll run

</details>

<details>
<summary><b>Period Ready For Payroll</b> (1 operations)</summary>

- Post Send an email to inform the salary administrator

</details>

<details>
<summary><b>Journal Run</b> (8 operations)</summary>

- Get Details of a journal run
- Patch Change the status of a journal run
- Post Download the journal run
- Get Errors of a journal run
- Get List export attempts for a journal run
- Post Send the journal run
- Get List of journal runs for an administration
- Post Initiate journal run journaliseren

</details>

<details>
<summary><b>Journal Run Results</b> (1 operations)</summary>

- Get journal results for a journal run

</details>

<details>
<summary><b>Journal Run Overview</b> (2 operations)</summary>

- Get journal run overview for a journal run
- Get journal run overview per employment for a journal run

</details>

<details>
<summary><b>Payroll Period Data On Administration Level</b> (1 operations)</summary>

- Get List of payroll period data on payroll administration level

</details>

<details>
<summary><b>Payroll Tax Return</b> (5 operations)</summary>

- Patch Change the status of payroll tax returns
- Get Details of a tax return for an administration
- Get Pay payroll taxes using IDEAL
- Get the status of the IDEAL payment
- Get List of tax returns for an administration

</details>

<details>
<summary><b>Payroll Tax Return Downloads</b> (3 operations)</summary>

- Get Download the message of a payroll tax return
- Get Download the overview report of a payroll tax return
- Get Download the SEPA file for a payroll tax return

</details>

<details>
<summary><b>Payroll Tax Return Response Message</b> (1 operations)</summary>

- Post Send the response message for the payroll tax return

</details>

<details>
<summary><b>Payroll Tax Return By Message Reference</b> (2 operations)</summary>

- Patch Change the status of payroll tax returns
- Post Send the response message for the payroll tax return

</details>

<details>
<summary><b>Initialise Payroll Period</b> (1 operations)</summary>

- Post Initialise Payroll Period automatische processen

</details>

<details>
<summary><b>Initiate Payroll Run</b> (2 operations)</summary>

- Post Initiate payroll run verlonen
- Get Initiationvalues of a payrollrun

</details>

<details>
<summary><b>Review Payroll Run</b> (1 operations)</summary>

- Patch Change the status of payrollruns

</details>

<details>
<summary><b>Undo Payroll Run</b> (1 operations)</summary>

- Post Undo payroll run verwijderen loonrun

</details>

<details>
<summary><b>Apg Pension Declaration</b> (6 operations)</summary>

- Get Detail APG pension declaration for an administration
- Patch Change the status of a apg pension declaration
- Get Download the message of a of an APG pension declaration
- Get Download the overview report of an APG pension declaration
- Get List of APG pension declarations for an administration
- Post Initiate a APG pension declaration

</details>

<details>
<summary><b>Last Modified Version Numbers</b> (2 operations)</summary>

- Get List of employer last modified version numbers
- Get List of employment version numbers

</details>

<details>
<summary><b>Employer Notes</b> (5 operations)</summary>

- Delete an employer note record
- Get Details of an employer note
- Put Edit an employer note record
- Get a list of notes for an employer
- Post Add a note for an employer

</details>

<details>
<summary><b>Mdv Notifications</b> (1 operations)</summary>

- Patch MDV notifications

</details>

<details>
<summary><b>Payroll Run Notes</b> (5 operations)</summary>

- Delete a payroll run note record
- Get Details of a payroll run note
- Put Edit a payroll run note record
- Get a list of notes for a payroll run
- Post Add a note for a payroll run

</details>

<details>
<summary><b>Upa Pension Declaration</b> (5 operations)</summary>

- Get Detail UPA pension declaration
- Patch Change the status of a upa pension declaration
- Get Download the message of a of an UPA pension declaration
- Get List of UPA pension declarations
- Post Initiate a UPA pension declaration

</details>

<details>
<summary><b>Audit Trail Payroll Run</b> (1 operations)</summary>

- Get Download the audit trail for the employment payroll data

</details>

<details>
<summary><b>Payroll Components</b> (1 operations)</summary>

- Get Payroll components

</details>

<details>
<summary><b>Payroll Periods</b> (2 operations)</summary>

- Get List of all available payroll periods and runs
- Get List of all available payroll periods

</details>

<details>
<summary><b>Initiate Payroll Tax Return</b> (1 operations)</summary>

- Post Initiate payroll tax return aanmaken loonaangifte

</details>

<details>
<summary><b>Download Request</b> (5 operations)</summary>

- Get List of download requests for an employment
- Post Create a download request
- Delete a specific download request record
- Get Details of a download request record
- Get Download file of download request

</details>

<details>
<summary><b>External Tenant Employer User</b> (2 operations)</summary>

- Get Configured external tenant for an employer user
- Patch Add an external tenant for an employer user

</details>

<details>
<summary><b>Employer User</b> (8 operations)</summary>

- Delete a specific user record
- Get Details of an user
- Patch Resend or change the status of an invite for an employer user
- Put Edit the details of an user
- Get List of users for an employer
- Post Create an SSO or Azure AD user for an employer
- Post Send an invite for an employer user
- Post Link an existing employer user to this employer

</details>

<details>
<summary><b>Linked Employers</b> (1 operations)</summary>

- Get List of employers linked to the user

</details>

<details>
<summary><b>Collective Leave</b> (1 operations)</summary>

- Post leave for multiple employments

</details>

<details>
<summary><b>Administration</b> (1 operations)</summary>

- Get List of administrations for an employer

</details>

<details>
<summary><b>Payroll Administration</b> (1 operations)</summary>

- Get List of payroll administrations for an employer

</details>

<details>
<summary><b>Calendar</b> (4 operations)</summary>

- Get List absences per employment for calendar
- Get List available hours per employment for calendar
- Get List leave per employment for calendar
- Get List leave requests per employment for calendar

</details>

<details>
<summary><b>User</b> (10 operations)</summary>

- Get List of all the integrations for the employer user
- Delete an integration
- Put Change an integration
- Get Download the application logo
- Get current user
- Put Edit current user
- Delete user photo
- Get Photo of an user
- Post user photo
- Get List of all the integrations for the logon user

</details>

<details>
<summary><b>Employer User Notification Settings</b> (2 operations)</summary>

- Get The notification settings for the user
- Patch Manage the employer user notification settings

</details>

<details>
<summary><b>Authorizations</b> (2 operations)</summary>

- Get List of authorized activities with regard to the employer
- Get List of authorized activities with regard to the provider

</details>

<details>
<summary><b>Employer Dashboard</b> (1 operations)</summary>

- Get Dashboard of an employer

</details>

<details>
<summary><b>Workflow Trigger Mapping</b> (5 operations)</summary>

- Delete a specific workflow trigger mapping record
- Get Details of a workflow trigger mapping record
- Put Edit the details of a workflow trigger mapping record
- Get Workflowtrigger to workflowtemplate mapping
- Post Create a workflow trigger mapping record for an employer

</details>

<details>
<summary><b>National Holiday</b> (3 operations)</summary>

- Get List of national holidays
- Get Details of a national holiday
- Put Edit the details of a national holidays

</details>

<details>
<summary><b>Billable Item</b> (1 operations)</summary>

- Get List of billable items

</details>

<details>
<summary><b>Actuals</b> (7 operations)</summary>

- Get List of actual organizational entities for an employer
- Get List of actual wages for an employer
- Get List of actual working hours for an employer
- Get List of Partners for an employer
- Get List of Children for an employer
- Get List of Contacts for an employer
- Get List of actual benefitsanddeductions for an employer

</details>

<details>
<summary><b>Qwoater</b> (1 operations)</summary>

- Get List of employers using Qwoater

</details>

<details>
<summary><b>Workflows</b> (6 operations)</summary>

- Get Details of a workflow
- Put Change the workflow
- Post Allows the user to transition the workflow
- Get Workflows assigned to the user
- Get Workflows for the employer
- Get Workflows initiated by the user

</details>

<details>
<summary><b>Dashboard Licenses</b> (2 operations)</summary>

- Get the list dashboard licenses
- Put Edit the dashboard license

</details>

<details>
<summary><b>Employment Template</b> (1 operations)</summary>

- Get Employment templates

</details>

<details>
<summary><b>Employer Dossier</b> (6 operations)</summary>

- Get a list of employer dossier documents
- Post Upload a document to the employer dossier
- Delete a document in the employer dossier
- Get Download employer dossier document
- Put Edit the details of an employer dossier document
- Get audittrail for the document in the employer dossier

</details>

<details>
<summary><b>Document Management</b> (4 operations)</summary>

- Get List of authorizations
- Put Edit the authorization matrix
- Delete complete dossier
- Post Generate complete dossier

</details>

<details>
<summary><b>Document Template</b> (5 operations)</summary>

- Get a list of document templates
- Post Upload a document template to the employer dossier
- Delete a document template in the employer dossier
- Get Download template document
- Put Edit the details of an document template

</details>

<details>
<summary><b>Email Templates</b> (4 operations)</summary>

- Get List email templates for an employer
- Delete an email template record
- Get Details of an email template
- Put Edit an email template record

</details>

<details>
<summary><b>Collective Benefits And Deductions</b> (1 operations)</summary>

- Post Create benefits and deductions for multiple employments

</details>

<details>
<summary><b>Collective Wage</b> (1 operations)</summary>

- Post Create wages for multiple employments

</details>

<details>
<summary><b>External Tenant</b> (2 operations)</summary>

- Get available external tenants employer scope
- Get available external tenants provider scope

</details>

<details>
<summary><b>Leave Types</b> (3 operations)</summary>

- Get List of leave types
- Get Details of a leave type
- Put Edit the details of a leave type

</details>

<details>
<summary><b>Modules</b> (1 operations)</summary>

- Get List of modules enabled for the employer

</details>

<details>
<summary><b>Proforma</b> (2 operations)</summary>

- Get the status of proforma for this employer
- Post Initialize the proforma environment

</details>

<details>
<summary><b>Linked Departments</b> (2 operations)</summary>

- Get the list of departments that the user has access to
- Patch Link or unlink departments from an user

</details>

<details>
<summary><b>Employer User Authorizations</b> (2 operations)</summary>

- Get The authorizations for the user
- Patch Manage the employer user authorizations

</details>

<details>
<summary><b>Provider Leave Policy</b> (5 operations)</summary>

- Get A single leave policy
- Get Age based leave
- Get Wage based leave
- Get years of service based leave
- Get List of all the leave policies at provider level

</details>

<details>
<summary><b>Notification Sets</b> (2 operations)</summary>

- Get Details of a notification set
- Get List of notification sets

</details>

<details>
<summary><b>External Tenant Provider User</b> (2 operations)</summary>

- Get Configured external tenant for a provider user
- Patch Add an external tenant for a provider user

</details>

<details>
<summary><b>Billable Items</b> (1 operations)</summary>

- Get List of billable items

</details>

<details>
<summary><b>Emailtemplates</b> (2 operations)</summary>

- Get List email templates for an provider
- Get Details of an email template

</details>

<details>
<summary><b>Payroll Process Status</b> (1 operations)</summary>

- Get Payroll status for each administration

</details>

<details>
<summary><b>User Filter Settings</b> (2 operations)</summary>

- Get user filter settings
- Put Edit the user filter settings

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from loket docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official loket OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **loket** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the loket API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
