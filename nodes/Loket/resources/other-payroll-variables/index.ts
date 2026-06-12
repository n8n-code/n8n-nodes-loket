import type { INodeProperties } from 'n8n-workflow';

export const otherPayrollVariablesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					]
				}
			},
			"options": [
				{
					"name": "Delete Other Payroll Variables By Other Payroll Variables ID",
					"value": "Delete Other Payroll Variables By Other Payroll Variables ID",
					"action": "Delete a specific other payroll variables record",
					"description": "__Activity name :__ DeleteOtherPayrollVariablesByOtherPayrollVariablesId\n\nDelete an existing other payroll variables record (for an employment)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/otherPayrollVariables/{{$parameter[\"otherPayrollVariablesId\"]}}"
						}
					}
				},
				{
					"name": "Get Other Payroll Variables By Other Payroll Variables ID",
					"value": "Get Other Payroll Variables By Other Payroll Variables ID",
					"action": "Details of other payroll variables for an employment",
					"description": "__Activity name :__ GetOtherPayrollVariablesByOtherPayrollVariablesId\n\nGet the details of other payroll variables for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/otherPayrollVariables/{{$parameter[\"otherPayrollVariablesId\"]}}"
						}
					}
				},
				{
					"name": "Put Other Payroll Variables By Other Payroll Variables ID",
					"value": "Put Other Payroll Variables By Other Payroll Variables ID",
					"action": "Change the details of an other payroll variables record",
					"description": "__Activity name :__ PutOtherPayrollVariablesByOtherPayrollVariablesId\n\nChange the details of an other payroll variables record\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/otherPayrollVariables/{{$parameter[\"otherPayrollVariablesId\"]}}"
						}
					}
				},
				{
					"name": "Get Other Payroll Variables By Employment ID",
					"value": "Get Other Payroll Variables By Employment ID",
					"action": "List of other payroll variables for an employment",
					"description": "__Activity name :__ GetOtherPayrollVariablesByEmploymentId\n\nGet a list of the other payroll variables for an employment Other payroll variables are a set of infrequently used properties for the payroll (wage tax and pension) proces\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/otherPayrollVariables"
						}
					}
				},
				{
					"name": "Post Other Payroll Variables By Employment ID",
					"value": "Post Other Payroll Variables By Employment ID",
					"action": "Add other payroll variables for an employment",
					"description": "__Activity name :__ PostOtherPayrollVariablesByEmploymentId\n\nAdd other payroll variables for an employment.\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/otherPayrollVariables"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/otherPayrollVariables/{otherPayrollVariablesId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Delete Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Other Payroll Variables ID",
			"name": "otherPayrollVariablesId",
			"required": true,
			"description": "The unique identifier of the other payroll variables record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Delete Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Delete Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Delete Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Delete Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/otherPayrollVariables/{otherPayrollVariablesId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Other Payroll Variables ID",
			"name": "otherPayrollVariablesId",
			"required": true,
			"description": "The unique identifier of the other payroll variables record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/otherPayrollVariables/{otherPayrollVariablesId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Other Payroll Variables ID",
			"name": "otherPayrollVariablesId",
			"required": true,
			"description": "The unique identifier of the other payroll variables record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Insurance Properties",
			"name": "insuranceProperties",
			"type": "json",
			"default": "{\n  \"applicableForNoRiskPolicy\": false\n}",
			"routing": {
				"send": {
					"property": "insuranceProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Properties",
			"name": "payrollProperties",
			"type": "json",
			"default": "{\n  \"applyYearlyHoursNorm\": false,\n  \"collectiveLaborAgreementCodeHiringEmployer\": {\n    \"endDate\": \"2018-10-23\",\n    \"key\": 151,\n    \"startDate\": \"2018-01-01\",\n    \"value\": \"TUINBOUWVEILINGEN\"\n  },\n  \"deviatingPremiumGroup\": {\n    \"key\": 2,\n    \"value\": \"(1) Agrarisch bedrijf kort\"\n  },\n  \"incidentalIncomeDeduction\": {\n    \"key\": 2,\n    \"value\": \"Bevalling of zwangerschap\"\n  },\n  \"occupationalDisabilityDeductionAfter2009\": 1,\n  \"occupationalDisabilityDeductionTo2009\": 1,\n  \"occupationalDisabilityPremiumDiscount\": {\n    \"key\": 2,\n    \"value\": \"(7) Werknemer van 62, 63 of 64 jaar voor wie code 6 niet van toepassing is\"\n  },\n  \"phaseClassification\": {\n    \"key\": 2,\n    \"value\": \"(38) Fase A zonder uitzendbeding met uitsluiting van ldv\"\n  },\n  \"terminateIncomenumberFlexibleEmployment\": {\n    \"key\": 2,\n    \"value\": \"(1) Einde werk/contract, geen werk aangeboden\"\n  },\n  \"wageCostBenefit\": {\n    \"key\": 2,\n    \"value\": \"LKV herplaatsen arbeidsgehandicapte werknemer\"\n  },\n  \"wajongWithWageDispensation\": false\n}",
			"routing": {
				"send": {
					"property": "payrollProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Pension Properties",
			"name": "pensionProperties",
			"type": "json",
			"default": "{\n  \"annualCalculationBaseAbp\": 1.5,\n  \"applyDispensationRiskFund\": false,\n  \"compulsoryEducationDays\": 2,\n  \"deviatingDisabilityInsuranceActPercentageForCordares\": {\n    \"key\": 2,\n    \"value\": \"15- 25 %\"\n  },\n  \"leaveAbp\": {\n    \"leaveType\": {\n      \"key\": 2,\n      \"value\": \"Politiek verlof\"\n    },\n    \"valueOfParticipationDuringLeave\": 1\n  },\n  \"occupationalPensionFund\": 2,\n  \"specificationOfIncomeRelationshipApg\": {\n    \"code\": \"WNE\",\n    \"key\": 1,\n    \"value\": \"Geen bijzonderheden\"\n  }\n}",
			"routing": {
				"send": {
					"property": "pensionProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Productivity Percentage",
			"name": "productivityPercentage",
			"type": "number",
			"default": 100,
			"description": "productivityPercentage (Productiviteitspercentage) can be used to indicate the productivity percentage of an employment.",
			"routing": {
				"send": {
					"property": "productivityPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this record starts.\n\nA (broken chain)[./#section/Data/Date-chains] is maintained with this record.",
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
						"Other Payroll Variables"
					],
					"operation": [
						"Put Other Payroll Variables By Other Payroll Variables ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/otherPayrollVariables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Get Other Payroll Variables By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/otherPayrollVariables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
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
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Insurance Properties",
			"name": "insuranceProperties",
			"type": "json",
			"default": "{\n  \"applicableForNoRiskPolicy\": false\n}",
			"routing": {
				"send": {
					"property": "insuranceProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Properties",
			"name": "payrollProperties",
			"type": "json",
			"default": "{\n  \"applyYearlyHoursNorm\": false,\n  \"collectiveLaborAgreementCodeHiringEmployer\": {\n    \"endDate\": \"2018-10-23\",\n    \"key\": 151,\n    \"startDate\": \"2018-01-01\",\n    \"value\": \"TUINBOUWVEILINGEN\"\n  },\n  \"deviatingPremiumGroup\": {\n    \"key\": 2,\n    \"value\": \"(1) Agrarisch bedrijf kort\"\n  },\n  \"incidentalIncomeDeduction\": {\n    \"key\": 2,\n    \"value\": \"Bevalling of zwangerschap\"\n  },\n  \"occupationalDisabilityDeductionAfter2009\": 1,\n  \"occupationalDisabilityDeductionTo2009\": 1,\n  \"occupationalDisabilityPremiumDiscount\": {\n    \"key\": 2,\n    \"value\": \"(7) Werknemer van 62, 63 of 64 jaar voor wie code 6 niet van toepassing is\"\n  },\n  \"phaseClassification\": {\n    \"key\": 2,\n    \"value\": \"(38) Fase A zonder uitzendbeding met uitsluiting van ldv\"\n  },\n  \"terminateIncomenumberFlexibleEmployment\": {\n    \"key\": 2,\n    \"value\": \"(1) Einde werk/contract, geen werk aangeboden\"\n  },\n  \"wageCostBenefit\": {\n    \"key\": 2,\n    \"value\": \"LKV herplaatsen arbeidsgehandicapte werknemer\"\n  },\n  \"wajongWithWageDispensation\": false\n}",
			"routing": {
				"send": {
					"property": "payrollProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Pension Properties",
			"name": "pensionProperties",
			"type": "json",
			"default": "{\n  \"annualCalculationBaseAbp\": 1.5,\n  \"applyDispensationRiskFund\": false,\n  \"compulsoryEducationDays\": 2,\n  \"deviatingDisabilityInsuranceActPercentageForCordares\": {\n    \"key\": 2,\n    \"value\": \"15- 25 %\"\n  },\n  \"leaveAbp\": {\n    \"leaveType\": {\n      \"key\": 2,\n      \"value\": \"Politiek verlof\"\n    },\n    \"valueOfParticipationDuringLeave\": 1\n  },\n  \"occupationalPensionFund\": 2,\n  \"specificationOfIncomeRelationshipApg\": {\n    \"code\": \"WNE\",\n    \"key\": 1,\n    \"value\": \"Geen bijzonderheden\"\n  }\n}",
			"routing": {
				"send": {
					"property": "pensionProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Productivity Percentage",
			"name": "productivityPercentage",
			"type": "number",
			"default": 100,
			"description": "productivityPercentage (Productiviteitspercentage) can be used to indicate the productivity percentage of an employment.",
			"routing": {
				"send": {
					"property": "productivityPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this record starts.\n\nA (broken chain)[./#section/Data/Date-chains] is maintained with this record.",
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
						"Other Payroll Variables"
					],
					"operation": [
						"Post Other Payroll Variables By Employment ID"
					]
				}
			}
		},
];
