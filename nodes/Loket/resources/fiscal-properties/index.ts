import type { INodeProperties } from 'n8n-workflow';

export const fiscalPropertiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					]
				}
			},
			"options": [
				{
					"name": "Delete Fiscal Properties By Fiscal Properties ID",
					"value": "Delete Fiscal Properties By Fiscal Properties ID",
					"action": "Delete a specific fiscal properties record",
					"description": "__Activity name:__ DeleteFiscalPropertiesByFiscalPropertiesId\n\nDelete a fiscal properties record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/fiscalproperties/{{$parameter[\"fiscalPropertiesId\"]}}"
						}
					}
				},
				{
					"name": "Get Fiscal Properties By Fiscal Properties ID",
					"value": "Get Fiscal Properties By Fiscal Properties ID",
					"action": "Details of a fiscal record",
					"description": "__Activity name:__ GetFiscalPropertiesByFiscalPropertiesId\n\nGet the details of fiscal\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/fiscalproperties/{{$parameter[\"fiscalPropertiesId\"]}}"
						}
					}
				},
				{
					"name": "Put Fiscal Properties By Fiscal Properties ID",
					"value": "Put Fiscal Properties By Fiscal Properties ID",
					"action": "Edit the details of a fiscal record",
					"description": "__Activity name:__ PutFiscalPropertiesByFiscalPropertiesId\n\nEdit the details for a fiscal properties record\n\nPossible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/fiscalproperties/{{$parameter[\"fiscalPropertiesId\"]}}"
						}
					}
				},
				{
					"name": "Get Fiscal Properties By Employment ID",
					"value": "Get Fiscal Properties By Employment ID",
					"action": "List of fiscal properties for an employment",
					"description": "__Activity name:__ GetFiscalPropertiesByEmploymentId\n    \n\nGet the list of fiscal properties for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/fiscalproperties"
						}
					}
				},
				{
					"name": "Post Fiscal Properties By Employment ID",
					"value": "Post Fiscal Properties By Employment ID",
					"action": "Create a fiscal record for an employment",
					"description": "__Activity name:__ PostFiscalPropertiesByEmploymentId\n    \n\nCreate a fiscal properties record for an employment\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/fiscalproperties"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/fiscalproperties/{fiscalPropertiesId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Delete Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Properties ID",
			"name": "fiscalPropertiesId",
			"required": true,
			"description": "The unique identifier of the fiscal properties record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Delete Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Delete Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Delete Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Delete Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/fiscalproperties/{fiscalPropertiesId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Properties ID",
			"name": "fiscalPropertiesId",
			"required": true,
			"description": "The unique identifier of the fiscal properties record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/fiscalproperties/{fiscalPropertiesId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Properties ID",
			"name": "fiscalPropertiesId",
			"required": true,
			"description": "The unique identifier of the fiscal properties record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Annual Salary",
			"name": "annualSalary",
			"type": "number",
			"default": 60000,
			"description": "The fiscal annual salary. NL: Fiscaal jaarloon",
			"routing": {
				"send": {
					"property": "annualSalary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Day Tables",
			"name": "applyDayTables",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the value of the day table is used for the calculation of payroll tax. NL: DagtabelToepassen",
			"routing": {
				"send": {
					"property": "applyDayTables",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Deviating Payroll Tax Percentage On",
			"name": "applyDeviatingPayrollTaxPercentageOn",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Afwijkend voor tabel- en tariefloon\"\n}",
			"description": "Indicates on what type of payroll calculation the deviating payroll tax percentage is applicable. NL: AfwijkendPercentageToepassen",
			"routing": {
				"send": {
					"property": "applyDeviatingPayrollTaxPercentageOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Payroll Tax Deduction",
			"name": "applyPayrollTaxDeduction",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether payroll tax deduction is appliclable (loonheffingskorting). NL: ArbeidskortingToepassen",
			"routing": {
				"send": {
					"property": "applyPayrollTaxDeduction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Salarysplit",
			"name": "applySalarysplit",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"LB obv wereldinkomen (%NL/WI)\"\n}",
			"description": "Related to the fiscal country of residence of the employee. This might affect the calculation of any applicable loonheffingskortingen.\n",
			"routing": {
				"send": {
					"property": "applySalarysplit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Student Deduction",
			"name": "applyStudentDeduction",
			"type": "boolean",
			"default": false,
			"description": "Apply the \"Scholierenregeling\". NL; ArbeidskortingToepassen",
			"routing": {
				"send": {
					"property": "applyStudentDeduction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Contribution Reduction Education",
			"name": "contributionReductionEducation",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"4. Opleiding hbo\"\n}",
			"description": "Afdr. verm. onderwijs\n",
			"routing": {
				"send": {
					"property": "contributionReductionEducation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Calculation Rule Payroll Tax",
			"name": "deviatingCalculationRulePayrollTax",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Werknemer belastingpl. en niet premiepl. WLZ\"\n}",
			"description": "Indicates if, while calculating payroll taxes and social security contributions, certain deviations are applicable. NL; Herleidingsregel",
			"routing": {
				"send": {
					"property": "deviatingCalculationRulePayrollTax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Payroll Tax Percentage",
			"name": "deviatingPayrollTaxPercentage",
			"type": "number",
			"default": 25,
			"description": "Indicates the deviating payroll tax percentage which is to be applied. NL: AfwijkendLoonbelastingPercentage",
			"routing": {
				"send": {
					"property": "deviatingPayrollTaxPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Payroll Tax Table Colour",
			"name": "deviatingPayrollTaxTableColour",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Werknemer belastingpl. en niet premiepl. WLZ\"\n}",
			"description": "Indicates if there is a deviating payroll tax table is applicable (green vs white table). If 'Niet afwijkend', then the colour is based on the setting at the payroll administration level, either green or white. NL: AfwijkendeKleurLBtabel",
			"routing": {
				"send": {
					"property": "deviatingPayrollTaxTableColour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Percentage Thirty Percent Facility",
			"name": "deviatingPercentageThirtyPercentFacility",
			"type": "number",
			"default": 20.2345,
			"description": "Indicates a deviating percentage which should be applied for the 30% facility (30%-regeling)",
			"routing": {
				"send": {
					"property": "deviatingPercentageThirtyPercentFacility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Small Jobs Arrangement",
			"name": "deviatingSmallJobsArrangement",
			"type": "boolean",
			"default": false,
			"description": "Kleine banenregeling",
			"routing": {
				"send": {
					"property": "deviatingSmallJobsArrangement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Tax Table Code",
			"name": "deviatingTaxTableCode",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"999 Overige gevallen waarin geen tabel is toegepast\"\n}",
			"description": "Indicates if the tax tabel code should be set to a specific code (code loonbelasting). Normally Loket will determine the tax table based on other properties of the employment, however this field allows the user to override this and set the tax table code to 999. Only in exceptional cases this field should have a value. NL: CodeLoonBelastingtabel",
			"routing": {
				"send": {
					"property": "deviatingTaxTableCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Does Wage Include Aow",
			"name": "doesWageIncludeAow",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether wage include AOW pension (affects payrolling). NL: LoonInclusiefAowUitkering",
			"routing": {
				"send": {
					"property": "doesWageIncludeAow",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Does Wage Include Wajong",
			"name": "doesWageIncludeWajong",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether wage include Wajong benefits (affects payrolling). NL: LoonInclusiefWajong",
			"routing": {
				"send": {
					"property": "doesWageIncludeWajong",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Has Employee Loan",
			"name": "hasEmployeeLoan",
			"type": "boolean",
			"default": false,
			"description": "Whether an employee loan (Personeelslening) is applicable may be indicated here. The Personeelslening indirectly affects the income tax calculations.",
			"routing": {
				"send": {
					"property": "hasEmployeeLoan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Percentage Foreign Income",
			"name": "percentageForeignIncome",
			"type": "number",
			"default": 50,
			"description": "Indicates what percentage of the income of this employment is taxable outside the Netherlands. NL: PercentageBuitenlandsInkomen",
			"routing": {
				"send": {
					"property": "percentageForeignIncome",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Resident Of",
			"name": "residentOf",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Andere EU-lidstaat,EER-land,Zwitserland of BES-eilanden\"\n}",
			"description": "Related to the fiscal country of residence of the employee. This might affect the calculation of any applicable loonheffingskortingen. NL: InwonerVan\n",
			"routing": {
				"send": {
					"property": "residentOf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Special Indication",
			"name": "specialIndication",
			"type": "json",
			"default": "{\n  \"four\": 1,\n  \"one\": 1,\n  \"three\": 1,\n  \"two\": 1\n}",
			"description": "Indications This field is no longer used sinds 2005",
			"routing": {
				"send": {
					"property": "specialIndication",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Thirty Percent Facility",
			"name": "thirtyPercentFacility",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Netto\"\n}",
			"description": "If the employee comes to work in the Netherlands from another country, the employer may grant an untaxed reimbursement. (30%-regeling).",
			"routing": {
				"send": {
					"property": "thirtyPercentFacility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "Uses Transport By Withholding Agent",
			"name": "usesTransportByWithholdingAgent",
			"type": "boolean",
			"default": false,
			"description": "The so-called 'vervoer vanwege inhoudingsplichtige' is a tax rule that may apply. By example when the employer organizes the transport for the employee.",
			"routing": {
				"send": {
					"property": "usesTransportByWithholdingAgent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Put Fiscal Properties By Fiscal Properties ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/fiscalproperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Get Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/fiscalproperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Annual Salary",
			"name": "annualSalary",
			"type": "number",
			"default": 60000,
			"description": "The fiscal annual salary. NL: Fiscaal jaarloon",
			"routing": {
				"send": {
					"property": "annualSalary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Day Tables",
			"name": "applyDayTables",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the value of the day table is used for the calculation of payroll tax. NL: DagtabelToepassen",
			"routing": {
				"send": {
					"property": "applyDayTables",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Deviating Payroll Tax Percentage On",
			"name": "applyDeviatingPayrollTaxPercentageOn",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Afwijkend voor tabel- en tariefloon\"\n}",
			"description": "Indicates on what type of payroll calculation the deviating payroll tax percentage is applicable. NL: AfwijkendPercentageToepassen",
			"routing": {
				"send": {
					"property": "applyDeviatingPayrollTaxPercentageOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Payroll Tax Deduction",
			"name": "applyPayrollTaxDeduction",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether payroll tax deduction is appliclable (loonheffingskorting). NL: ArbeidskortingToepassen",
			"routing": {
				"send": {
					"property": "applyPayrollTaxDeduction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Salarysplit",
			"name": "applySalarysplit",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"LB obv wereldinkomen (%NL/WI)\"\n}",
			"description": "Related to the fiscal country of residence of the employee. This might affect the calculation of any applicable loonheffingskortingen.\n",
			"routing": {
				"send": {
					"property": "applySalarysplit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Apply Student Deduction",
			"name": "applyStudentDeduction",
			"type": "boolean",
			"default": false,
			"description": "Apply the \"Scholierenregeling\". NL; ArbeidskortingToepassen",
			"routing": {
				"send": {
					"property": "applyStudentDeduction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Contribution Reduction Education",
			"name": "contributionReductionEducation",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"4. Opleiding hbo\"\n}",
			"description": "Afdr. verm. onderwijs\n",
			"routing": {
				"send": {
					"property": "contributionReductionEducation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Calculation Rule Payroll Tax",
			"name": "deviatingCalculationRulePayrollTax",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Werknemer belastingpl. en niet premiepl. WLZ\"\n}",
			"description": "Indicates if, while calculating payroll taxes and social security contributions, certain deviations are applicable. NL; Herleidingsregel",
			"routing": {
				"send": {
					"property": "deviatingCalculationRulePayrollTax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Payroll Tax Percentage",
			"name": "deviatingPayrollTaxPercentage",
			"type": "number",
			"default": 25,
			"description": "Indicates the deviating payroll tax percentage which is to be applied. NL: AfwijkendLoonbelastingPercentage",
			"routing": {
				"send": {
					"property": "deviatingPayrollTaxPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Payroll Tax Table Colour",
			"name": "deviatingPayrollTaxTableColour",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Werknemer belastingpl. en niet premiepl. WLZ\"\n}",
			"description": "Indicates if there is a deviating payroll tax table is applicable (green vs white table). If 'Niet afwijkend', then the colour is based on the setting at the payroll administration level, either green or white. NL: AfwijkendeKleurLBtabel",
			"routing": {
				"send": {
					"property": "deviatingPayrollTaxTableColour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Percentage Thirty Percent Facility",
			"name": "deviatingPercentageThirtyPercentFacility",
			"type": "number",
			"default": 20.2345,
			"description": "Indicates a deviating percentage which should be applied for the 30% facility (30%-regeling)",
			"routing": {
				"send": {
					"property": "deviatingPercentageThirtyPercentFacility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Small Jobs Arrangement",
			"name": "deviatingSmallJobsArrangement",
			"type": "boolean",
			"default": false,
			"description": "Kleine banenregeling",
			"routing": {
				"send": {
					"property": "deviatingSmallJobsArrangement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Tax Table Code",
			"name": "deviatingTaxTableCode",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"999 Overige gevallen waarin geen tabel is toegepast\"\n}",
			"description": "Indicates if the tax tabel code should be set to a specific code (code loonbelasting). Normally Loket will determine the tax table based on other properties of the employment, however this field allows the user to override this and set the tax table code to 999. Only in exceptional cases this field should have a value. NL: CodeLoonBelastingtabel",
			"routing": {
				"send": {
					"property": "deviatingTaxTableCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Does Wage Include Aow",
			"name": "doesWageIncludeAow",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether wage include AOW pension (affects payrolling). NL: LoonInclusiefAowUitkering",
			"routing": {
				"send": {
					"property": "doesWageIncludeAow",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Does Wage Include Wajong",
			"name": "doesWageIncludeWajong",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether wage include Wajong benefits (affects payrolling). NL: LoonInclusiefWajong",
			"routing": {
				"send": {
					"property": "doesWageIncludeWajong",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Has Employee Loan",
			"name": "hasEmployeeLoan",
			"type": "boolean",
			"default": false,
			"description": "Whether an employee loan (Personeelslening) is applicable may be indicated here. The Personeelslening indirectly affects the income tax calculations.",
			"routing": {
				"send": {
					"property": "hasEmployeeLoan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Percentage Foreign Income",
			"name": "percentageForeignIncome",
			"type": "number",
			"default": 50,
			"description": "Indicates what percentage of the income of this employment is taxable outside the Netherlands. NL: PercentageBuitenlandsInkomen",
			"routing": {
				"send": {
					"property": "percentageForeignIncome",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Resident Of",
			"name": "residentOf",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Andere EU-lidstaat,EER-land,Zwitserland of BES-eilanden\"\n}",
			"description": "Related to the fiscal country of residence of the employee. This might affect the calculation of any applicable loonheffingskortingen. NL: InwonerVan\n",
			"routing": {
				"send": {
					"property": "residentOf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Special Indication",
			"name": "specialIndication",
			"type": "json",
			"default": "{\n  \"four\": 1,\n  \"one\": 1,\n  \"three\": 1,\n  \"two\": 1\n}",
			"description": "Indications This field is no longer used sinds 2005",
			"routing": {
				"send": {
					"property": "specialIndication",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Thirty Percent Facility",
			"name": "thirtyPercentFacility",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Netto\"\n}",
			"description": "If the employee comes to work in the Netherlands from another country, the employer may grant an untaxed reimbursement. (30%-regeling).",
			"routing": {
				"send": {
					"property": "thirtyPercentFacility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Uses Transport By Withholding Agent",
			"name": "usesTransportByWithholdingAgent",
			"type": "boolean",
			"default": false,
			"description": "The so-called 'vervoer vanwege inhoudingsplichtige' is a tax rule that may apply. By example when the employer organizes the transport for the employee.",
			"routing": {
				"send": {
					"property": "usesTransportByWithholdingAgent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Properties"
					],
					"operation": [
						"Post Fiscal Properties By Employment ID"
					]
				}
			}
		},
];
