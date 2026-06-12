import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { achmeaDescription } from './resources/achmea';
import { aowDateDescription } from './resources/aow-date';
import { applicationDescription } from './resources/application';
import { absenceDescription } from './resources/absence';
import { absenceProgressDescription } from './resources/absence-progress';
import { contactHistoryDescription } from './resources/contact-history';
import { contactDescription } from './resources/contact';
import { employerDescription } from './resources/employer';
import { conceptEmployeeDescription } from './resources/concept-employee';
import { announcementDescription } from './resources/announcement';
import { dataNewBusinessDescription } from './resources/data-new-business';
import { departmentsDescription } from './resources/departments';
import { customHolidayDescription } from './resources/custom-holiday';
import { preboardingTrajectoryDescription } from './resources/preboarding-trajectory';
import { benefitsAndDeductionsDescription } from './resources/benefits-and-deductions';
import { chamberOfCommerceDescription } from './resources/chamber-of-commerce';
import { abpFundsDescription } from './resources/abp-funds';
import { baseForEmploymentFundCalculationDescription } from './resources/base-for-employment-fund-calculation';
import { baseForCalculationDescription } from './resources/base-for-calculation';
import { attachmentOfEarningsDescription } from './resources/attachment-of-earnings';
import { providerDescription } from './resources/provider';
import { authorizationSetsDescription } from './resources/authorization-sets';
import { addressDescription } from './resources/address';
import { childDescription } from './resources/child';
import { paygradeDescription } from './resources/paygrade';
import { conceptEmployeeDossierDescription } from './resources/concept-employee-dossier';
import { assessmentDescription } from './resources/assessment';
import { benefitInKindDescription } from './resources/benefit-in-kind';
import { educationDescription } from './resources/education';
import { employeeCustomFieldDescription } from './resources/employee-custom-field';
import { customFieldDescription } from './resources/custom-field';
import { educationTypeDescription } from './resources/education-type';
import { educationFurtherIndicationDescription } from './resources/education-further-indication';
import { contractCodeDescription } from './resources/contract-code';
import { benefitInKindTypeDescription } from './resources/benefit-in-kind-type';
import { generateDocumentDescription } from './resources/generate-document';
import { signDocumentDescription } from './resources/sign-document';
import { applicationsetsDescription } from './resources/applicationsets';
import { emailIdentitiesDescription } from './resources/email-identities';
import { importDescription } from './resources/import';
import { conceptEmployeeSelfServiceDescription } from './resources/concept-employee-self-service';
import { leaveDescription } from './resources/leave';
import { leaveRequestDescription } from './resources/leave-request';
import { leaveBalanceDescription } from './resources/leave-balance';
import { leavePolicyAndEmploymentLinksDescription } from './resources/leave-policy-and-employment-links';
import { employmentDescription } from './resources/employment';
import { organizationalEntityDescription } from './resources/organizational-entity';
import { payrollPeriodDataDescription } from './resources/payroll-period-data';
import { wageDescription } from './resources/wage';
import { workingHoursDescription } from './resources/working-hours';
import { payslipDescription } from './resources/payslip';
import { yearEndStatementDescription } from './resources/year-end-statement';
import { paymentInformationDescription } from './resources/payment-information';
import { paymentInformationSeparatePaymentsDescription } from './resources/payment-information-separate-payments';
import { paymentInformationNonSepaDescription } from './resources/payment-information-non-sepa';
import { fiscalPropertiesDescription } from './resources/fiscal-properties';
import { fiscalCompanyCarDescription } from './resources/fiscal-company-car';
import { companyCarDescription } from './resources/company-car';
import { otherPayrollVariablesDescription } from './resources/other-payroll-variables';
import { employmentFundsDescription } from './resources/employment-funds';
import { socialSecurityDescription } from './resources/social-security';
import { socialSecurityBenefitsDescription } from './resources/social-security-benefits';
import { healthcareInsuranceActDescription } from './resources/healthcare-insurance-act';
import { protectedEarningsDescription } from './resources/protected-earnings';
import { deviatingAwfContributionDescription } from './resources/deviating-awf-contribution';
import { transitionCompensationDescription } from './resources/transition-compensation';
import { activateEmployeeProfileDescription } from './resources/activate-employee-profile';
import { pensionBenefitDescription } from './resources/pension-benefit';
import { journalAllocationDescription } from './resources/journal-allocation';
import { partnerDescription } from './resources/partner';
import { declarationsDescription } from './resources/declarations';
import { declarationsAttachmentsDescription } from './resources/declarations-attachments';
import { employmentDossierDescription } from './resources/employment-dossier';
import { costPerHourDescription } from './resources/cost-per-hour';
import { createEmploymentDescription } from './resources/create-employment';
import { deviatingHourlyWageDescription } from './resources/deviating-hourly-wage';
import { wachtgeldDescription } from './resources/wachtgeld';
import { customNotificationDescription } from './resources/custom-notification';
import { employmentCustomFieldDescription } from './resources/employment-custom-field';
import { wageProposalDescription } from './resources/wage-proposal';
import { employmentNotesDescription } from './resources/employment-notes';
import { payrollSimulatorDescription } from './resources/payroll-simulator';
import { wageProjectionDescription } from './resources/wage-projection';
import { employeeNotesDescription } from './resources/employee-notes';
import { employeeSelfServiceDescription } from './resources/employee-self-service';
import { employeeDescription } from './resources/employee';
import { employeeBenefitsDescription } from './resources/employee-benefits';
import { leavePolicyDescription } from './resources/leave-policy';
import { payrollAdministrationProcessOverviewDescription } from './resources/payroll-administration-process-overview';
import { payrollAdministrationReportsDescription } from './resources/payroll-administration-reports';
import { payrollComponentSetDescription } from './resources/payroll-component-set';
import { occupationalDisabilityDescription } from './resources/occupational-disability';
import { changeAddressRequestDescription } from './resources/change-address-request';
import { changeContactinformationRequestDescription } from './resources/change-contactinformation-request';
import { notificationDescription } from './resources/notification';
import { functionsDescription } from './resources/functions';
import { yearEndStatementAtAdministrationLevelDescription } from './resources/year-end-statement-at-administration-level';
import { auditTrailDescription } from './resources/audit-trail';
import { payrollResultsDescription } from './resources/payroll-results';
import { payrollRunDescription } from './resources/payroll-run';
import { payrollRunDownloadsDescription } from './resources/payroll-run-downloads';
import { payrollRunResultsDescription } from './resources/payroll-run-results';
import { periodReadyForPayrollDescription } from './resources/period-ready-for-payroll';
import { journalRunDescription } from './resources/journal-run';
import { journalRunResultsDescription } from './resources/journal-run-results';
import { journalRunOverviewDescription } from './resources/journal-run-overview';
import { payrollPeriodDataOnAdministrationLevelDescription } from './resources/payroll-period-data-on-administration-level';
import { payrollTaxReturnDescription } from './resources/payroll-tax-return';
import { payrollTaxReturnDownloadsDescription } from './resources/payroll-tax-return-downloads';
import { payrollTaxReturnResponseMessageDescription } from './resources/payroll-tax-return-response-message';
import { payrollTaxReturnByMessageReferenceDescription } from './resources/payroll-tax-return-by-message-reference';
import { initialisePayrollPeriodDescription } from './resources/initialise-payroll-period';
import { initiatePayrollRunDescription } from './resources/initiate-payroll-run';
import { reviewPayrollRunDescription } from './resources/review-payroll-run';
import { undoPayrollRunDescription } from './resources/undo-payroll-run';
import { apgPensionDeclarationDescription } from './resources/apg-pension-declaration';
import { lastModifiedVersionNumbersDescription } from './resources/last-modified-version-numbers';
import { employerNotesDescription } from './resources/employer-notes';
import { mdvNotificationsDescription } from './resources/mdv-notifications';
import { payrollRunNotesDescription } from './resources/payroll-run-notes';
import { upaPensionDeclarationDescription } from './resources/upa-pension-declaration';
import { auditTrailPayrollRunDescription } from './resources/audit-trail-payroll-run';
import { payrollComponentsDescription } from './resources/payroll-components';
import { payrollPeriodsDescription } from './resources/payroll-periods';
import { initiatePayrollTaxReturnDescription } from './resources/initiate-payroll-tax-return';
import { downloadRequestDescription } from './resources/download-request';
import { externalTenantEmployerUserDescription } from './resources/external-tenant-employer-user';
import { employerUserDescription } from './resources/employer-user';
import { linkedEmployersDescription } from './resources/linked-employers';
import { collectiveLeaveDescription } from './resources/collective-leave';
import { administrationDescription } from './resources/administration';
import { payrollAdministrationDescription } from './resources/payroll-administration';
import { calendarDescription } from './resources/calendar';
import { userDescription } from './resources/user';
import { employerUserNotificationSettingsDescription } from './resources/employer-user-notification-settings';
import { authorizationsDescription } from './resources/authorizations';
import { employerDashboardDescription } from './resources/employer-dashboard';
import { workflowTriggerMappingDescription } from './resources/workflow-trigger-mapping';
import { nationalHolidayDescription } from './resources/national-holiday';
import { billableItemDescription } from './resources/billable-item';
import { actualsDescription } from './resources/actuals';
import { qwoaterDescription } from './resources/qwoater';
import { workflowsDescription } from './resources/workflows';
import { dashboardLicensesDescription } from './resources/dashboard-licenses';
import { employmentTemplateDescription } from './resources/employment-template';
import { employerDossierDescription } from './resources/employer-dossier';
import { documentManagementDescription } from './resources/document-management';
import { documentTemplateDescription } from './resources/document-template';
import { emailTemplatesDescription } from './resources/email-templates';
import { collectiveBenefitsAndDeductionsDescription } from './resources/collective-benefits-and-deductions';
import { collectiveWageDescription } from './resources/collective-wage';
import { externalTenantDescription } from './resources/external-tenant';
import { leaveTypesDescription } from './resources/leave-types';
import { modulesDescription } from './resources/modules';
import { proformaDescription } from './resources/proforma';
import { linkedDepartmentsDescription } from './resources/linked-departments';
import { employerUserAuthorizationsDescription } from './resources/employer-user-authorizations';
import { providerLeavePolicyDescription } from './resources/provider-leave-policy';
import { notificationSetsDescription } from './resources/notification-sets';
import { externalTenantProviderUserDescription } from './resources/external-tenant-provider-user';
import { billableItemsDescription } from './resources/billable-items';
import { emailtemplatesDescription } from './resources/emailtemplates';
import { payrollProcessStatusDescription } from './resources/payroll-process-status';
import { userFilterSettingsDescription } from './resources/user-filter-settings';

export class Loket implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Loket',
                name: 'N8nDevLoket',
                icon: { light: 'file:./loket.png', dark: 'file:./loket.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'First time? Check our Loket API introduction.',
                defaults: { name: 'Loket' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevLoketApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Achmea",
					"value": "Achmea",
					"description": "NL: Achmea Verzuimverzekering. Manage the insurance contracts with Achmea"
				},
				{
					"name": "AOW Date",
					"value": "AOW Date",
					"description": ""
				},
				{
					"name": "Application",
					"value": "Application",
					"description": ""
				},
				{
					"name": "Absence",
					"value": "Absence",
					"description": "NL: Ziekmelding. Absences due to either sickness/illness or absence due to, for example, maternity or organ donation (in Dutch 'vangnet').\n\nPlease note: when adding or updating an Absence or AbsenceProgress there will be no additional 'Melding' created in Loket.nl . This legacy mechanism in the older Loket GUI will NOT be included in the newer version of Loket.nl  \n"
				},
				{
					"name": "Absence Progress",
					"value": "Absence Progress",
					"description": "NL: Ziekteverloop. Absences due to either sickness/illness or absence due to, for example, maternity or organ donation (in Dutch 'vangnet'). One Absence contains one or more AbsenceProgress, indicating the degree of occupational disability over time of the absence.\n\nPlease note: when adding or updating an Absence or AbsenceProgress there will be no additional 'Melding' created in Loket.nl . This legacy mechanism in the older Loket GUI will NOT be included in the newer version of Loket.nl  \n"
				},
				{
					"name": "Contact History",
					"value": "Contact History",
					"description": "NL: Contact historie. History of all contacts with the employee"
				},
				{
					"name": "Contact",
					"value": "Contact",
					"description": "NL: Contactpersoon. Contact person of an employee"
				},
				{
					"name": "Employer",
					"value": "Employer",
					"description": "NL: Werkgever. Manage an employer"
				},
				{
					"name": "Concept Employee",
					"value": "Concept Employee",
					"description": "NL: Concept Werknemer. Manage concept employees. In integrations with different applications it is sometimes necessary to use concept employee to create new employments within loket.nl. This is due to the fact that most systems don’t have all the fields required to create a new employment in loket.nl. Because for employee the validations are disabled. Allowing for the creation of a concept employee with only a subset of the fields that are required when creating a employment. At a later point the concept employee can be \"promoted\" to employee/employment using the Loket.nl interface. Please note that when a concept employee is promoted to an actual employee, the GUID of the employee will be identical to the concept employee from which it was created."
				},
				{
					"name": "Announcement",
					"value": "Announcement",
					"description": "NL: Mededelingen. Manage the announcements for a employer. Announcements are most commonly send by the system to inform the user changes in the CAO."
				},
				{
					"name": "Data New Business",
					"value": "Data New Business",
					"description": "Acquire a token to call the Data New Business (DNB) API"
				},
				{
					"name": "Departments",
					"value": "Departments",
					"description": "NL: Afdelingen. Manage the departments for the employer"
				},
				{
					"name": "Custom Holiday",
					"value": "Custom Holiday",
					"description": "NL: Eigen feestdagen. Manage the custom holidays for the employer."
				},
				{
					"name": "Preboarding Trajectory",
					"value": "Preboarding Trajectory",
					"description": "NL: Preboarding trajecten. "
				},
				{
					"name": "Benefits And Deductions",
					"value": "Benefits And Deductions",
					"description": "NL: Toeslagen. Payroll component data for part of, one or multiple payroll period(s). If the same `payrollComponent.Key` is also present in the `payroll period data` for a payroll period then, depending on the configuration in `payroll period data` the two values will either be 1) added up; or 2) payroll period data will overwrite the BenefitsAndDeduction for the given payroll period. Only certain payroll components are usable as a Benefit and Deduction, the corresponding categories are listed in payrollComponent.category in this resource. <br/> <br/>Per payroll component a so called 'broken chain' business logic applies. This means that the records for that payroll component may NOT overlap each other, based on startDate and endDate of each record. Also, if an existing record in the chain is not closed and a subsequent record is created than Loket will automatically set the endDate for the already existing record.\n"
				},
				{
					"name": "Chamber Of Commerce",
					"value": "Chamber Of Commerce",
					"description": "NL: Het opvragen van basis bedrijfsinformatie bij de kamer van koophandel."
				},
				{
					"name": "Abp Funds",
					"value": "Abp Funds",
					"description": "NL: Abp Fonds. The abp funds the employment partakes in"
				},
				{
					"name": "Base For Employment Fund Calculation",
					"value": "Base For Employment Fund Calculation",
					"description": "NL: FondsGrondslag. The base used in the calculation of the employment fund contribution"
				},
				{
					"name": "Base For Calculation",
					"value": "Base For Calculation",
					"description": "NL: Grondslag. The base used in certain calculation. Like the base amount to calculate leave allowance over"
				},
				{
					"name": "Attachment Of Earnings",
					"value": "Attachment Of Earnings",
					"description": "NL: Loonbeslag. Attachment of earnings is a legal process in civil litigation by which a defendant's wages or other earnings are taken to pay for a debt."
				},
				{
					"name": "Provider",
					"value": "Provider",
					"description": "NL: Provider (i.e. accountant) Provider related endpoints."
				},
				{
					"name": "Authorization Sets",
					"value": "Authorization Sets",
					"description": "NL: Autorisatie sets."
				},
				{
					"name": "Address",
					"value": "Address",
					"description": "Acquire address data"
				},
				{
					"name": "Child",
					"value": "Child",
					"description": "Manage children for an employee"
				},
				{
					"name": "Paygrade",
					"value": "Paygrade",
					"description": "Salarisschaalcel"
				},
				{
					"name": "Concept Employee Dossier",
					"value": "Concept Employee Dossier",
					"description": "Concept employee dossier (concept werknemerdossier). Via Qwoater"
				},
				{
					"name": "Assessment",
					"value": "Assessment",
					"description": "Initiate an assessment. (External)."
				},
				{
					"name": "Benefit In Kind",
					"value": "Benefit In Kind",
					"description": "NL: Verstrekking. Benefit in kind"
				},
				{
					"name": "Education",
					"value": "Education",
					"description": "NL: Opleiding. Education"
				},
				{
					"name": "Employee Custom Field",
					"value": "Employee Custom Field",
					"description": "NL: Persoon eigen veld. Employee custom field"
				},
				{
					"name": "Custom Field",
					"value": "Custom Field",
					"description": "NL: Eigen veld. Custom field"
				},
				{
					"name": "Education Type",
					"value": "Education Type",
					"description": "NL: Soort opleiding. Education type"
				},
				{
					"name": "Education Further Indication",
					"value": "Education Further Indication",
					"description": "NL: Opleiding nadere aanduiding. Education further indication"
				},
				{
					"name": "Contract Code",
					"value": "Contract Code",
					"description": "NL: Contractcode. Contract code"
				},
				{
					"name": "Benefit In Kind Type",
					"value": "Benefit In Kind Type",
					"description": "NL: Soort verstrekking. Benefit in kind type"
				},
				{
					"name": "Generate Document",
					"value": "Generate Document",
					"description": "NL: Genereer een document op basis van een template"
				},
				{
					"name": "Sign Document",
					"value": "Sign Document",
					"description": "NL: Onderteken een document"
				},
				{
					"name": "Applicationsets",
					"value": "Applicationsets",
					"description": "NL: Voorgedefineerde sets met bijvoorbeeld producten, rechten en exportvelden."
				},
				{
					"name": "Email Identities",
					"value": "Email Identities",
					"description": "NL: EmailIdenties die kunnen worden gebruikt als afzender bij het versturen van email."
				},
				{
					"name": "Import",
					"value": "Import",
					"description": ""
				},
				{
					"name": "Concept Employee Self Service",
					"value": "Concept Employee Self Service",
					"description": ""
				},
				{
					"name": "Leave",
					"value": "Leave",
					"description": "NL: Verlof. Leave entries both addition and subtraction"
				},
				{
					"name": "Leave Request",
					"value": "Leave Request",
					"description": "NL: Verlof aanvraag. Leave request for a certain type of leave. The types of leave can be managed at the employer level"
				},
				{
					"name": "Leave Balance",
					"value": "Leave Balance",
					"description": "NL: Verlof balans. Leave balances for all leave types known for the employment. The types of leave can be managed ath the employer level"
				},
				{
					"name": "Leave Policy And Employment Links",
					"value": "Leave Policy And Employment Links",
					"description": "These endpoints allow the user to link leave policies and employments to one and other. If an employment is linked to leave policy, than the employment will get leave (verlofopbouw) based on the regulations when these are applied. The may a many-to-many relationship."
				},
				{
					"name": "Employment",
					"value": "Employment",
					"description": "NL: Dienstverband. Manage an employment"
				},
				{
					"name": "Organizational Entity",
					"value": "Organizational Entity",
					"description": "NL: Organisatorische Eenheid/ WerknemerFunctie. Manage the organizational entity for an employment, this includes but is not limited to department and function. <br/> <br/>For Organizational Entity records, so called 'linked chain' business logic applies. This means that the records for that payroll component may NOT overlap each other, based on startDate and endDate of each record, AND because it is a linked chain is not allowed to have 'gaps' between separate records. This also means that if an existing record in the chain is not closed and a subsequent record is created than Loket will automatically set the endDate for the already existing record (and vice versa when deleting a record).\n"
				},
				{
					"name": "Payroll Period Data",
					"value": "Payroll Period Data",
					"description": "NL: Variabele gegevens. Payroll period data (e.g. hours worked or specific bonus) relates to a single payroll period.\n\nThere are also several other payroll related resources that work with start and end dates allowing these resources to span multiple payroll periods. We refer to those resources as payroll data, however THIS endpoint allows the user to determine only the value of specific payroll components for a specific payroll period (variabele gegevens, vs vaste gegevens).   The payroll components that may be used as payroll period data (f.e. example component 1 relates to the normal hours worked in that period) are specific for the payroll administration to be used, even though there are some overall generic consistencies."
				},
				{
					"name": "Wage",
					"value": "Wage",
					"description": "NL: Beloning. Manage the wage of an employment <br/> <br/>For Wage records, so called 'linked chain' business logic applies. This means that the records for that payroll component may NOT overlap each other, based on startDate and endDate of each record, AND because it is a linked chain is not allowed to have 'gaps' between separate records. This also means that if an existing record in the chain is not closed and a subsequent record is created than Loket will automatically set the endDate for the already existing record (and vice versa when deleting a record).\n"
				},
				{
					"name": "Working Hours",
					"value": "Working Hours",
					"description": "NL: Werktijd/ Arbeidstijd. Manage the working hours of an employment <br/> <br/>For WorkingHours records, so called 'linked chain' business logic applies. This means that the records for that payroll component may NOT overlap each other, based on startDate and endDate of each record, AND because it is a linked chain is not allowed to have 'gaps' between separate records. This also means that if an existing record in the chain is not closed and a subsequent record is created than Loket will automatically set the endDate for the already existing record (and vice versa when deleting a record).\n"
				},
				{
					"name": "Payslip",
					"value": "Payslip",
					"description": "NL: Loonstroken/loonresultaten werknemer. Download the payslip(s) for an employment"
				},
				{
					"name": "Year End Statement",
					"value": "Year End Statement",
					"description": "NL: Jaaropgave. Download the year-end statement(s) for an employment"
				},
				{
					"name": "Payment Information",
					"value": "Payment Information",
					"description": "NL: Excasso (i.e. SEPA, IBAN). Manage the payment information. To what (SEPA country) IBAN is the wage/salary to be payed to. NOTEL by far the largest part of outgoing payments will be based on the information in these SEPA payment information records (i.e. this resource). Other resources may contain further payment specifics."
				},
				{
					"name": "Payment Information Separate Payments",
					"value": "Payment Information Separate Payments",
					"description": "NL: Excasso afgesplitst van netto. This entity indicates, if applicable, the bank account(s) (i.e. IBAN's) where a given amount of the net salary for this employment will be paid to.\n \n\nNormally, the IBAN for the payment of net wage will be set by the PaymentInformation(SEPA) record. However, this entity allows to take a part of the net salary (a fixed amount) and set this to a different IBAN (for that part of the payment). For example, when a person wants to have part of his earnings to his regular banking account and part of his earnings to his savings account.\n"
				},
				{
					"name": "Payment Information Non SEPA",
					"value": "Payment Information Non SEPA",
					"description": "NL: Excasso Buitenland. Manage the payment information for non-SEPA payments. Mostly useful for performing foreign payments in case no SEPA/IBAN information is available."
				},
				{
					"name": "Fiscal Properties",
					"value": "Fiscal Properties",
					"description": "NL: Fiscaal / Fiscale gegevens. Manage the fiscal property settings for an employment."
				},
				{
					"name": "Fiscal Company Car",
					"value": "Fiscal Company Car",
					"description": "NL: Werknemer auto fiscaal. Registration of company car for fiscal (tax-related) purposes"
				},
				{
					"name": "Company Car",
					"value": "Company Car",
					"description": "NL: Werknemer auto. Registration of company car for HRM purposes"
				},
				{
					"name": "Other Payroll Variables",
					"value": "Other Payroll Variables",
					"description": "NL: Diversen salarisverwerking. A collection of a divers set of payroll, wagetax and pension variables."
				},
				{
					"name": "Employment Funds",
					"value": "Employment Funds",
					"description": "NL: Fonds. The funds the employment partakes in"
				},
				{
					"name": "Social Security",
					"value": "Social Security",
					"description": "NL: Sociale verzekering. The configuration of these social security indications determines how these are handled in the payroll calculation processes for this employment."
				},
				{
					"name": "Social Security Benefits",
					"value": "Social Security Benefits",
					"description": "NL: Sociale uitkering. The configuration of these social security benefits determines how these are handled in the payroll calculation processes for this employment. This is a deviation from what is configured at payroll administration level."
				},
				{
					"name": "Healthcare Insurance Act",
					"value": "Healthcare Insurance Act",
					"description": "NL: WerknemerZVW. The configuration of the Healthcare Insurance Act indications determines the calculation of the premiums in the payroll calculation processes for this employment"
				},
				{
					"name": "Protected Earnings",
					"value": "Protected Earnings",
					"description": "NL: Beslagvrije voet. The protected earnings rate is agreed between the Court and the Employee and so will vary from order to order – it is not a predetermined amount. The Employees net take-home pay cannot be reduced by a attachment of earnings so that it is lower than this amount."
				},
				{
					"name": "Deviating AWF Contribution",
					"value": "Deviating AWF Contribution",
					"description": "NL: Afwijkende AWF-premie. From 2020 it is possible that in exceptional cases a deviating AWF contribution (afwijkende AWF premie) has to be applied for an employment. If no exception is applicable please do not use this entity, in that case the payroll process will determine the applicable type of AWF contribution."
				},
				{
					"name": "Transition Compensation",
					"value": "Transition Compensation",
					"description": "NL: Transitievergoeding. Calculation help for determining tranistion compensation amount (transitievergoeding)"
				},
				{
					"name": "Activate Employee Profile",
					"value": "Activate Employee Profile",
					"description": "NL: Activeer profiel."
				},
				{
					"name": "Pension Benefit",
					"value": "Pension Benefit",
					"description": "NL: Pensioen uitkering. Pension benefit"
				},
				{
					"name": "Journal Allocation",
					"value": "Journal Allocation",
					"description": "NL: Verdeling journaal. Manage of the allocation to different costCenters and costUnits for a given employment"
				},
				{
					"name": "Partner",
					"value": "Partner",
					"description": "Manage partners for an employee"
				},
				{
					"name": "Declarations",
					"value": "Declarations",
					"description": "NL: Declaraties/werknemermutaties. Declarations can be created by the employee in Werknemerloket. After that the declarations will be subsequently reviewed and processed in the payrolling process. Please note that this ONLY includes the declarations via Werknemerloket, in general mutations are registered via payrollPeriodData"
				},
				{
					"name": "Declarations Attachments",
					"value": "Declarations Attachments",
					"description": "NL: Declaraties/werknemermutaties bijlagen. Declarations (werknemermutaties) may have an attachment linked to it. (via Qwoater dossier)"
				},
				{
					"name": "Employment Dossier",
					"value": "Employment Dossier",
					"description": "Employment dossier (werknemerdossier). Via Qwoater"
				},
				{
					"name": "Cost Per Hour",
					"value": "Cost Per Hour",
					"description": "NL: KPU/ Kostprijs per uur. Indicates cost per hour for this employment"
				},
				{
					"name": "Create Employment",
					"value": "Create Employment",
					"description": "NL: Extra dienstverband. Create an additonal employment for an already existing Employee (tweede dienstverband)"
				},
				{
					"name": "Deviating Hourly Wage",
					"value": "Deviating Hourly Wage",
					"description": "NL: Afwijkend uurloon. Deviating hourly wage"
				},
				{
					"name": "Wachtgeld",
					"value": "Wachtgeld",
					"description": "NL: Wachtgeld. Redundancy pay"
				},
				{
					"name": "Custom Notification",
					"value": "Custom Notification",
					"description": "NL: Eigen signaal. Custom notification"
				},
				{
					"name": "Employment Custom Field",
					"value": "Employment Custom Field",
					"description": "NL: Dienstverband eigen veld. Employment custom field"
				},
				{
					"name": "Email Identities",
					"value": "Email Identities",
					"description": "NL: Email Identies die kunnen worden gebruikt als afzender bij het versturen van email."
				},
				{
					"name": "Wage Proposal",
					"value": "Wage Proposal",
					"description": "Salarisvoorstel"
				},
				{
					"name": "Employment Notes",
					"value": "Employment Notes",
					"description": ""
				},
				{
					"name": "Payroll Simulator",
					"value": "Payroll Simulator",
					"description": ""
				},
				{
					"name": "Wage Projection",
					"value": "Wage Projection",
					"description": ""
				},
				{
					"name": "Employee Notes",
					"value": "Employee Notes",
					"description": ""
				},
				{
					"name": "Employee Self Service",
					"value": "Employee Self Service",
					"description": ""
				},
				{
					"name": "Employee",
					"value": "Employee",
					"description": "NL: Persoon. Manage an employee"
				},
				{
					"name": "Employee Benefits",
					"value": "Employee Benefits",
					"description": ""
				},
				{
					"name": "Leave Policy",
					"value": "Leave Policy",
					"description": "NL: Verlof regeling. Leave policies is used to set rules/ regulations for allocating leave numbers. Based on a leave policy leave can be generated automatically"
				},
				{
					"name": "Payroll Administration Process Overview",
					"value": "Payroll Administration Process Overview",
					"description": "NL: Overzicht met de status -en mogelijke acties voor een periode."
				},
				{
					"name": "Payroll Administration Reports",
					"value": "Payroll Administration Reports",
					"description": "NL: Overzichten administratie. Download available reports on payroll administration level"
				},
				{
					"name": "Payroll Component Set",
					"value": "Payroll Component Set",
					"description": "NL: Exportset/componentset. Pre-defined sets of payroll components. Useful when working with large list of components"
				},
				{
					"name": "Occupational Disability",
					"value": "Occupational Disability",
					"description": "NL: WAO/WIA. In case of occupational disabilities these can be manged here"
				},
				{
					"name": "Change Address Request",
					"value": "Change Address Request",
					"description": "Allows an employee the submit a change of address"
				},
				{
					"name": "Change Contactinformation Request",
					"value": "Change Contactinformation Request",
					"description": "Allows an employee the submit a change of contactinformation"
				},
				{
					"name": "Notification",
					"value": "Notification",
					"description": "NL: Signalen. Manage the notifications for a employer. Notifications are most commonly send by the system to inform the user of a certain event."
				},
				{
					"name": "Functions",
					"value": "Functions",
					"description": "NL: Functies. Manage the functions for the employer"
				},
				{
					"name": "Year End Statement At Administration Level",
					"value": "Year End Statement At Administration Level",
					"description": "NL: Jaaropgave. Download the year-end statement(s) for the employments of a payroll administration"
				},
				{
					"name": "Audit Trail",
					"value": "Audit Trail",
					"description": "NL: Mutatieverslag. Allows the user to see the changes that were made over time"
				},
				{
					"name": "Payroll Results",
					"value": "Payroll Results",
					"description": "NL: Loonresultaten. Payroll results"
				},
				{
					"name": "Payroll Run",
					"value": "Payroll Run",
					"description": "NL: Verloningsrun/loonrun. Manage the payroll runs"
				},
				{
					"name": "Payroll Run Downloads",
					"value": "Payroll Run Downloads",
					"description": "NL: Verloningsrun downloads. Download payroll runs related output (payslip, wage sheets etc)"
				},
				{
					"name": "Payroll Run Results",
					"value": "Payroll Run Results",
					"description": "NL: Loonresultaten per run. Acquire the data of the results of a payroll run"
				},
				{
					"name": "Period Ready For Payroll",
					"value": "Period Ready For Payroll",
					"description": "NL: Klaar met muteren."
				},
				{
					"name": "Journal Run",
					"value": "Journal Run",
					"description": "NL: Journaalrun. Manage the journal runs"
				},
				{
					"name": "Journal Run Results",
					"value": "Journal Run Results",
					"description": "NL: Journaalrun resultaten. Acquire the data of the results of a journal run"
				},
				{
					"name": "Journal Run Overview",
					"value": "Journal Run Overview",
					"description": "NL: Journaal run overzicht. Journal run overview in csv format"
				},
				{
					"name": "Payroll Period Data On Administration Level",
					"value": "Payroll Period Data On Administration Level",
					"description": "NL: Browser variabele gegevens. Payroll period data on administration level. (Get periods via payroll periods within the payroll category)"
				},
				{
					"name": "Payroll Tax Return",
					"value": "Payroll Tax Return",
					"description": "NL: Loonaangifte. Manage the payroll tax returns"
				},
				{
					"name": "Payroll Tax Return Downloads",
					"value": "Payroll Tax Return Downloads",
					"description": "NL: Loonaangifte downloads. Download tax return related output"
				},
				{
					"name": "Payroll Tax Return Response Message",
					"value": "Payroll Tax Return Response Message",
					"description": "NL: Loonaangifte response message. Payroll tax return response message"
				},
				{
					"name": "Payroll Tax Return By Message Reference",
					"value": "Payroll Tax Return By Message Reference",
					"description": "NL: Loonaangifte obv berichtkenmerk. For some external parties it is more practical to perform these actions based on the messageReference as identifier."
				},
				{
					"name": "Initialise Payroll Period",
					"value": "Initialise Payroll Period",
					"description": "NL: Initialiseer periode/ automatische processen activeren. One of the first steps in the payroll process is to initialise (automatische processen) for a given payroll period"
				},
				{
					"name": "Initiate Payroll Run",
					"value": "Initiate Payroll Run",
					"description": "NL: Start verloningsrun. This endpoint may be used to start running the actual process of a payroll run. (Verlonen)"
				},
				{
					"name": "Review Payroll Run",
					"value": "Review Payroll Run",
					"description": "NL: Verloningsrun goedkeuren/annuleren. After the payroll run has been succesfully processed (status 1) the results of the run may be either confirmed or cancelled."
				},
				{
					"name": "Undo Payroll Run",
					"value": "Undo Payroll Run",
					"description": "NL: Verloningsrun verwijderen. In exceptional cases the payroll run could be undone after it already has been approved."
				},
				{
					"name": "Apg Pension Declaration",
					"value": "Apg Pension Declaration",
					"description": "NL: Pensioenaangifte APG. Pension declation (pensioenaangiften) for APG ."
				},
				{
					"name": "Last Modified Version Numbers",
					"value": "Last Modified Version Numbers",
					"description": "The version number of an employer or employment may be used to decrease the number of calls in your sync-based integration."
				},
				{
					"name": "Employer Notes",
					"value": "Employer Notes",
					"description": ""
				},
				{
					"name": "Mdv Notifications",
					"value": "Mdv Notifications",
					"description": ""
				},
				{
					"name": "Payroll Run Notes",
					"value": "Payroll Run Notes",
					"description": ""
				},
				{
					"name": "Upa Pension Declaration",
					"value": "Upa Pension Declaration",
					"description": "NL: Pensioenaangifte UPA. Pension declation (pensioenaangiften) for UPA ."
				},
				{
					"name": "Audit Trail Payroll Run",
					"value": "Audit Trail Payroll Run",
					"description": ""
				},
				{
					"name": "Payroll Components",
					"value": "Payroll Components",
					"description": ""
				},
				{
					"name": "Payroll Periods",
					"value": "Payroll Periods",
					"description": ""
				},
				{
					"name": "Initiate Payroll Tax Return",
					"value": "Initiate Payroll Tax Return",
					"description": ""
				},
				{
					"name": "Download Request",
					"value": "Download Request",
					"description": "NL: Werkgever Download Verzoek. An employer user may create a so-called download request. Once this request has been succesfully processed a download (zip file) will be available for this user, containing a wide set of data for the accessible employers. This data may be used for custom reporting or dashboarding etc. Please note this this function is only available for employer users (NOT provider users) and that the download file will contain information related to all employers this specific user has access to. Finally, only the user itself will have access to his/her own download requests."
				},
				{
					"name": "External Tenant Employer User",
					"value": "External Tenant Employer User",
					"description": "External tenants may be used to login to Loket.nl via Azure Active Directory. In order to do that a user must be configured in such a way that it is allowed to a certain external tenant to log in. This resource contains the link between an **employer** user and an allowed external tenant (for that user)"
				},
				{
					"name": "Employer User",
					"value": "Employer User",
					"description": ""
				},
				{
					"name": "Linked Employers",
					"value": "Linked Employers",
					"description": ""
				},
				{
					"name": "Collective Leave",
					"value": "Collective Leave",
					"description": "These endpoints allow the user edit leave for multiple employments."
				},
				{
					"name": "Administration",
					"value": "Administration",
					"description": "NL: Administratie. Retrieve information about all administrations, both payroll administrations and non-payroll administrations."
				},
				{
					"name": "Payroll Administration",
					"value": "Payroll Administration",
					"description": "NL: Salarisverwerkende administratie. Manage a payroll administration. A Payroll administration is the link to the payrolling configuration"
				},
				{
					"name": "Calendar",
					"value": "Calendar",
					"description": "Calendar endpoints. Please note that filtering or ordering using the query string parameters may give somewhat unexpected results in some cases where an employment has been part of more than one department during the given period."
				},
				{
					"name": "User",
					"value": "User",
					"description": "NL: De Loketgebruiker. Loket user"
				},
				{
					"name": "Employer User Notification Settings",
					"value": "Employer User Notification Settings",
					"description": ""
				},
				{
					"name": "Authorizations",
					"value": "Authorizations",
					"description": "NL: Autorisaties (toegestane activities). Acquire the autorizations the user has for the given provider or employer"
				},
				{
					"name": "Employer Dashboard",
					"value": "Employer Dashboard",
					"description": "NL: Werkgever HR dashboard. Go to the Qlik employer dashboard"
				},
				{
					"name": "Workflow Trigger Mapping",
					"value": "Workflow Trigger Mapping",
					"description": "Manage the workflow triggers for the employer. Workflow triggers are triggers that trigger a workflow. With this resource you can manage which trigger will trigger what workflow."
				},
				{
					"name": "National Holiday",
					"value": "National Holiday",
					"description": "NL: Nationale feestdagen. Manage the national holidays for the employer."
				},
				{
					"name": "Billable Item",
					"value": "Billable Item",
					"description": "NL: Factureerbare items. Manage billable items for the employer"
				},
				{
					"name": "Actuals",
					"value": "Actuals",
					"description": "NL: Huidige gegevens"
				},
				{
					"name": "Qwoater",
					"value": "Qwoater",
					"description": "Functionality to enable the Qwoater -> Loket integration"
				},
				{
					"name": "Workflows",
					"value": "Workflows",
					"description": "All workflow related endpoints"
				},
				{
					"name": "Dashboard Licenses",
					"value": "Dashboard Licenses",
					"description": ""
				},
				{
					"name": "Employment Template",
					"value": "Employment Template",
					"description": "NL: Dienstverbandsjabloon. Templates (sjablonen) for creating a new employment"
				},
				{
					"name": "Employer Dossier",
					"value": "Employer Dossier",
					"description": "Employer dossier (werkgeverdossier). Via Qwoater"
				},
				{
					"name": "Document Management",
					"value": "Document Management",
					"description": "Administrative features related to document management."
				},
				{
					"name": "Document Template",
					"value": "Document Template",
					"description": "NL: Document templates tbv documentgeneratie"
				},
				{
					"name": "Email Templates",
					"value": "Email Templates",
					"description": "NL: Emailteksten."
				},
				{
					"name": "Collective Benefits And Deductions",
					"value": "Collective Benefits And Deductions",
					"description": ""
				},
				{
					"name": "Collective Wage",
					"value": "Collective Wage",
					"description": ""
				},
				{
					"name": "External Tenant",
					"value": "External Tenant",
					"description": "External tenants may be used to login to Loket.nl via Azure Active Directory"
				},
				{
					"name": "Leave Types",
					"value": "Leave Types",
					"description": ""
				},
				{
					"name": "Modules",
					"value": "Modules",
					"description": ""
				},
				{
					"name": "Proforma",
					"value": "Proforma",
					"description": ""
				},
				{
					"name": "Linked Departments",
					"value": "Linked Departments",
					"description": ""
				},
				{
					"name": "Employer User Authorizations",
					"value": "Employer User Authorizations",
					"description": ""
				},
				{
					"name": "Provider Leave Policy",
					"value": "Provider Leave Policy",
					"description": "NL: Verlof regeling op providerniveau. Leave policies is used to set rules/ regulations for allocating leave numbers. Based on a leave policy leave can be generated automatically"
				},
				{
					"name": "Notification Sets",
					"value": "Notification Sets",
					"description": ""
				},
				{
					"name": "External Tenant Provider User",
					"value": "External Tenant Provider User",
					"description": "External tenants may be used to login to Loket.nl via Azure Active Directory. In order to do that a user must be configured in such a way that it is allowed to a certain external tenant to log in. This resource contains the link between a **provider** user and an allowed external tenant (for that user)"
				},
				{
					"name": "Billable Items",
					"value": "Billable Items",
					"description": ""
				},
				{
					"name": "Emailtemplates",
					"value": "Emailtemplates",
					"description": ""
				},
				{
					"name": "Payroll Process Status",
					"value": "Payroll Process Status",
					"description": ""
				},
				{
					"name": "User Filter Settings",
					"value": "User Filter Settings",
					"description": "The filtersettings for the user to filter the employments."
				}
			],
			"default": ""
		},
		...achmeaDescription,
		...aowDateDescription,
		...applicationDescription,
		...absenceDescription,
		...absenceProgressDescription,
		...contactHistoryDescription,
		...contactDescription,
		...employerDescription,
		...conceptEmployeeDescription,
		...announcementDescription,
		...dataNewBusinessDescription,
		...departmentsDescription,
		...customHolidayDescription,
		...preboardingTrajectoryDescription,
		...benefitsAndDeductionsDescription,
		...chamberOfCommerceDescription,
		...abpFundsDescription,
		...baseForEmploymentFundCalculationDescription,
		...baseForCalculationDescription,
		...attachmentOfEarningsDescription,
		...providerDescription,
		...authorizationSetsDescription,
		...addressDescription,
		...childDescription,
		...paygradeDescription,
		...conceptEmployeeDossierDescription,
		...assessmentDescription,
		...benefitInKindDescription,
		...educationDescription,
		...employeeCustomFieldDescription,
		...customFieldDescription,
		...educationTypeDescription,
		...educationFurtherIndicationDescription,
		...contractCodeDescription,
		...benefitInKindTypeDescription,
		...generateDocumentDescription,
		...signDocumentDescription,
		...applicationsetsDescription,
		...emailIdentitiesDescription,
		...importDescription,
		...conceptEmployeeSelfServiceDescription,
		...leaveDescription,
		...leaveRequestDescription,
		...leaveBalanceDescription,
		...leavePolicyAndEmploymentLinksDescription,
		...employmentDescription,
		...organizationalEntityDescription,
		...payrollPeriodDataDescription,
		...wageDescription,
		...workingHoursDescription,
		...payslipDescription,
		...yearEndStatementDescription,
		...paymentInformationDescription,
		...paymentInformationSeparatePaymentsDescription,
		...paymentInformationNonSepaDescription,
		...fiscalPropertiesDescription,
		...fiscalCompanyCarDescription,
		...companyCarDescription,
		...otherPayrollVariablesDescription,
		...employmentFundsDescription,
		...socialSecurityDescription,
		...socialSecurityBenefitsDescription,
		...healthcareInsuranceActDescription,
		...protectedEarningsDescription,
		...deviatingAwfContributionDescription,
		...transitionCompensationDescription,
		...activateEmployeeProfileDescription,
		...pensionBenefitDescription,
		...journalAllocationDescription,
		...partnerDescription,
		...declarationsDescription,
		...declarationsAttachmentsDescription,
		...employmentDossierDescription,
		...costPerHourDescription,
		...createEmploymentDescription,
		...deviatingHourlyWageDescription,
		...wachtgeldDescription,
		...customNotificationDescription,
		...employmentCustomFieldDescription,
		...wageProposalDescription,
		...employmentNotesDescription,
		...payrollSimulatorDescription,
		...wageProjectionDescription,
		...employeeNotesDescription,
		...employeeSelfServiceDescription,
		...employeeDescription,
		...employeeBenefitsDescription,
		...leavePolicyDescription,
		...payrollAdministrationProcessOverviewDescription,
		...payrollAdministrationReportsDescription,
		...payrollComponentSetDescription,
		...occupationalDisabilityDescription,
		...changeAddressRequestDescription,
		...changeContactinformationRequestDescription,
		...notificationDescription,
		...functionsDescription,
		...yearEndStatementAtAdministrationLevelDescription,
		...auditTrailDescription,
		...payrollResultsDescription,
		...payrollRunDescription,
		...payrollRunDownloadsDescription,
		...payrollRunResultsDescription,
		...periodReadyForPayrollDescription,
		...journalRunDescription,
		...journalRunResultsDescription,
		...journalRunOverviewDescription,
		...payrollPeriodDataOnAdministrationLevelDescription,
		...payrollTaxReturnDescription,
		...payrollTaxReturnDownloadsDescription,
		...payrollTaxReturnResponseMessageDescription,
		...payrollTaxReturnByMessageReferenceDescription,
		...initialisePayrollPeriodDescription,
		...initiatePayrollRunDescription,
		...reviewPayrollRunDescription,
		...undoPayrollRunDescription,
		...apgPensionDeclarationDescription,
		...lastModifiedVersionNumbersDescription,
		...employerNotesDescription,
		...mdvNotificationsDescription,
		...payrollRunNotesDescription,
		...upaPensionDeclarationDescription,
		...auditTrailPayrollRunDescription,
		...payrollComponentsDescription,
		...payrollPeriodsDescription,
		...initiatePayrollTaxReturnDescription,
		...downloadRequestDescription,
		...externalTenantEmployerUserDescription,
		...employerUserDescription,
		...linkedEmployersDescription,
		...collectiveLeaveDescription,
		...administrationDescription,
		...payrollAdministrationDescription,
		...calendarDescription,
		...userDescription,
		...employerUserNotificationSettingsDescription,
		...authorizationsDescription,
		...employerDashboardDescription,
		...workflowTriggerMappingDescription,
		...nationalHolidayDescription,
		...billableItemDescription,
		...actualsDescription,
		...qwoaterDescription,
		...workflowsDescription,
		...dashboardLicensesDescription,
		...employmentTemplateDescription,
		...employerDossierDescription,
		...documentManagementDescription,
		...documentTemplateDescription,
		...emailTemplatesDescription,
		...collectiveBenefitsAndDeductionsDescription,
		...collectiveWageDescription,
		...externalTenantDescription,
		...leaveTypesDescription,
		...modulesDescription,
		...proformaDescription,
		...linkedDepartmentsDescription,
		...employerUserAuthorizationsDescription,
		...providerLeavePolicyDescription,
		...notificationSetsDescription,
		...externalTenantProviderUserDescription,
		...billableItemsDescription,
		...emailtemplatesDescription,
		...payrollProcessStatusDescription,
		...userFilterSettingsDescription
                ],
        };
}
